import React from 'react';
import { useRouter } from 'next/router'
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { useProduct } from '@/hooks/use-product';
import { getAllProducts, getProduct } from '@/lib/db';
import Page from '@/components/page'
import Section, { SectionHalf } from '@/components/section'
import PixButton from '@/components/PixButton'
import ProductSingle from '@/components/product-single'

const ProductPageOld = ({
	id,
	slug,
	price,
	fallbackData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {

	const router = useRouter()
  // const { id } = router.query

	const { data, isLoading } = useProduct({
		id,
		fallbackData,
		revalidateOnMount: false,
	});

	const product = !isLoading && data?.product;

	return (
		<>
			<Page>
				<SectionHalf>
					<h2 className='text-xl font-semibold'>{product && product.title}</h2>
				</SectionHalf>

				<Section>
					<article className="mt-4 mb-8">
						<h3 className="text-lg font-bold mb-8">{`R$ ${product && price}`}</h3>
						<p>{product && product.description}</p>
					</article>
				</Section>

				<PixButton
					chave="13067047000114"
					nome="Meu Rancho Pizzaria Ltda Me"
					cidade="MINAS GERAIS"
					valor={price}
					descricao={`Vinho ${product && product.title}`}
				/>

			</Page>
		</>
	);
};

export default ProductPageOld

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
			price: product.price,
			fallbackData: {
				product,
			},
		},
		revalidate: 1,
	};
};
