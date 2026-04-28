import { PageTitle, ProductList } from '@components';
import { useCart, useFavorite } from '@hooks';


export const Cart = () => {

  const { favoriteList } = useFavorite();
  const { cartList } = useCart();

  return (
    <div className="px-8 py-1">
      <PageTitle pageTitle="Your Cart" cartList={cartList}/>
      <ProductList
        emptyListMessage="Your Cart is Empty"
        isFavoritesPage={false}
        productList={favoriteList}
        productDB={cartList}
      />
    </div>
  )
}
