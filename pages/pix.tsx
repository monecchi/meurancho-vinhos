import { useState, useEffect } from 'react'
import Page from '@/components/page'
import Section from '@/components/section'
import CurrencyField from '@/components/CurrencyField'
import { LoadingDots } from '@/components/Loader'
import { QrCodePix } from 'qrcode-pix'
import PixButton from '@/components/PixButton'

const PixPage = () => {

	const [isLoading, setIsLoading] = useState(false)
	const [amount, setAmount] = useState(0)
	const [inputValue, setInputValue] = useState(null)
	const [qrcode, setQrCode] = useState('')

	// Change currency field value
	const onValueChange = (v: any) => {
		setAmount(v.floatValue)
		setInputValue(v.formattedValue)
		setIsLoading(true)
	}

	const uuid = Math.random().toString(36).slice(-6);

	const qrCodePix = QrCodePix({
		version: '01',
		key: '13067047000114', // or any PIX key
		name: 'MEU RANCHO PIZZARIA LTDA ME',
		city: 'BETIM',
		transactionId: uuid, // max 25 characters
		message: 'Pagamento para Meu Rancho Pizzaria',
		cep: '32604225',
		value: amount > 0 ? amount : undefined,
	});

	useEffect(() => {
		const getPixQR = async () => {
			const pix = await qrCodePix.base64();
			setQrCode(pix);
			setTimeout(() => {
				setIsLoading(false);
			}, 1000);
		}

		if (amount > 0) {
			getPixQR()
		} else {
			setQrCode('');
		}

		return () => {
			// this now gets called when the component unmounts
		};
	}, [amount])

	console.log(amount)

	return (
		<Page title='Pagar com Pix'>
			<Section>
				<h2 className='text-xl text-center font-semibold'>Qual o valor a pagar?</h2>

				<CurrencyField
					onValueChange={onValueChange}
					value={amount}
					onBlur={() => setIsLoading(false)}
				/>

				<div className='mt-2'>
					<p id='floating_helper_text' className='mt-2 text-xs text-zinc-600 dark:text-gray-400'>
						Digite um valor e pague com Pix &quot;Copia e Cola&quot; ou QRCode</p>
				</div>

				<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
					<div className="px-4 py-6 sm:px-0">
						<div className="flex justify-center items-center h-60 rounded-lg border-2 lg:border-4 border-dashed border-zinc-200 dark:border-gray-700">
							{(() => {
								if (amount <= 0) {
									return (
										<span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
											Seu QR Code
										</span>
									)
								} else if (isLoading) {
									return (
										<LoadingDots />
									)
								} else if (!isLoading && qrcode.length > 0) {
									return (
										<div className="flex items-center justify-center w-full mx-auto">
											<img src={qrcode} alt="qrcode" />
										</div>
									)
								} else {
									return null;
								}
							})()}
						</div>

						{!isLoading && qrcode && (
							<div className="product__item-actions mt-4 mb-6">
								<PixButton
									chave="13067047000114"
									nome="Meu Rancho Pizzaria Ltda ME"
									cidade="MINAS GERAIS"
									valor={amount}
									descricao="Pagamento para Meu Rancho Pizzaria"
								/>
							</div>
						)}
					</div>
				</div>

			</Section>
		</Page>
	)

}

export default PixPage
