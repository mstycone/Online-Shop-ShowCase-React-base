import type { IProductListProps } from '@interfaces/interfaces';
import { ProductList } from '@components';


export const Cart = ({
  addToCartList, 
  toggleFavorite,
  emptyListMessage,
  isFavoritesPage,
  productList, 
  productDB
}: IProductListProps) => {

  return (
    <div className="px-8 py-1">
      <h1 className="text-3xl font-bold mb-20 text-left">
        Your Cart
      </h1>
    
      <ProductList
        addToCartList={addToCartList}
        toggleFavorite={toggleFavorite}
        emptyListMessage={emptyListMessage}
        isFavoritesPage={isFavoritesPage}
        productList={productList}
        productDB={productDB}
      />
    </div>
  )
}
