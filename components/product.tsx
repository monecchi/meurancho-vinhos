//
// Product Component
//
const Product = ({ id, pathname }: { id: any; pathname: any; }) => {
  return (
    <div className={'produto'}>
      I am the product {id}; my pathname is: {pathname}
    </div>
  )
}

export default Product
