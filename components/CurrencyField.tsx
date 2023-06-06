import React, { useState } from 'react'
import NumberFormat, { NumberFormatProps } from 'react-number-format'

const TextField = ({
	type,
	name,
	value,
	placeholder,
	onChange,
	onBlur
}: {
	type?: string;
	name?: string;
	value: string | number;
	placeholder?: string | " ";
	onChange?: () => void;
	onBlur?: () => void;
}) => {
	return (
		<div>
			<input
				type={type}
				id={name}
				name={name}
				className="block py-2.5 px-0 w-full text-xxl text-center font-bold text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brand-500 focus:outline-none focus:ring-0 focus:border-brand-600 peer"
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
			/>
			<label
				htmlFor={name}
				className="absolute text-sm justify-start text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-600 peer-focus:dark:text-brand-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
				R$
			</label>
		</div>
	)
}

const CurrencyField = ({ onValueChange, ...props }: NumberFormatProps) => {
	/*
	* The default behavior of the NumberFormat is:
	1- To change the cursor position everytime you press the Backspace key
	2- If you type 123 it evaluates to 123,00 instead of 1,23
	3- When you backspace til the field's empty, the final value is not 0,00, but ""
	To change these 3 behaviors the function onValueChange was changed,
	a format function was seted and a keydown function was provided
	*/
	const [value, setValue] = useState<string | number>('');

	const handleChange = (v: any) => {
		// Set the value to value * 100 because it was divided on the field value prop
		setValue(parseFloat(v.value) * 100);
		if (onValueChange) {
			// @ts-ignore
			onValueChange({ ...v, floatValue: v.floatValue / 100 });
		}
	};


	const currencyFormatter = (formatted_value: any) => {
		// Set to 0,00 when "" and divide by 100 to start by the cents when start typing
		if (!Number(formatted_value)) return 'R$ 0,00';
		const br = { style: 'currency', currency: 'BRL' };
		return new Intl.NumberFormat('pt-BR', br).format(formatted_value / 100);
	};

	const keyDown = (e: any) => {
		//This if keep the cursor position on erase if the value is === 0
		if (e.code === 'Backspace' && !value) {
			e.preventDefault();
		}
		// This if sets the value to 0 and prevent the default for the cursor to keep when there's only cents
		if (e.code === 'Backspace' && value < 1000) {
			e.preventDefault();
			setValue(0);
		}
	};

	return (
		<div className="flex relative w-full jz-0 my-8">
			<NumberFormat
				{...props}
				value={Number(value) / 100}
				format={currencyFormatter}
				onValueChange={handleChange}
				prefix={'R$ '}
				allowEmptyFormatting
				decimalSeparator=','
				thousandSeparator='.'
				decimalScale={2}
				//customInput={TextField} // TextField from '@material-ui/core
				onKeyDown={keyDown}
				className='block py-2.5 px-0 w-full text-xxl text-center font-bold text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brand-500 focus:outline-none focus:ring-0 focus:border-brand-600 peer'
			/>
			<label
				htmlFor="pix-amount"
				className="absolute text-sm justify-start text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-600 peer-focus:dark:text-brand-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
				R$
			</label>
		</div>
	);
};

export default CurrencyField;
