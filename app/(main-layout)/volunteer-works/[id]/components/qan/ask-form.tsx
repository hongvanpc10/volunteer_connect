'use client'

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
import Tiptap from '@/components/ui/tiptap'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
	question: z.string().min(1, 'Nội dung câu hỏi không được để trống'),
})

export default function AskForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			question: '',
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name='question'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Tiptap
									value={field.value}
									onChange={field.onChange}
                                    className='min-h-36'
                                    defaultValue='Đặt câu hỏi tại đây'
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<Alignment align='right' className='mt-4'>
					<Button>Đặt câu hỏi</Button>
				</Alignment>
			</form>
		</Form>
	)
}
