import type { IStandardPageProps } from '@interfaces/interfaces';
import { PageTitle, ProductList } from '@components';


export const Cart = ({
  addToCartList, 
  toggleFavorite,
  emptyListMessage,
  isFavoritesPage,
  productList, 
  productDB,
  pageTitle,
  removeFromCartList,
  decrementProductQuantity
}: IStandardPageProps) => {


  return (
    <div className="px-8 py-1">
      <PageTitle pageTitle={pageTitle}/>
      <ProductList
        addToCartList={addToCartList}
        toggleFavorite={toggleFavorite}
        emptyListMessage={emptyListMessage}
        isFavoritesPage={isFavoritesPage}
        productList={productList}
        productDB={productDB}
        removeFromCartList={removeFromCartList}
        decrementProductQuantity={decrementProductQuantity}
      />
    </div>
  )
}
