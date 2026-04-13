import type { IProductListProps } from '@interfaces/interfaces';
import { ProductList } from '@components';


export const Favorites = ({
    addToCartList, 
    toggleFavorite,
    emptyListMessage,
    isFavoritesPage,
    productList
}: IProductListProps) => {

  return (
    <div className="px-8 py-1">
      <h1 className="text-3xl font-bold mb-20 text-left">
        Your Favorites
      </h1>

      <ProductList
        addToCartList={addToCartList}
        toggleFavorite={toggleFavorite}
        emptyListMessage={emptyListMessage}
        isFavoritesPage={isFavoritesPage}
        productList={productList}
      />
    </div>
  );
}
