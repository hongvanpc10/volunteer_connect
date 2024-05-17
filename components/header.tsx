'use client'
import Logo from './logo'
import Link from 'next/link'
import Image from 'next/image'
import routes from '@/constants/routes'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { HambergerMenu, Add } from 'iconsax-react'
import { useState } from 'react'

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from './ui/sheet'

const navbar = [
	{
		label: 'Trang chủ',
		href: routes.home,
	},
	{
		label: 'Giới thiệu',
		href: routes.about,
	},
	{
		label: 'Tham gia',
		href: routes.join,
	},
	{
		label: 'Tin tức',
		href: routes.news,
	},
	{
		label: 'Cộng đồng',
		href: routes.community,
	},
]

function Header() {
	const pathName = usePathname()
	const [open, setOpen] = useState<boolean>(false)
	const user = true

	const changeOpenMenuBar = () => {
		setOpen(!open)
	}

	return (
		<div className='h-[6rem] grid place-items-center fixed inset-x-0 bg-white z-50'>
			<header className='h-[2.75rem] container flex justify-between'>
				<Logo />
				<ul className='flex gap-9 font-medium text-base max-lg:hidden'>
					{navbar.map((route, index) => {
						return (
							<li className='h-full' key={index}>
								<Link
									href={route.href}
									className={cn(
										'h-full flex items-center',
										pathName === route.href
											? 'text-primary-400 font-semibold'
											: '',
									)}
								>
									{route.label}
								</Link>
							</li>
						)
					})}
				</ul>

				<div className='flex items-center max-lg:hidden'>
					{!user ? (
						<Link href={routes.logIn}>
							<Button>Tham gia ngay</Button>
						</Link>
					) : (
						<div
							className='h-12 w-12 rounded-full bg-no-repeat bg-center bg-cover border border-solid'
							style={{
								backgroundImage:
									'url("https://i.pinimg.com/474x/59/ef/dc/59efdcc7599b3f4a06b4fe63f4d8d1a1.jpg")',
							}}
						></div>
					)}
				</div>

				<Sheet>
					<SheetTrigger asChild>
						<div
							className='h-full aspect-square flex justify-center items-center lg:hidden cursor-pointer'
							onClick={changeOpenMenuBar}
						>
							<HambergerMenu size='32' color='#000000' />
						</div>
					</SheetTrigger>
					<SheetContent className='p-10 !pt-8 flex flex-col gap-10 overflow-y-auto'>
						<div className='flex items-center justify-between'>
							<Logo />

							<SheetClose asChild>
								<div
									className='bg-primary-100 p-0.5 cursor-pointer rounded-lg opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800'
									onClick={changeOpenMenuBar}
								>
									<Add size='30' color='#498891' className='rotate-45' />
								</div>
							</SheetClose>
						</div>
						{/* {user && (
							<>
								<div className='flex gap-3'>
									<div
										className='h-12 w-12 rounded-full bg-no-repeat bg-center bg-cover border border-solid'
										style={{
											backgroundImage:
												'url("https://i.pinimg.com/474x/59/ef/dc/59efdcc7599b3f4a06b4fe63f4d8d1a1.jpg")',
										}}
									></div>

									<div className='flex-1 flex flex-col justify-between'>
										<p className='font-semibold'>Phạm Hoàng Vinh</p>
										<div className='relative flex items-center gap-1 text-sm font-medium'>
											1024
											<div>
												<Image
													alt='Coin image'
													src={'/images/coin.png'}
													width={512}
													height={512}
													className='w-3.5'
												></Image>
											</div>{' '}
										</div>
									</div>
								</div>

								<div className='h-px w-full bg-black/30 my-5'></div>
							</>
						)} */}

						<div className='flex flex-col gap-7'>
							<ul className='flex flex-col gap-2 font-medium text-base'>
								{navbar.map((route, index) => {
									return (
										<li className='h-full' key={index}>
											<Link
												href={route.href}
												className={cn(
													'h-full flex items-center relative group/animation py-2',
												)}
											>
												<div className='relative'>
													<div className='absolute w-full bg-black h-px -bottom-0.5 rounded-full transition-transform ease-in-out duration-500 scale-0 origin-right group-hover/animation:scale-100 group-hover/animation:origin-left'></div>
													{route.label}
												</div>
											</Link>
										</li>
									)
								})}
							</ul>

							{!user ? (
								<Link href={routes.logIn}>
									<Button className='w-full'>Tham gia ngay</Button>
								</Link>
							) : (
								<Button variant={'outline'}>Đăng xuất</Button>
							)}
						</div>
					</SheetContent>
				</Sheet>
			</header>
		</div>
	)
}

export default Header
