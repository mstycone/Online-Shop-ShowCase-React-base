import { ProductCard } from '@components';
import type { IProductListProps } from '@interfaces/interfaces';
import { BsBookmarkHeart } from 'react-icons/bs';
import { totalPrice } from '@utilities/fonctions';


export const ProductList = ({
    addToCartList, 
    toggleFavorite,
    emptyListMessage,
    isFavoritesPage,
    productList,
    productDB,
    decrementProductQuantity,
    removeFromCartList
}: IProductListProps) => {

    const mainProductList = (productDB) 
        ? productDB
        : productList
    ;

    const isCartList = (removeFromCartList && decrementProductQuantity);

    const ifEmptyList = (isFavoritesPage)
        ? (
            <div className="text-2xl text-center my-10">
                <div>{emptyListMessage}</div>
                <div className="inline-block mt-4 text-6xl">
                    <BsBookmarkHeart />
                </div>
            </div>
          )
        : (
            <div className="text-2xl text-center my-10">
                {emptyListMessage}
            </div>
          )
    ;

    const total = totalPrice(mainProductList);
    const displayTotalPrice = <h4 className='text-3xl text-white font-bold mb-5 flex justify-start'>Total : {total}€</h4>;

  return (
    <div>
        { isCartList && displayTotalPrice }
        <div className="flex flex-wrap justify-center gap-10 mb-40">
            {mainProductList.length > 0 
                ? ( 
                    mainProductList.map((product) => (
                        (isCartList) 
                            ? (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    favoriteList={productList}
                                    addToCartList={addToCartList}
                                    addToFavoriteList={toggleFavorite}
                                    removeFromCartList={removeFromCartList}
                                    decrementProductQuantity={decrementProductQuantity}
                                />
                              )
                            : (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    favoriteList={productList}
                                    addToCartList={addToCartList}
                                    addToFavoriteList={toggleFavorite}
                                />
                              )
                    ))
                  )  
                : (ifEmptyList)
            }
        </div>
    </div>
  )
}
