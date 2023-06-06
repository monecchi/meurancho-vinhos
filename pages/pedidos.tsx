import Page from '@/components/page'
import Section from '@/components/section'

const Pedidos = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold'>Pedidos</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					Que tal pedir uma deliciosa massa ou aquela pizza
					irresistível para acompanhar o seu vinho?
				</p>
				<br />
			</div>
		</Section>

		<Section>
			<h3 className='font-medium'>Comece por aqui</h3>

			<ul className='list-disc space-y-2 px-6 py-2'>
				<li className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a href='https://www.ifood.com.br/delivery/betim-mg/pizzaria-meu-rancho-angola/442ea04f-571b-4af6-8666-ea62bb63c1d8' className='underline' target='_blank' rel='noreferrer'>
						iFood
					</a>{' '}
					todo o nosso cardápio na nossa página no iFood
				</li>

				<li className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a href='https://meurancho.pizza' className='underline' target='_blank' rel='noreferrer'>
						Cardápio e Pedido online
					</a>{' '}
					Peça também pelo nosso site
				</li>
			</ul>
		</Section>
	</Page>
)

export default Pedidos
