import { ProductList } from '@components';
import type { IProductListProps } from '@interfaces/interfaces';


export const Home = ({
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
        Home
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
