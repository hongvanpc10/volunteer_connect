'use client'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import patterns from '@/constants/patterns'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft } from 'iconsax-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { PersonalContext } from '.'

const formSchema = z
	.object({
		password: z
			.string()
			.min(1, 'Mật khẩu không được để trống')
			.min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
			.regex(
				patterns.password,
				'Mật khẩu phải chứa ít nhất 1 chữ số, 1 chữ thường, 1 chữ hoa',
			),
		confirmPassword: z
			.string()
			.min(1, 'Xác nhận mật khẩu không được để trống')
			.min(8, 'Mật khẩu phải có ít nhất 8 ký tự'),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Mật khẩu không khớp',
		path: ['confirmPassword'],
	})

export default function Step2() {
	const { data, setStep } = useContext(PersonalContext)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			password: '',
			confirmPassword: '',
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		const finalData = { ...data, password: values.password }
		console.log(finalData)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className='space-y-4'>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Mật khẩu</FormLabel>
								<FormControl>
									<Input
										type='password'
										placeholder='********'
										autoFocus
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='confirmPassword'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nhập lại mật khẩu</FormLabel>
								<FormControl>
									<Input type='password' placeholder='********' {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<Button className='w-full mt-10' size='lg'>
					Đăng ký
				</Button>
				<Button
					className='w-full mt-6 rounded-full'
					size='lg'
					variant='outline'
					onClick={() => setStep(1)}
				>
					<ArrowLeft className='h-5 mr-2' />
					Quay lại
				</Button>
			</form>
		</Form>
	)
}
