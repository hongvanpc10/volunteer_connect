import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getRandomAvatar, getRandomTextAvatar } from '@/lib/utils'
import { ArrowRight } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'

export default function VolunteerWorkDetailPage() {
	return (
		<div className='container pb-16 pt-6 flex items-start gap-9'>
			<section className='w-[27%] space-y-6 sticky top-[6.5rem]'>
				<div className='border border-slate-100 rounded-2xl px-4 py-6 flex items-center flex-col'>
					<Image
						alt='avatar'
						src={getRandomTextAvatar('UIT')}
						width={80}
						height={80}
						className='w-20 h-20 rounded-full object-cover'
					/>
					<h3 className='text-base font-semibold line-clamp-2 text-center mt-2'>
						Tên tổ chức
					</h3>
					<p className='mt-3 text-sm text-center'>
						Trường Đại học Công nghệ Thông tin - ĐHQG-HCM
					</p>
					<Separator className='my-4' />

					<h4 className='text-sm font-medium w-full mb-3'>Thông tin liên hệ</h4>

					<div className='prose w-full prose-sm prose-p:!m-0'>
						<p>Email: example@gmail.com</p>
						<p>SDT: 9999999999</p>
					</div>
					<Separator className='my-4' />
					<h4 className='text-sm font-medium w-full mb-3'>Mô tả</h4>

					<p className='text-sm font-light line-clamp-3'>
						Nisi fugiat eiusmod esse elit dolor velit esse ad incididunt.
						Laboris officia non velit ullamco duis aute culpa et nostrud. Est
						quis adipisicing sit consequat adipisicing proident tempor velit
						irure. Deserunt nostrud nostrud elit deserunt consequat.
					</p>

					<Link
						href={''}
						className='text-primary-500 mt-6 font-medium group flex items-center'
					>
						Xem chi tiết
						<ArrowRight className='h-5 ml-2 transition-all mr-2 group-hover:ml-4 group-hover:mr-0 ease-out' />
					</Link>
				</div>
			</section>

			<section className='flex-1'>
				<div className='mb-9'>
					<Image
						alt='banner'
						src='https://picsum.photos/2048/512'
						width={2048}
						height={2048}
						className='w-full h-auto rounded-2xl mb-4'
					/>

					<h1 className='text-2xl font-semibold'>
						Chiến dịch tình nguyện ở trường UIT
					</h1>

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

						<Button>Đăng ký ngay</Button>
					</div>
				</div>

				<Tabs
					defaultValue='info'
					className='w-full bg-white sticky top-[6.5rem] pb-2'
				>
					<TabsList className='rounded-none bg-transparent p-0 justify-start space-x-16 mb-6'>
						<TabsTrigger
							className='!bg-transparent p-0 pb-2 rounded-none flex-none px-6 transition data-[state=active]:text-primary-500 after:content-[""] after:h-[1.2px] after:rounded-full after:absolute relative after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:ease-in data-[state=active]:after:w-full after:block after:bg-primary-500 after:w-0'
							value='info'
						>
							Thông tin chi tiết
						</TabsTrigger>
						<TabsTrigger
							className='!bg-transparent p-0 pb-2 rounded-none flex-none px-6 transition data-[state=active]:text-primary-500 after:content-[""] after:h-[1.2px] after:rounded-full after:absolute relative after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:ease-in data-[state=active]:after:w-full after:block after:bg-primary-500 after:w-0'
							value='events'
						>
							Sự kiện
						</TabsTrigger>
						<TabsTrigger
							className='!bg-transparent p-0 pb-2 rounded-none flex-none px-6 transition data-[state=active]:text-primary-500 after:content-[""] after:h-[1.2px] after:rounded-full after:absolute relative after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:ease-in data-[state=active]:after:w-full after:block after:bg-primary-500 after:w-0'
							value='qna'
						>
							Hỏi đáp
						</TabsTrigger>
					</TabsList>

					<TabsContent value='info' className='space-y-6 mx-auto max-w-[45rem]'>
						<section>
							<h3 className='font-semibold text-lg mb-4'>Giới thiệu</h3>

							<div className='prose prose-sm max-w-none'>
								<p>
									Lorem tempor ad ea pariatur pariatur veniam mollit nulla
									cillum amet deserunt amet. Commodo adipisicing laborum elit
									est Lorem do cupidatat amet id qui quis. Esse cupidatat ut
									cillum nisi incididunt qui cillum est ad sit et est ullamco
									aliquip. Id amet culpa sunt ea. Elit nostrud ad reprehenderit
									deserunt nisi non nisi.
								</p>
								<p>
									Dolor incididunt elit Lorem et ipsum qui Lorem ex magna magna.
									Ea laborum veniam dolor elit culpa adipisicing duis. Ut duis
									occaecat irure nisi fugiat consectetur sint in quis eu. Sit
									sint minim commodo irure dolor pariatur labore consequat.
									Voluptate dolore aute do aute.
								</p>
							</div>
						</section>

						<section>
							<h3 className='font-semibold text-lg mb-4'>Đối tượng tham gia</h3>

							<div className='prose prose-sm max-w-none'>
								<ul>
									<li>
										<strong>Đối tượng tham gia:</strong> Sinh viên trường Đại
										học Công nghệ Thông tin
									</li>
									<li>
										<strong>Số lượng:</strong> 50
									</li>
								</ul>
							</div>
						</section>

						<section>
							<h3 className='font-semibold text-lg mb-4'>Quyền lợi tham gia</h3>

							<div className='prose prose-sm max-w-none'>
								<p>
									Veniam esse aliquip duis irure consequat laboris incididunt eu
									velit. Ipsum eiusmod exercitation aliquip ea ea aliqua velit
									cillum reprehenderit amet reprehenderit consequat aliquip
									anim. Sit enim labore cillum occaecat reprehenderit.
								</p>
							</div>
						</section>

						<section>
							<h3 className='font-semibold text-lg mb-4'>Thông tin liên hệ</h3>

							<div className='prose prose-sm max-w-none'>
								<ul>
									<li>
										<strong>Email: </strong> example@gmail.com
									</li>
									<li>
										<strong>Số điện thoại: </strong> 0382718305
									</li>
								</ul>
							</div>
						</section>
					</TabsContent>
					<TabsContent value='events'>
						Make changes to your account here.
					</TabsContent>
					<TabsContent value='qna'>Change your password here.</TabsContent>
				</Tabs>
			</section>
		</div>
	)
}
