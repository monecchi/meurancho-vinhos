import useSWR from 'swr';
//import Fuse from 'fuse.js';
import { useState } from 'react';
const options = {
  // isCaseSensitive: false,
  // includeScore: false,
  shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.3,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  minMatchCharLength: 2,
  keys: ['title'],
};
function search(list: any, pattern: any) {
  //const fuse = new Fuse(list, options);

 // return fuse.search(pattern).map((current: { item: any; }) => current.item);
 return false;
}
// import productFetcher from 'utils/api/product';
const productFetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());
interface Props {
  type: string;
  text?: any;
  category?: any;
  offset?: number;
  limit?: number;
}
export default function useProducts(variables: Props) {
  const { type, text, category, offset = 0, limit = 20 } = variables ?? {};
  const { data, mutate, error } = useSWR('/api/products.json', productFetcher);
  const loading = !data && !error;
  // need to remove when you using real API integration
  // const [formattedData, setFormattedData] = useState(false);
  let products = data?.filter((current: { type: string; }) => current.type === type);
  if (category) {
    products = products?.filter((product: { categories: any[]; }) =>
      product.categories.find(
        (category_item) => category_item.slug === category
      )
    );
  }
  if (text) {
    products = search(products, text);
  }
  // let localOffset = offset;
  // let localLimit = limit;
  // const fetchMore = async (os, lmt) => {
  //   localOffset = os;
  //   localLimit = lmt;
  //   setFormattedData(true);
  // };
  // console.log('object');
  // data: [
  //   ...state.data,
  //   ...state.total.slice(
  //     state.data.length,
  //     state.data.length + state.limit
  //   ),
  // ],
  // need to implement fetchMore
  // const hasMore = products?.length > localOffset + localLimit;
  return {
    loading,
    error,
    data: products?.slice(offset, offset + limit),
    // hasMore,
    mutate,
    // fetchMore,
  };
}
