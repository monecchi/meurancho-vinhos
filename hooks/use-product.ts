import useSWR, { SWRConfiguration } from 'swr';
import { ProductQuery, ProductRes } from '../pages/api/product/[id]';
import { fetcher, axiosFetcher } from '../utils/fetcher';

export interface UseProductProps extends SWRConfiguration, Partial<ProductQuery> { }

export const useProduct = ({ id, ...config }: UseProductProps) => {
	const swr = useSWR<ProductRes>(!id ? null : '/api/product/' + id, fetcher, config);

	const isLoading = !swr.error && !swr.data;

	return {
		...swr,
		isLoading,
	};
};

export const useSingleProduct = ({ id }: { id: any; }) => {
	const swr = useSWR(`/api/product/${id}`, axiosFetcher)

	const isLoading = !swr.error && !swr.data;

	return {
		...swr,
		isLoading,
	};
}
