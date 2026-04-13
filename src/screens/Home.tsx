import { ProductCard } from '@components';
import products from '@data/products';
import type { IHomeProps } from '@interfaces/interfaces';


export const Home = ({
    favoriteList, 
    addToCartList, 
    toggleFavorite
}: IHomeProps) => {

  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 mb-40">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            favoriteList={favoriteList}
            addToCartList={addToCartList}
            addToFavoriteList={toggleFavorite}
          />
        ))}
      </div>
    </>
  )
}
