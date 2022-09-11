import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { useRouter } from 'next/router'
import { useProducts } from 'hooks/use-all-products'
import { getAllProducts } from 'lib/db'
import Page from '@/components/page'
// import ProductList from '@/components/product-list'
// import Modal from 'react-modal'
import Section from '@/components/section'

// Modal.setAppElement('#__next')

const DynamicProductList = dynamic(() => import('@/components/product-list'), {
	suspense: true,
})

const Index = () => {

	const { data, isLoading } = useProducts();
	const products = !isLoading && data.products;
	const router = useRouter();

	return (
		<>
			{/* <Sheet
				isOpen={!!router.query.id || isOpen}
				onClose={() => router.push('/')}
				rootId="modal-root"
			>
				<Sheet.Container>
					<Sheet.Header />
					<Sheet.Content>
						<ProductSingle id={router.query.id} pathname={router.pathname} />
					</Sheet.Content>
				</Sheet.Container>
				<Sheet.Backdrop onTap={() => setOpen(false)} />
			</Sheet> */}

			{/*
			<Modal
				isOpen={!!router.query.id}
				onRequestClose={() => router.push('/')}
				contentLabel="Post modal"
				// closeTimeoutMS={1000}
				className="Modal"
				overlayClassName="Overlay"
			>
				<ProductSingle product={products && products[0]} />
			</Modal> */}

			<Page title='Vinhos'>
				<Section>
					<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
						Carta de Vinhos
					</h2>

					<hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />

					<div className='mt-2 mb-10'>
						<p className='text-zinc-600 dark:text-zinc-400'>
							Confira alguns rótulos de vinhos nacionais e importados{' '}
							<span className='font-medium text-zinc-900 dark:text-zinc-50'>
								Argentino, Chileno, Português
							</span>{' '}
							e outros.
						</p>
					</div>
				</Section>

				<Suspense fallback={`Carregando...`}>
					<DynamicProductList products={products} isLoading={isLoading} />
				</Suspense>
{/*
				<ProductList products={products} isLoading={isLoading} /> */}

			</Page>
		</>
	);
};

export default Index;

export const getStaticProps = async () => {
	const products = await getAllProducts();

	return {
		props: { products: { products }, fallbackData: { products }, },
		revalidate: 1,
	};
};
