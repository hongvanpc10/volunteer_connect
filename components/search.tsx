'use client'

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import routes from '@/configs/routes'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchNormal1 } from 'iconsax-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
	query: z.string(),
})

function SearchInner() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			query: '',
		},
	})

	const router = useRouter()

	function onSubmit({ query }: z.infer<typeof formSchema>) {
		router.push(routes.search + `?q=${query}`)
	}

	const searchParams = useSearchParams()
	const query = searchParams.get('q')

	useEffect(() => {
		if (query) {
			form.setValue('query', query)
		}
	}, [form, query])

	return (
		<section className='container py-16 flex items-center flex-col'>
			<h2 className='text-4xl font-bold mb-4 text-center'>Khám phá</h2>
			<h3 className='mb-14'>Khám phá các tổ chức, hoạt động yêu thích </h3>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex items-center bg-slate-50 border border-slate-200 max-w-[50rem] w-full p-1 md:p-1.5 md:rounded-2xl rounded-xl'
				>
					<FormField
						control={form.control}
						name='query'
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormControl className='w-full'>
									<input
										placeholder='Phạm Hoàng Vinh'
										className='outline-none bg-transparent flex-1 px-4 md:px-6 w-full'
										{...field}
									/>
								</FormControl>
							</FormItem>
						)}
					/>

					<button className='flex items-center justify-center h-9 md:h-10 px-4 md:px-6 bg-primary-200 rounded-lg md:rounded-xl'>
						<SearchNormal1 className='h-4 md:h-5' />
					</button>
				</form>
			</Form>

			<div className='gap-y-3 flex items-center flex-wrap mb-2 justify-center space-x-3 mt-8'>
				{['UIT', 'MHX', 'XTN', 'CTXH', 'KTX'].map((label, index) => (
					<span
						key={index}
						className='bg-primary-200 text-primary-700 py-1 px-4 rounded-full cursor-pointer transition hover:bg-primary-200/90'
					>
						{label}
					</span>
				))}
			</div>
		</section>
	)
}

export default function Search() {
	return (
		<Suspense>
			<SearchInner />
		</Suspense>
	)
}
