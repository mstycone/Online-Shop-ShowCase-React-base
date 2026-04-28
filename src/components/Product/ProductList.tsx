import { ProductCard } from '@components';
import { useCart } from "@hooks";
import type { IProductListProps } from '@interfaces/interfaces';
import { totalPrice } from '@utilities/fonctions';
import { BsBookmarkHeart } from 'react-icons/bs';


export const ProductList = ({
    emptyListMessage,
    isFavoritesPage,
    productList,
    productDB
}: IProductListProps) => {

    const { isCartPage } = useCart();

    const mainProductList = (productDB) 
        ? productDB
        : productList
    ;

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
        { isCartPage && displayTotalPrice }
        <div className="flex flex-wrap justify-center gap-10 mb-40">
            {mainProductList.length > 0 
                ? (mainProductList.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                ) : (ifEmptyList)
            }
        </div>
    </div>
  )
}
