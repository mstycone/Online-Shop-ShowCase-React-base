import { ProductFigure, ProductCardHomeFooter, ProductCardInCartFooter } from "@components";
import type { IProductProps } from "@interfaces/interfaces";
import { useCart } from "@hooks";


export const ProductCard = ({product}: IProductProps) => {

    const { isCartPage } = useCart();

    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm hover:shadow-xl hover:scale-105 transition-transform">
                <ProductFigure
                    product={product}
                />
                <div className="card-body">
                    <h2 className="card-title self-center line-clamp-2">{product.title}</h2>
                    <div className="badge badge-primary p-4 m-4 font-bold text-lg self-center">
                        {product.price} €
                    </div>
                    <p className="line-clamp-3">{product.description}</p>
                    {(isCartPage)
                       ? (
                            <ProductCardInCartFooter
                                product={product}
                            />
                        ) : (
                             <ProductCardHomeFooter
                                product={product}
                            />
                        )
                    }
                </div>
            </div>
        </>
    );
};