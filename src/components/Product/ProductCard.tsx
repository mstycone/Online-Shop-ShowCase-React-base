import { productPrice } from "@utilities/fonctions";
import { ProductImage } from "@components";
import type { IProductProps } from "@interfaces/interfaces";
import { FaCartPlus, FaTrashCan, FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";


export const ProductCard = ({ 
    product, 
    favoriteList, 
    addToCartList, 
    addToFavoriteList, 
    removeFromCartList,
    decrementProductQuantity
}: IProductProps) => {

    const isFavorite = 
        (!favoriteList.find((i) => i.id === product.id))
            ? { fill: "none", strokeWidth: "2.5" }
            :  { fill: "red" , strokeWidth: "0" }
    ;

    const isCartList = (removeFromCartList && decrementProductQuantity)
    const price = productPrice(product);


    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm hover:shadow-xl hover:scale-105 transition-transform">
                <figure className="h-80 w-full overflow-hidden bg-white relative">
                    <ProductImage 
                        product={product} 
                        className="w-full h-full object-contain p-7" 
                    />
                    <button 
                        onClick={() => addToFavoriteList(product)} 
                        className="btn btn-circle btn-ghost tooltip tooltip-primary tooltip-left absolute top-2 right-2 bg-white backdrop-blur-sm border-none active:scale-90"
                        data-tip="Add to favorites"

                    >             
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill={isFavorite.fill}
                                viewBox="0 0 24 24"
                                strokeWidth={isFavorite.strokeWidth}
                                stroke="black"
                                className="size-[2.5em] hover:stroke-red-500 transition-colors"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                />
                            </svg>
                        </button>
                        { 
                            (isCartList)
                                ? (
                                    <div className=" inline-1 absolute top-14 right-10 items-center">
                                        <span className="inline-block rounded-lg text-xl text-primary p-1.25 font-bold bg-white border- text-center">
                                            x{product.quantity}
                                        </span>
                                        <button 
                                            onClick={()=>removeFromCartList(product)} 
                                            className="btn btn-square btn-ghost btn-sm my-3.25 p-1.5 bg-white hover:scale-120 border-none active:scale-90"
                                        >
                                            <FaTrashCan size={25} className="text-primary/65 hover:text-primary" />
                                        </button>
                                    </div>
                                  )
                                : null
                        }
                </figure>
                <div className="card-body">
                    <h2 className="card-title self-center line-clamp-2">{product.title}</h2>
                    <div className="badge badge-primary p-4 m-4 font-bold text-lg self-center">
                        {product.price} €
                    </div>
                    <p className="line-clamp-3">{product.description}</p>
                    {
                        (isCartList)
                            ? (
                                <div>
                                    <div className="card-actions mt-3 flex justify-between ">
                                        <span className="text-info text-base font-bold my-auto">
                                            Total € : {price}
                                        </span>
                                        <div className="">
                                            <button 
                                                onClick={() => addToCartList(product)} 
                                                className="btn btn-ghost px-0 text-xl text-white active:scale-90"
                                            >
                                                <FaRegSquarePlus size={30} style={{margin: 10}}/>
                                            </button>
                                            <span className="text-white font-bold">Quantity</span>
                                            <button 
                                                onClick={() => decrementProductQuantity(product)} 
                                                className="btn btn-ghost px-0 text-xl text-white active:scale-90"
                                            >
                                                <FaRegSquareMinus size={30} style={{margin: 10}}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                              )
                            : (
                                <div className="card-actions justify-end mt-3">
                                    <button 
                                        onClick={() => addToCartList(product)} 
                                        className="btn btn-ghost text-xl text-white active:scale-90"
                                    >
                                        <FaCartPlus size={30} style={{margin: 10}}/>
                                    </button>
                                </div>
                              )
                    }
                </div>
            </div>
        </>
    );
};