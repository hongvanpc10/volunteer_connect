import organizationsApi from '@/apis/organizations'
import Alignment from '@/components/ui/alignment'
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
import Loader from '@/components/ui/loader'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
	title: z.string().min(1, 'Tên sự kiện không được để trống'),
	description: z.string().min(1, 'Mô tả không được để trống'),
	startDate: z.string().min(1, 'Thời gian bắt đầu không được để trống'),
	endDate: z.string().min(1, 'Thời gian kết thúc không được để trống'),
})

export default function AddEvent() {
	const { id } = useParams<{ id: string }>()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: '',
			description: '',
			startDate: '',
			endDate: '',
		},
	})

	const { toast } = useToast()

	const { mutate, isPending } = useMutation({
		mutationFn: organizationsApi.addEvent,
		onSuccess: () => {
			toast({
				description: 'Thêm sự kiện thành công',
			})
			form.reset()
		},
		onError(error) {
			toast({
				description: error.message,
				title: 'Thêm sự kiện thất bại',
			})
		},
	})

	function onSubmit({
		endDate,
		startDate,
		...values
	}: z.infer<typeof formSchema>) {
		mutate({
			...values,
			startDate: new Date(startDate),
			endDate: new Date(endDate),
			volunteerWorkId: id,
		})
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				{isPending && <Loader />}
				<div className='space-y-4'>
					<FormField
						control={form.control}
						name='title'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Tên sự kiện</FormLabel>
								<FormControl>
									<Input
										placeholder='Giai đoạn 1: Đăng kí tham gia'
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
						name='description'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Mô tả</FormLabel>
								<FormControl>
									<Textarea
										placeholder='Mô tả sự kiện'
										className='min-h-32'
										autoFocus
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className='flex items-center space-x-4'>
						<FormField
							control={form.control}
							name='startDate'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Thời gian bắt đầu</FormLabel>
									<FormControl>
										<Input type='datetime-local' {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='endDate'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Thời gian kết thúc</FormLabel>
									<FormControl>
										<Input type='datetime-local' {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>

				<Alignment align='center' className='mt-8'>
					<Button className='min-w-36'>Thêm</Button>
				</Alignment>
			</form>
		</Form>
	)
}
