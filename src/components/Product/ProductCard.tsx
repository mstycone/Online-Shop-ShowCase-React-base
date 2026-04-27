import { ProductFigure, ProductCardHomeFooter, ProductCardInCartFooter } from "@components";
import type { IProductProps } from "@interfaces/interfaces";


export const ProductCard = ({ 
    product, 
    favoriteList, 
    addToCartList, 
    addToFavoriteList, 
    removeFromCartList,
    decrementProductQuantity
}: IProductProps) => {

    const isCartList = (removeFromCartList && decrementProductQuantity)

    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm hover:shadow-xl hover:scale-105 transition-transform">
                <ProductFigure
                    product={product}
                    favoriteList={favoriteList}
                    addToFavoriteList={addToFavoriteList}
                    removeFromCartList={removeFromCartList}
                    decrementProductQuantity={decrementProductQuantity}
                />
                <div className="card-body">
                    <h2 className="card-title self-center line-clamp-2">{product.title}</h2>
                    <div className="badge badge-primary p-4 m-4 font-bold text-lg self-center">
                        {product.price} €
                    </div>
                    <p className="line-clamp-3">{product.description}</p>
                    {(isCartList)
                       ? (
                            <ProductCardInCartFooter
                                product={product}
                                addToCartList={addToCartList}
                                decrementProductQuantity={decrementProductQuantity}
                            />
                        ) : (
                             <ProductCardHomeFooter
                                product={product}
                                addToCartList={addToCartList}
                            />
                        )
                    }
                </div>
            </div>
        </>
    );
};