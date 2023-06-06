import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { useProduct, useSingleProduct } from '@/hooks/use-product';
import { getAllProducts, getProduct } from '@/lib/db';
// import Modal from 'react-modal'
import PageProduct from '@/components/page-product'
import ProductSingle from '@/components/product-single'
import Sheet from 'react-modal-sheet'
import ProductModal from '@/components/Modal'

// Modal.setAppElement('#__next')

const ProductPage = ({
	id,
	fallbackData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {

	let [isOpen, setOpen] = useState(false)
	const router = useRouter()

	const { data, isLoading } = useProduct({
		id,
		fallbackData,
		revalidateOnMount: false,
	});

	const product = !isLoading && data?.product;

	return (
		<>
			{/* <Sheet
				isOpen={true}  // The modal should always be shown on page load, it is the 'page'
				onClose={() => router.push('/')}
				rootId="modal-root"
			>
				<Sheet.Container>
					<Sheet.Header />
					<Sheet.Content>
						<ProductSingle product={product} pathname={router.pathname} />
					</Sheet.Content>
				</Sheet.Container>
				<Sheet.Backdrop />
			</Sheet> */}

			{/* <Modal
				isOpen={true} // The modal should always be shown on page load, it is the 'page'
				onRequestClose={() => router.push('/')}
				contentLabel="Post modal"
				// closeTimeoutMS={1000}
				className="Modal"
				overlayClassName="Overlay"
			>
				<ProductSingle product={product} />
			</Modal> */}

			<PageProduct title={product ? product.title : ''}>
				<ProductSingle product={product} isLoading={isLoading} />
			</PageProduct>
		</>
	);
};

export default ProductPage

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await getAllProducts().then((products) =>
		products.map((product) => ({
			params: {
				id: product.id,
				slug: product.slug
			},
		}))
	);

	return { paths, fallback: true };
};

export const getStaticProps = async (context: { params: { id: string; slug: string; } }) => {
	const product = await getProduct({
		id: context.params.id,
	});

	if (!product) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			id: product.id,
			slug: product.slug,
			fallbackData: {
				product,
			},
		},
		revalidate: 1,
	};
};
