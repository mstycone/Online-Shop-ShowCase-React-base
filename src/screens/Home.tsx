import { useProductHandlers } from '@/hooks/useProductHandlers';
import { ProductCard } from '@components';
import products from '@data/products';


export const Home = () => {
    const {
        addTocartList,
        favoriteList,
        toggleFavorite
    } = useProductHandlers()

  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 mb-40">
        {products.map((product: IProduct) => (
          <ProductCard 
            key={product.id} 
            product={product}
            favoriteList={favoriteList}
            addToCartList={() => addTocartList(product)}
            addToFavoriteList={() => toggleFavorite(product)}
          />
        ))}
      </div>
    </>
  )
}
