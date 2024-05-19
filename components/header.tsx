'use client'

import routes from '@/configs/routes'
import { cn } from '@/lib/utils'
import { Add, HambergerMenu } from 'iconsax-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from './logo'
import { Button } from './ui/button'

import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'
import useAuth from '@/hooks/use-auth'
import Image from 'next/image'
import Point from './icons/point'

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
		label: 'Khám phá',
		href: routes.explore,
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

	const { accountInfo, logOut } = useAuth()

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
					{accountInfo == null ? (
						<Link href={routes.logIn}>
							<Button>Tham gia ngay</Button>
						</Link>
					) : (
						<div className='flex items-center'>
							<span className='flex items-center mr-4 py-1 font-medium px-2 rounded-full bg-slate-100 text-xs'>
								1200 <Point className='ml-1 h-2.5' />
							</span>
							<Image
								alt='avatar'
								src={accountInfo.avatarUrl}
								width={40}
								height={40}
								className='h-10 w-10 rounded-full object-cover'
							/>
						</div>
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

							{!accountInfo  ? (
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
