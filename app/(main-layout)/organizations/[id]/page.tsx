import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import Information from './components/infomation'
import Overview from './components/overview'
import Activities from './components/activities'
import { getRandomTextAvatar } from '@/lib/utils'

export default function VolunteerWorkDetailPage() {
	return (
		<div className='container pb-16 pt-6 flex items-start max-xl:flex-col-reverse gap-16 xl:gap-9'>
			<section className='xl:w-[30%] max-xl:w-full max-xl:max-w-[30rem] max-xl:mx-auto space-y-6 xl:sticky top-[6.5rem]'>
				<Overview />
			</section>

			<Separator className='xl:hidden' />

			<section className='max-xl:w-full xl:flex-1'>
				<div className='mb-8'>
					<div className='max-lg:aspect-w-16 -z-[1] max-lg:aspect-h-8 max-sm:aspect-w-16 max-sm:aspect-h-9 mb-4'>
						<Image
							alt='banner'
							src='https://picsum.photos/2048/700'
							width={2048}
							height={2048}
							className='w-full lg:h-auto h-full object-cover rounded-2xl'
						/>
					</div>

					<div className='flex items-end max-lg:items-center max-lg:flex-col -mt-20 lg:ml-10'>
						<Image
							alt='avatar'
							src={getRandomTextAvatar('UIT')}
							width={144}
							height={144}
							className='w-36 h-36 rounded-full object-cover'
						/>
						<div className='lg:ml-4 max-lg:mt-4'>
							<h1 className='text-2xl font-semibold max-lg:text-center'>
								Tên tổ chức tình nguyện
							</h1>

							<h2 className='mt-2 max-lg:text-center'>
								Trường Đại học Công nghệ Thông tin - ĐHQG-HCM
							</h2>
						</div>
					</div>
				</div>

				<Tabs defaultValue='info' className='w-ful'>
					<TabsList className='rounded-none bg-white p-0 justify-start space-x-3 md:space-x-9 mb-6 sticky top-[calc(6rem-2px)] pt-2 pb-3 mt-0 z-10'>
						<TabsTrigger
							className='!bg-transparent p-0 pb-2 rounded-none lg:flex-none md:px-6 px-0 sm:px-3 transition data-[state=active]:text-primary-500 after:content-[""] after:h-[1.2px] after:rounded-full after:absolute relative after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:ease-in data-[state=active]:after:w-full after:block after:bg-primary-500 after:w-0'
							value='info'
						>
							Thông tin
						</TabsTrigger>
						<TabsTrigger
							className='!bg-transparent p-0 pb-2 rounded-none lg:flex-none md:px-6 px-0 sm:px-3 transition data-[state=active]:text-primary-500 after:content-[""] after:h-[1.2px] after:rounded-full after:absolute relative after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:ease-in data-[state=active]:after:w-full after:block after:bg-primary-500 after:w-0'
							value='activities'
						>
							Hoạt động
						</TabsTrigger>
						<TabsTrigger
							className='!bg-transparent p-0 pb-2 rounded-none lg:flex-none md:px-6 px-0 sm:px-3 transition data-[state=active]:text-primary-500 after:content-[""] after:h-[1.2px] after:rounded-full after:absolute relative after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:ease-in data-[state=active]:after:w-full after:block after:bg-primary-500 after:w-0'
							value='posts'
						>
							Bài viết
						</TabsTrigger>
					</TabsList>

					<TabsContent value='info'>
						<Information />
					</TabsContent>

					<TabsContent value='activities'>
						<Activities />
					</TabsContent>
				</Tabs>
			</section>
		</div>
	)
}
