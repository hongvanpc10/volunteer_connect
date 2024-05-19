const info = [
	{
		title: 'Mô tả',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere blanditiis sapiente voluptas maxime cupiditate. Sint recusandae, magni, aperiam perferendis commodi similique tempore accusamus quis et facere pariatur incidunt? Blanditiis, quasi.',
	},
	{
		title: 'Thông tin liên hệ',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere blanditiis sapiente voluptas maxime cupiditate. Sint recusandae, magni, aperiam perferendis commodi similique tempore accusamus quis et facere pariatur incidunt? Blanditiis, quasi.',
	},
]

function Infomation() {
	return (
		<div className="flex flex-col gap-8">
			{info.map((item, index) => {
                return (
                    <div key={index} className="flex flex-col gap-2">
                        <p className='font-bold text-xl'>{item.title}</p>

                        <div>
                            {item.description}
                        </div>
                    </div>
                )
            })}
		</div>
	)
}

export default Infomation
