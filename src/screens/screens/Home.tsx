import { ProductList, PageTitle } from '@components';
import type { IProduct, IStandardPageProps } from '@interfaces/interfaces';
import { useEffect, useState } from 'react';
import { getProducts } from '@services';


export const Home = ({
    addToCartList, 
    toggleFavorite,
    emptyListMessage,
    isFavoritesPage,
    productList,
    pageTitle
}: IStandardPageProps) => {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadProducts(){
      const products = await getProducts();
      const productsDisplay = [...products];
      setProducts(productsDisplay)
    }

    loadProducts();
  }, [])

  return (
    <div className="px-8 py-1">
      <PageTitle pageTitle={pageTitle}/>
      <ProductList
        addToCartList={addToCartList}
        toggleFavorite={toggleFavorite}
        emptyListMessage={emptyListMessage}
        isFavoritesPage={isFavoritesPage}
        productList={productList}
        productDB={products}
      />
    </div>
  )
}
