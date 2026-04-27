import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";
import { productPrice } from "@utilities/fonctions";
import type { IProductProps } from "@interfaces/interfaces";


export const ProductCardInCartFooter = ({ product, addToCartList, decrementProductQuantity }: IProductProps) => {

    const price = productPrice(product);

    return (
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
                        <FaRegSquarePlus size={30} style={{ margin: 10 }} />
                    </button>
                    <span className="text-white font-bold">Quantity</span>
                    <button
                        onClick={() => decrementProductQuantity?.(product)}
                        className="btn btn-ghost px-0 text-xl text-white active:scale-90"
                    >
                        <FaRegSquareMinus size={30} style={{ margin: 10 }} />
                    </button>
                </div>
            </div>
        </div>
    );
};
