'use client'

import { Button } from '@/components/ui/button'
import DatePicker from '@/components/ui/date-picker'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import routes from '@/constants/routes'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft } from 'iconsax-react'
import Link from 'next/link'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { PersonalContext } from '.'

const formSchema = z.object({
	firstName: z.string().min(1, 'Họ không được để trống'),
	lastName: z.string().min(1, 'Tên không được để trống'),
	email: z
		.string()
		.min(1, 'Email không được để trống')
		.email('Email không hợp lệ'),
	dob: z.date({
		required_error: 'Ngày sinh không được để trống',
	}),
	phone: z.string().min(1, 'Số điện thoại không được để trống'),
	gender: z.string().min(1, 'Giới tính không được để trống'),
	school: z.string().min(1, 'Trường không được để trống'),
	major: z.string().min(1, 'Ngành học không được để trống'),
	studentCode: z.string().min(1, 'Mã sinh viên không được để trống'),
})

export default function Step1() {
	const { setData, setStep, data } = useContext(PersonalContext)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			dob: data.dob,
			phone: data.phone,
			gender: data.gender,
			school: data.school,
			major: data.major,
			studentCode: data.studentCode,
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		setData(values)
		setStep(2)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className='space-y-3'>
					<div className='flex space-x-3'>
						<FormField
							control={form.control}
							name='firstName'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Họ đệm</FormLabel>
									<FormControl>
										<Input placeholder='Phạm Hoàng' autoFocus {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='lastName'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Tên</FormLabel>
									<FormControl>
										<Input placeholder='Vinh' {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className='flex space-x-4'>
						<FormField
							control={form.control}
							name='dob'
							render={({ field }) => (
								<FormItem className='flex flex-col'>
									<FormLabel>Ngày sinh</FormLabel>
									<DatePicker field={field} />

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='gender'
							render={({ field }) => (
								<FormItem className='flex flex-col'>
									<FormLabel>Giới tính</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder='-- Chọn giới tính --' />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value='male'>Nam</SelectItem>
											<SelectItem value='female'>Nữ</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormField
						control={form.control}
						name='school'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Trường</FormLabel>
								<FormControl>
									<Input
										placeholder='Trường Đại học Công nghệ Thông tin'
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='major'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Ngành học</FormLabel>
								<FormControl>
									<Input placeholder='Nghành Công nghệ thông tin' {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<div className='flex space-x-3'>
						<FormField
							control={form.control}
							name='studentCode'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Mã sinh viên</FormLabel>
									<FormControl>
										<Input placeholder='XXXXXXXX' {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='phone'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Số điện thoại</FormLabel>
									<FormControl>
										<Input placeholder='XXX-XXXX-XXXX' {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										type='email'
										placeholder='example@gmail.com'
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<Button className='w-full mt-10' size='lg'>
					Tạo tài khoản mới
				</Button>
				<Button
					className='w-full mt-6 rounded-full'
					size='lg'
					variant='outline'
					asChild
				>
					<Link href={routes.logIn}>
						<ArrowLeft className='h-5 mr-2' />
						Quay lại Đăng nhập
					</Link>
				</Button>
			</form>
		</Form>
	)
}
