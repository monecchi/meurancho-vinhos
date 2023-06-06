import { ReactNode, useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import Loader, { LoadingDots } from '@/components/Loader'
import Meta from '@/components/meta'
// import NProgress from 'nprogress'

import '@/styles/globals.css'

// Third-party styles
// import 'nprogress/nprogress.css'
import 'react-loading-skeleton/dist/skeleton.css'

function handleExitComplete() {
	if (typeof window !== 'undefined') {
		window.scrollTo({ top: 0 })
	}
}

const Loading = (props: any): any => {

	const [loading, setLoading] = useState(false);

	const { children }: { children: ReactNode } = props

	const router = useRouter();

	useEffect(() => {
		const handleStart = (url: string) => setLoading(true);
		const handleComplete = (url: string) => setTimeout(() => { setLoading(false) }, 1000);

		router.events.on('routeChangeStart', handleStart)
		router.events.on('routeChangeComplete', handleComplete)
		router.events.on('routeChangeError', handleComplete)

		return () => {
			router.events.off('routeChangeStart', handleStart)
			router.events.off('routeChangeComplete', handleComplete)
			router.events.off('routeChangeError', handleComplete)
		}
	}, [router])

	return loading && (
		<div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white-700 opacity-75 flex flex-col items-center justify-center">
			<LoadingDots />
		</div>
	)
}

const App = ({ Component, pageProps }: AppProps) => {
	const router = useRouter()
	const [showChild, setShowChild] = useState(false)

	useEffect(() => {
		setShowChild(true)
	}, [])

	if (!showChild) {
		return null
	}

	// useEffect(() => {
	//   const handleStart = (url: string) => {
	//     console.log(`Loading: ${url}`)
	//     NProgress.start()
	//   }

	//   const handleStop = () => {
	//     NProgress.done()
	//   }

	//   router.events.on('routeChangeStart', handleStart)
	//   router.events.on('routeChangeComplete', handleStop)
	//   router.events.on('routeChangeError', handleStop)

	//   return () => {
	//     router.events.off('routeChangeStart', handleStart)
	//     router.events.off('routeChangeComplete', handleStop)
	//     router.events.off('routeChangeError', handleStop)
	//   }
	// }, [router])

	return (
		<>
			<AnimatePresence mode='wait' onExitComplete={handleExitComplete}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem={true}
					disableTransitionOnChange
				>
					<Meta />
					<Component {...pageProps} key={router.route} />
					<Loading />
				</ThemeProvider>
			</AnimatePresence>
		</>
	)
}

export default App
