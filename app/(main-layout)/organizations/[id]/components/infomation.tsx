'use client'

export default function Information() {
	return (
		<div className='space-y-8 mx-auto max-w-[45rem]'>
			<section>
				<h3 className='font-semibold text-lg mb-4'>Giới thiệu</h3>

				<div className='prose prose-sm max-w-none'>
					<p>
						Lorem tempor ad ea pariatur pariatur veniam mollit nulla cillum amet
						deserunt amet. Commodo adipisicing laborum elit est Lorem do
						cupidatat amet id qui quis. Esse cupidatat ut cillum nisi incididunt
						qui cillum est ad sit et est ullamco aliquip. Id amet culpa sunt ea.
						Elit nostrud ad reprehenderit deserunt nisi non nisi.
					</p>
					<p>
						Dolor incididunt elit Lorem et ipsum qui Lorem ex magna magna. Ea
						laborum veniam dolor elit culpa adipisicing duis. Ut duis occaecat
						irure nisi fugiat consectetur sint in quis eu. Sit sint minim
						commodo irure dolor pariatur labore consequat. Voluptate dolore aute
						do aute.
					</p>
					<p>
						Ea in sunt minim anim enim exercitation amet anim. Commodo anim
						mollit reprehenderit magna voluptate labore commodo adipisicing
						officia. Ex id do enim aute nostrud nulla laboris velit. Esse
						consectetur irure enim dolore occaecat irure aliqua ad eiusmod sunt
						veniam id ea elit.
					</p>
				</div>
			</section>

			<section>
				<h3 className='font-semibold text-lg mb-4'>Đơn vị trực thuộc</h3>

				<p className='prose prose-sm'>
					Trường Đại học Công nghệ Thông tin - ĐHQG-HCM
				</p>
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
		</div>
	)
}
