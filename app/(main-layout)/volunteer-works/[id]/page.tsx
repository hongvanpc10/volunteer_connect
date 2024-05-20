import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getRandomAvatar } from '@/lib/utils'
import Image from 'next/image'
import Events from './components/events'
import Information from './components/infomation'
import Organization from './components/organization'
import Participants from './components/participants'
import QNA from './components/qan'
import { Separator } from '@/components/ui/separator'

export default function VolunteerWorkDetailPage() {
	return (
		<div className='container pb-16 pt-6 flex items-start max-xl:flex-col-reverse gap-16 xl:gap-9'>
			<section className='xl:w-[30%] max-xl:w-full max-xl:max-w-[30rem] max-xl:mx-auto space-y-6 xl:sticky top-[6.5rem]'>
				<Organization />
			</section>

			<Separator className='xl:hidden' />

			<section className='max-xl:w-full xl:flex-1'>
				<div className='mb-9'>
					<div className='max-lg:aspect-w-16 max-lg:aspect-h-8 max-sm:aspect-w-16 max-sm:aspect-h-9 mb-4'>
						<Image
							alt='banner'
							src='https://picsum.photos/2048/700'
							width={2048}
							height={2048}
							className='w-full lg:h-auto h-full object-cover rounded-2xl'
						/>
					</div>

					<h1 className='text-2xl font-semibold'>
						Chiến dịch tình nguyện ở trường UIT
					</h1>

					<div className='flex items-center mt-2'>
						<span className='py-1.5 px-4 rounded-lg bg-amber-300 text-xs font-medium inline-block'>
							Đang diễn ra
						</span>

						<p className='text-sm ml-4'>
							<strong className='font-medium'>Thời gian: </strong>
							20/10/2021 - 20/11/2021
						</p>
					</div>

					<div className='mt-3 flex items-center justify-between'>
						<div>
							<span className='text-sm'>Đã tham gia 25</span>
							<div className='flex items-center -space-x-1 mt-1'>
								{[...Array(5)].map((_, index) => (
									<Image
										key={index}
										alt='avatar'
										src={getRandomAvatar(true, 'UIT')}
										width={36}
										height={36}
										className='rounded-full object-cover w-9 h-9 border-2 border-white'
									/>
								))}
							</div>
						</div>

						<div className='flex flex-col items-center'>
							<Button>Đăng ký ngay</Button>
							<span className='mt-1'>17:00:00</span>
						</div>
					</div>
				</div>

				<Tabs defaultValue='info' className='w-ful'>
					<TabsList className='rounded-none bg-white p-0 justify-start space-x-3 md:space-x-9 mb-6 sticky top-[calc(6rem-2px)] pt-2 pb-3 mt-0 z-10'>
						<TabsTrigger
							className='!bg-transparent p-0 pb-2 rounded-none sm:flex-none md:px-6 px-0 sm:px-3 transition data-[state=active]:text-primary-500 after:content-[""] after:h-[1.2px] after:rounded-full after:absolute relative after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:ease-in data-[state=active]:after:w-full after:block after:bg-primary-500 after:w-0'
							value='info'
						>
							Thông tin
						</TabsTrigger>
						<TabsTrigger
							className='!bg-transparent p-0 pb-2 rounded-none sm:flex-none md:px-6 px-0 sm:px-3 transition data-[state=active]:text-primary-500 after:content-[""] after:h-[1.2px] after:rounded-full after:absolute relative after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:ease-in data-[state=active]:after:w-full after:block after:bg-primary-500 after:w-0'
							value='participants'
						>
							Tham gia
						</TabsTrigger>
						<TabsTrigger
							className='!bg-transparent p-0 pb-2 rounded-none sm:flex-none md:px-6 px-0 sm:px-3 transition data-[state=active]:text-primary-500 after:content-[""] after:h-[1.2px] after:rounded-full after:absolute relative after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:ease-in data-[state=active]:after:w-full after:block after:bg-primary-500 after:w-0'
							value='events'
						>
							Sự kiện
						</TabsTrigger>
						<TabsTrigger
							className='!bg-transparent p-0 pb-2 rounded-none sm:flex-none md:px-6 px-0 sm:px-3 transition data-[state=active]:text-primary-500 after:content-[""] after:h-[1.2px] after:rounded-full after:absolute relative after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:ease-in data-[state=active]:after:w-full after:block after:bg-primary-500 after:w-0'
							value='qna'
						>
							Hỏi đáp
						</TabsTrigger>
					</TabsList>

					<TabsContent value='info'>
						<Information />
					</TabsContent>
					<TabsContent value='participants'>
						<Participants />
					</TabsContent>
					<TabsContent value='events'>
						<Events />
					</TabsContent>
					<TabsContent value='qna'>
						<QNA />
					</TabsContent>
				</Tabs>
			</section>
		</div>
	)
}
