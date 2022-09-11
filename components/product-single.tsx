import React, { Fragment, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
// import Image from 'next/image'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Section from '@/components/section'
import { ProductDetail } from '@/components/ProductSingleDetail'
import { QrCodePix } from 'qrcode-pix';
import PixButton from '@/components/PixButton'
import { Dialog, Transition } from '@headlessui/react'

const ModalQrCode = (props: any) => {
	const { product } = props

	let [isOpen, setIsOpen] = useState(false)
	const [qrcode, setQrCode] = useState('')

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	const uuid = Math.random().toString(36).slice(-6);

	const qrCodePix = QrCodePix({
		version: '01',
		key: '13067047000114', // or any PIX key
		name: 'MEU RANCHO PIZZARIA LTDA ME',
		city: 'BETIM',
		transactionId: uuid, // max 25 characters
		message: product.title,
		cep: '32604225',
		value: product.price,
	});

	useEffect(() => {
		const getPixQR = async () => {
			const pix = await qrCodePix.base64();
			setQrCode(pix);
		}
		getPixQR()
	}, [])


	return (
		<>
			<div className="flex items-center justify-center">
				<button
					type="button"
					onClick={openModal}
					className="text-center w-full flex-auto inline-flex items-center justify-center rounded-md bg-brand-50 px-5 py-2.5 text-sm font-medium text-brand-600 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
				>
					Pix com QRCode
				</button>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900"
									>
										Pagar com QRCode
									</Dialog.Title>
									<div className="mt-2">
										<p className="text-sm text-gray-500">
											Abra o aplicativo do seu banco e escaneie. Confira o valor e pronto!
										</p>
									</div>

									<div className="flex items-center justify-center w-full mx-auto">
										<img src={qrcode} alt="qrcode" />
									</div>

									<div className="mt-5">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-brand-50 px-4 py-2 text-sm font-medium text-brand-600 hover:bg-brand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
											onClick={closeModal}
										>
											Tudo cento!
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

const ProductSingle = (props: any) => {
	const { product, isLoading } = props
	const { theme } = useTheme()
	const [loading, setIsLoading] = useState(true)

		// Copy pixCode string to clipboard
		const fakeLoading = () => {
			setTimeout(() => {
				setIsLoading(false);
			}, 500);
		};

		// Get pixCode key
		useEffect(() => {
			fakeLoading(); // run it, run it

			return () => {
				// this now gets called when the component unmounts
			};
		}, []);

	if (loading || isLoading) {
		return (
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<Section>
					<SkeletonTheme
						baseColor={theme === 'dark' ? '#26262b' : '#e5e7eb'}
						highlightColor={theme === 'dark' ? '#2e2e33' : '#f3f4f6'}
					>
						<Skeleton className="mb-5" />

						<div className="flex items-center justify-center">
							<Skeleton
								width="100px"
								height={180}
								className="mb-5"
							/>
						</div>

						<Skeleton width={70} className="mb-8" />

						<Skeleton count={5} className="mb-2" />

						<div className="my-5" />

						<Skeleton height={45} className="mt-5 mb-2" />

						<Skeleton height={45} className="mb-6" />

						<Skeleton width={50} height={50} className="mb-8" />

					</SkeletonTheme>
				</Section>
			</div>
		)
	}

	return (
		<>
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<Section className="product__item">
					<h2 className='text-xl font-semibold'>{product.title}</h2>

					<div className='product__item-image-wrapper flex items-center justify-center mt-5'>
						<img
							src={`/images/products/${product.img_url}`}
							alt={product.title}
							className="w-16 md:w-32 lg:w-48"
						/>
					</div>

					<article className="product__item-description mt-4 mb-8">
						<h3 className="text-lg font-bold mb-8">{`R$ ${product && product.price}`}</h3>
						<p>{product && product.description}</p>
					</article>

					<div className="product__item-actions mt-4 mb-6">
						<PixButton
							chave="13067047000114"
							nome="Meu Rancho Pizzaria Ltda ME"
							cidade="MINAS GERAIS"
							valor={product ? product.price : 180}
							descricao={`Vinho ${product && product.title}`}
						/>

						<ModalQrCode product={product} />
					</div>

				</Section>

				<Section className="product__item-details">
					<ul className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
						<li className="flex items-center space-x-3">
							<ProductDetail legend={'Uva'} icon={'grapes'} detail={product.wineStyle} />
						</li>
						<li className="flex items-center space-x-3">
							<ProductDetail legend={'Classificação'} icon={'classification'} detail={product.type + ' ' + product.blend} />
						</li>
						<li className="flex items-center space-x-3">
							<ProductDetail legend={'Teor Alcoólico'} icon={'wine-and-cup'} detail={product.alcohol + ' ABV'} />
						</li>
						<li className="flex items-center space-x-3">
							<ProductDetail legend={'Amadurecimento'} icon={'ageing'} detail={product.ageing} />
						</li>
						<li className="flex items-center space-x-3">
							<ProductDetail legend={'Região'} icon={'winery'} detail={product.region + ' • ' + product.country} />
						</li>
					</ul>

				</Section>
			</div>
		</>
	);
};

export default ProductSingle
