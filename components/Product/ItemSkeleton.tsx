import { useTheme } from 'next-themes'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const ProductItemSkeleton = () => {
	const { theme } = useTheme()
	return (
		<div className="flex w-full">
			<SkeletonTheme
				baseColor={theme === 'dark' ? '#26262b' : '#e5e7eb'}
				highlightColor={theme === 'dark' ? '#2e2e33' : '#f3f4f6'}
			>
				<div className="flex items-center space-x-4 mr-4">
					<Skeleton width={40} height={80} />
				</div>
				<div className="flex-1 min-w-0">
					<Skeleton count={2} />
					<Skeleton width={70} />
				</div>

			</SkeletonTheme>
		</div>
	)
}

export default ProductItemSkeleton;
