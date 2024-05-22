'use client'

import Alignment from '@/components/ui/alignment'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Tiptap from '@/components/ui/tiptap'
import useAuth from '@/hooks/use-auth'
import { Organization } from '@/interfaces/organization'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import AvatarUpdate from '../components/avatar-update'

const formSchema = z.object({
	name: z.string().min(1, 'Tên tổ chức không được để trống'),
	affiliatedUnit: z.string().min(1, 'Đơn vị trực thuộc không được để trống'),
	description: z.string().min(1, 'Mô tả không được để trống'),
	contactInfo: z.string().min(1, 'Thông tin liên hệ không được để trống'),
})

export default function OrganizationForm() {
	const { accountInfo } = useAuth()
	const data = accountInfo as Organization

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			affiliatedUnit: data?.affiliatedUnit,
			contactInfo: data?.contactInfo,
			description: data?.description,
			name: data?.name,
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values)
	}

	return (
		data && (
			<div>
				<AvatarUpdate initialAvatar={data.avatarUrl} />

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<div className='space-y-5'>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Tên tổ chức</FormLabel>
										<FormControl>
											<Input placeholder='Đội Công Tác Xã Hội' {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='affiliatedUnit'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Đơn vị trực thuộc</FormLabel>
										<FormControl>
											<Input
												placeholder='Trường Đại học Công nghệ Thông tin'
												{...field}
											/>
										</FormControl>
										<FormDescription>
											Đơn vị trực thuộc của tổ chức (ví dụ: trường, khoa, ...)
										</FormDescription>

										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='description'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Mô tả</FormLabel>
										<FormControl>
											<Tiptap
												value={field.value}
												onChange={field.onChange}
												className='min-h-36'
											/>
										</FormControl>
										<FormDescription>
											Mô tả tổ chức, hoạt động của tổ chức, mục tiêu, ...
										</FormDescription>

										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='contactInfo'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Thông tin liên hệ</FormLabel>
										<FormControl>
											<Tiptap
												value={field.value}
												onChange={field.onChange}
												className='min-h-36'
											/>
										</FormControl>
										<FormDescription>
											Thông tin liên hệ của tổ chức (email, điện thoại, địa chỉ,
											...)
										</FormDescription>

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<Alignment align='right' className='mt-10'>
							<Button size='lg'>Cập nhật</Button>
						</Alignment>
					</form>
				</Form>
			</div>
		)
	)
}