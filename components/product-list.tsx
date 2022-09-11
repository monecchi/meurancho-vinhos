import { useState, useEffect } from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import ProductItemSkeleton from '@/components/Product/ItemSkeleton';
import Skeleton from 'react-loading-skeleton'

const delay = 1;

const ProductList = (props: any) => {

	const { products, isLoading } = props
	const [loading, setLoading] = useState(true)
	const [isOpen, setOpen] = useState(false)

	useEffect(
		() => {
			let timer1 = setTimeout(() => setLoading(false), delay * 1000);

			// this will clear Timeout
			// when component unmount like in willComponentUnmount
			// and show will not change to true
			return () => {
				clearTimeout(timer1);
			};
		},
		// useEffect will run only one time with empty []
		// if you pass a value to array,
		// like this - [data]
		// than clearTimeout will run every time
		// this value changes (useEffect re-run)
		[]
	)

	if (loading) {
		const numbers = [1, 2, 3, 4, 5, 6];
		return (
			<>
				<div className={'products-list'}>
					<ul className="min-w-xl divide-y divide-gray-200 dark:divide-gray-700">
						{numbers && numbers.map((number) => {
							return (
								<li key={number.toString()} className="pb-3 sm:pb-4">
									<ProductItemSkeleton />
								</li>
							)
						})}
					</ul>
				</div>
			</>
		)
	}

	return (
		<>
			<div className={'products-list'}>
				<ul className="min-w-xl divide-y divide-gray-200 dark:divide-gray-700">
					{products && products.map((product: any) => (
						<li key={product.id} className="pb-3 sm:pb-4">
							<Link href={`/produto/[id]`} as={`/produto/${product.slug}`} scroll={true}>
								<a onClick={() => setOpen(true)}>
									<div className="flex items-center space-x-4">
										<div className="flex-shrink-0">
											<img className="w-8 h-auto" src={`/images/products/${product.img_url}`} alt={product.title} />
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-md font-medium text-gray-900 truncate dark:text-white">
												{isLoading ? <Skeleton /> :
													product.title}
											</p>
											<p className="text-sm text-gray-500 truncate dark:text-gray-400">
												{product.description}
											</p>
											{/* <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{product.type}</span>
										<span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{product.blend}</span> */}
											<span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900">{product.country}</span>
										</div>
										<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
											{`R$ ${product.price}`}
										</div>
									</div>
								</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default ProductList
