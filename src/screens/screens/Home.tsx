import { ProductList, PageTitle } from '@components';
import type { IProduct } from '@interfaces/interfaces';
import { useEffect, useState } from 'react';
import { getProducts } from '@services';
import { useFavorite } from '@hooks';


export const Home = () => {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadProducts(){
      const products = await getProducts();
      setProducts(products)
    }

    loadProducts();
  }, [])

  const { favoriteList } = useFavorite();

  return (
    <div className="px-8 py-1">
      <PageTitle pageTitle="Home"/>
      <ProductList
        emptyListMessage="There is no products"
        isFavoritesPage={false}
        productList={favoriteList}
        productDB={products}
      />
    </div>
  )
}
