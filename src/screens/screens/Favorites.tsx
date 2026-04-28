import { PageTitle, ProductList } from '@components';
import { useFavorite } from '@hooks';


export const Favorites = () => {

  const { favoriteList } = useFavorite();

  return (
    <div className="px-8 py-1">
      <PageTitle pageTitle="Your Favorites"/>
      <ProductList
        emptyListMessage="You have no Favorites Yet"
        isFavoritesPage={true}
        productList={favoriteList}
      />
    </div>
  );
}
