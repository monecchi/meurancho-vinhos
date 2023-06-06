import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

type LayoutProps = {
	children: ReactNode
}

const variants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 },
}

const linearanimation = {
	linear: { opacity: 0 },
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
	<motion.main
		initial='hidden'
		animate='enter'
		exit='exit'
		variants={variants}
		transition={{
			ease: 'linear'
		}}
	>
		{children}
	</motion.main>
)

export default Layout
