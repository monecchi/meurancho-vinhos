import Page from '@/components/page'
import Section from '@/components/section'

const NotFound = () => {
	return (
		<Page title='Página não encontrada'>
			<Section className="flex justify-center items-center w-full h-full">
				<div className="text-center text-gray-600 dark:text-gray-200 font-semibold mt-20 text-2xl">Oops! página não encontrada 😢</div>
			</Section>
		</Page>
	)
}

export default NotFound
