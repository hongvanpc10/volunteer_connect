'use client'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import routes from '@/constants/routes'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, ArrowRight } from 'iconsax-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
	email: z
		.string()
		.min(1, 'Email không được để trống')
		.email('Email không hợp lệ'),
})

export default function ForgetPasswordForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<h1 className='text-2xl font-bold mb-2'>Khôi phục mật khẩu</h1>
				<h2 className='mb-6'>
					Nhập email dùng để đăng kí để khôi phục lại mật khẩu
				</h2>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									type='email'
									placeholder='example@gmail.com'
									autoFocus
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<Button className='mt-8'>
					Tiếp tục
					<ArrowRight className='ml-2 h-5' />
				</Button>
				<Button
					className='mt-6 w-full rounded-full'
					size='lg'
					variant='outline'
					asChild
				>
					<Link href={routes.logIn}>
						<ArrowLeft className='mr-2 h-5' />
						Quay lại đăng nhập
					</Link>
				</Button>
			</form>
		</Form>
	)
}
