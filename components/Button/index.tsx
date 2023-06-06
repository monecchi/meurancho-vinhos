import { ReactNode } from 'react'

export type ButtonProps = {
	children: ReactNode;
	className: string | any;
	onClick: ()=> void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >{children}</button>
  )
}

export default Button
