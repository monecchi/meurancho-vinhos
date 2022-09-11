import Link from 'next/link'
import { useRouter } from 'next/router'
import ThemeSwitchButton from '@/components/ThemeSwitch'

const links = [
	{ label: 'Pix', href: '/pix' },
	{ label: 'Pedidos', href: '/pedidos' },
]

const Appbar = () => {
	const router = useRouter()

	return (
		<div className='fixed top-0 left-0 z-20 w-full bg-zinc-900 pt-safe'>
			<header className='border-b bg-zinc-100 px-safe dark:border-zinc-800 dark:bg-zinc-900'>
				<div className='header-mobile mx-auto flex max-w-screen-md items-center justify-between px-6'>
					<Link href='/'>
						<a>
							<h1 className='font-medium'><span className='font-bold'>Meu Rancho</span> Vinhos</h1>
						</a>
					</Link>

					<nav className='flex items-center space-x-6'>
						<div className='hidden sm:block'>
							<div className='flex items-center space-x-6'>
								{links.map(({ label, href }) => (
									<Link key={label} href={href}>
										<a
											className={`text-sm ${router.pathname === href
													? 'text-brand-500 dark:text-brand-100'
													: 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
												}`}
										>
											{label}
										</a>
									</Link>
								))}
							</div>
						</div>

						<ThemeSwitchButton />

						<Link href='/sobre'>
						<a>
							<div
								title='Meu Rancho Pizzaria'
								className='h-10 w-10 rounded-full bg-zinc-200 bg-cover bg-center shadow-inner dark:bg-zinc-800'
								style={{
									backgroundImage:
										'url(https://static-images.ifood.com.br/image/upload/t_high/logosgde/442ea04f-571b-4af6-8666-ea62bb63c1d8/202104011757_58q0_i.png)',
								}}
							/>
							</a>
						</Link>

					</nav>
				</div>
			</header>
		</div>
	)
}

export default Appbar
