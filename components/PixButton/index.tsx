import React, { useState, useEffect } from 'react'
import { ToastSuccess } from '@/components/toast'
import { QrCodePix } from 'qrcode-pix'
import useCopy from '@/hooks/useCopy'

// example
// const code = Pix("13067047000114", "Meu Rancho Pizzaria Ltda ME", "Minas Gerais", 155.00, "Pedido #123456");
// return "00020126490014br.gov.bcb.pix01091234567890214Pedid…1SILVA SILVA6014RIO DE JANEIRO62070503***6304E92D"

const PixButton = ({
	chave,
	nome,
	cidade,
	valor,
	descricao
}: {
	chave: string;
	nome: string;
	cidade: string;
	valor?: number;
	descricao: string;
	qrcode?: boolean | undefined;
}) => {

	const uuid = Math.random().toString(36).slice(-6);

	const qrCodePix = QrCodePix({
		version: '01',
		key: chave, // or any PIX key
		name: nome,
		city: cidade,
		transactionId: uuid, // max 25 characters
		message: descricao,
		cep: '32604225',
		value: valor,
	});

	const [pixCode, SetPixCode] = useState('')
	const [show, SetShow] = useState(false)
	const [copied, copy, setCopied] = useCopy(pixCode || '');

	// Copy pixCode string to clipboard
	const copyText = () => {
		copy();

		setTimeout(() => {
			setCopied(false);
		}, 3000);
	};

	// Get pixCode key
	useEffect(() => {
		const getPixKey = async () => {
			const pix = qrCodePix.payload();
			SetPixCode(pix);
		};

		getPixKey(); // run it, run it

		return () => {
			// this now gets called when the component unmounts
		};
	}, []);

	return (
		<>
			<button
				type="button"
				className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full flex-auto inline-flex items-center justify-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
				onClick={() => SetShow(!show)}
			>
				<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" className="mr-2">
					<g fill="#4BB8A9" fillRule="evenodd">
						<path d="M112.57 391.19c20.056 0 38.928-7.808 53.12-22l76.693-76.692c5.385-5.404 14.765-5.384 20.15 0l76.989 76.989c14.191 14.172 33.045 21.98 53.12 21.98h15.098l-97.138 97.139c-30.326 30.344-79.505 30.344-109.85 0l-97.415-97.416h9.232zm280.068-271.294c-20.056 0-38.929 7.809-53.12 22l-76.97 76.99c-5.551 5.53-14.6 5.568-20.15-.02l-76.711-76.693c-14.192-14.191-33.046-21.999-53.12-21.999h-9.234l97.416-97.416c30.344-30.344 79.523-30.344 109.867 0l97.138 97.138h-15.116z" />
						<path d="M22.758 200.753l58.024-58.024h31.787c13.84 0 27.384 5.605 37.172 15.394l76.694 76.693c7.178 7.179 16.596 10.768 26.033 10.768 9.417 0 18.854-3.59 26.014-10.75l76.989-76.99c9.787-9.787 23.331-15.393 37.171-15.393h37.654l58.3 58.302c30.343 30.344 30.343 79.523 0 109.867l-58.3 58.303H392.64c-13.84 0-27.384-5.605-37.171-15.394l-76.97-76.99c-13.914-13.894-38.172-13.894-52.066.02l-76.694 76.674c-9.788 9.788-23.332 15.413-37.172 15.413H80.782L22.758 310.62c-30.344-30.345-30.344-79.524 0-109.868" />
					</g>
				</svg>
				PIX copia e cola
			</button>

			{copied && (
				<ToastSuccess message="Copiado com sucesso!" />
			)}

			{show && (
				<section>
					<div className="relative items-center w-full pb-4 mx-auto max-w-7xl">
						<div className="grid grid-cols-1">
							<div className="w-full max-w-lg mx-auto my-4 bg-white dark:bg-gray-800 rounded-xl">
								<div className="p-6">
									<div>
										<div className="mt-3 text-left sm:mt-5">
											<p className="mt-3 text-base leading-relaxed text-gray-500 dark:text-gray-400">Copie o código de pagamento</p>
										</div>
									</div>
									<div className="justify-end mt-3">
										<div className="relative mt-1 rounded-md shadow-sm">
											<div
												className="w-full text-base text-neutral-600 dark:text-gray-400 border-none rounded-lg dark:bg-slate-700 overflow-y-hidden overflow-x-auto"
											>
												<code className="w-full text-md">{pixCode}</code>
											</div>
										</div>
									</div>
									<div className="flex items-center justify-center mt-3">
										<button
											type="button"
											onClick={copyText}
											className="text-center w-full flex-auto inline-flex items-center justify-center rounded-md bg-brand-50 px-5 py-2.5 text-sm font-medium text-brand-600 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
										>
											Copiar
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	)
}

export default PixButton;
