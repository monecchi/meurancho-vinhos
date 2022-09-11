import React, { ReactNode } from 'react'
import Head from 'next/head'
import ProductTopBar from '@/components/product-topbar'
// import BottomNav from '@/components/bottom-nav'
import Layout from '@/components/layout'

interface Props {
	title?: string
	children: ReactNode
}

const PageProduct = ({ title, children }: Props) => (
	<>
		{title ? (
			<Head>
				<title>Vinho {title} - Meu Vino | Meu Rancho Pizzaria</title>
			</Head>
		) : null}

		<ProductTopBar title={title} />

		<Layout>
			<main
				/**
				 * Padding top = `appbar` height
				 * Padding bottom = `bottom-nav` height
				 */
				className='mx-auto max-w-screen-md pt-20 pb-16 px-safe sm:pb-0'
			>
				<div className='px-6 py-2'>{children}</div>
			</main>
		</Layout>

		{/* <BottomNav /> */}
	</>
)

export default PageProduct
