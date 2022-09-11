import PageProduct from '@/components/page-product'
import { Button } from 'flowbite-react'
import Section from '@/components/section'

const Story = () => (
	<PageProduct title='pedido online'>
		<div className="relative mt-4 overflow-hidden bg-transparent dark:bg-zinc-900">
			<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
				<div className="sm:max-w-lg">
					<h1 className="font text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl">Seu pedido online.</h1>
					<p className="mt-4 text-lg text-zinc-600 dark:text-zinc-100">
						Pedir pelo site ou iFood é simples e rápido. Pizzas, massas e outras delícias com o gostinho especial da cozinha mineira.</p>
					<div className="pt-5 pb-5">
						<a href="http://bit.ly/373cLBm"
							className="inline-flex justify-center items-center mr-2 rounded-md border border-transparent bg-brand-500 py-3 px-8 text-center font-medium text-brand-50 hover:bg-brand-700"
							target="_blank"
							rel="noreferrer"
						>
							<span className="w-full">Pedir no iFood</span>
							<svg aria-hidden="true" className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd">
								</path>
							</svg>
						</a>
						<a
							href="https://meurancho.pizza"
							className="inline-flex justify-center items-center rounded-md border border-transparent py-3 px-8 mt-5 md:mt-0 lg:mt-0 text-center font-medium bg-brand-50 text-brand-500 hover:bg-brand-500 hover:text-brand-50"
							target="_blank"
							rel="noreferrer"
						>
							<span className="w-full">Pedir no Site</span>
							<svg aria-hidden="true" className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd">
								</path>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div className="mt-10">
				<div aria-hidden="true" className="pointer-events-none lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
					<div className="my-2">
						<div className="flex items-center space-x-6 lg:space-x-8">
							<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
								<div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
									<img
										src="https://res.cloudinary.com/mrancho/c_lfill,h_512,w_352,g_auto/cardapio/2018/09/a-moda-enhanced-hires.jpg"
										alt="Pizza À Moda (da casa) - Meu Rancho Pizzaria"
										className="h-full w-full object-cover object-center"
									/>
								</div>
								<div className="h-64 w-44 overflow-hidden rounded-lg">
									<img
										src="https://res.cloudinary.com/mrancho/c_lfill,h_512,w_352,g_auto/cardapio/2018/09/carne_de_sol_IMG_2026.jpg"
										alt="Pizza Carne Seca (Carne de Sol) - Meu Rancho Pizzaria"
										className="h-full w-full object-cover object-center"
									/>
								</div>
							</div>
							<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
								<div className="h-64 w-44 overflow-hidden rounded-lg">
									<img
										src="https://res.cloudinary.com/mrancho/c_lfill,h_512,w_352,g_auto/cardapio/2016/10/pizza-cinco-carnes_min.jpg"
										alt="Pizza Cinco Carnes - Meu Rancho Pizzaria" className="h-full w-full object-cover object-center"
									/>
								</div>
								<div className="h-64 w-44 overflow-hidden rounded-lg">
									<img
										src="https://res.cloudinary.com/mrancho/c_lfill,h_512,w_352,g_auto/cardapio/2017/05/picanha-pizza-burguer-recheio-min.jpg"
										alt="Pizzaburguer - Meu Rancho Pizzaria"
										className="h-full w-full object-cover object-center"
									/>
								</div>
								<div className="h-64 w-44 overflow-hidden rounded-lg">
									<img
										src="https://res.cloudinary.com/mrancho/c_lfill,h_512,w_352,g_auto/cardapio/2020/06/Pizza-Nutella-Bueno-Kinder.jpg"
										alt="Pizza Nutella com Bueno - Meu Rancho Pizzaria"
										className="h-full w-full object-cover object-center"
									/>
								</div>
							</div>
							<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
								<div className="h-64 w-44 overflow-hidden rounded-lg">
									<img
										src="https://res.cloudinary.com/mrancho/c_lfill,h_512,w_352,g_north_east/cardapio/2016/06/pizza-firenze_min.jpg"
										alt="Pizza Firenze - Meu Rancho Pizzaria"
										className="h-full w-full object-cover object-center"
									/>
								</div>
								<div className="h-64 w-44 overflow-hidden rounded-lg">
									<img
										src="https://res.cloudinary.com/mrancho/c_lfill,h_512,w_352,g_north_west/cardapio/2016/06/pizza-portuguesa_min.jpg"
										alt="Pizza Portuguesa - Meu Rancho Pizzaria"
										className="h-full w-full object-cover object-center"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</PageProduct>
)

export default Story
