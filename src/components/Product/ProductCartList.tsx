import { productPrice } from "@utilities/fonctions";
import { ProductImage } from "@components";
import type { IProductProps } from "@interfaces/interfaces";
import { FaTrashCan } from "react-icons/fa6";
import { useCart } from "@hooks";


export const ProductCartList = ({product}: IProductProps ) => {

    const price = productPrice(product);
    const { removeFromCartList } = useCart();
    
    return (
        <li className="list-row relative flex justify-between my-1.5 items-center">
            <div className="indicator hover:bg-transparent">
                <ProductImage
                    product={product}
                    className="size-10 rounded-box bg-white"
                />
                {product.quantity && (
                    <span className="badge badge-sm badge-secondary indicator-item w-8 text-md font-bold">
                        {product.quantity}
                    </span>
                )}
            </div>
            <div>
                <div className="text-xs text-white">{product.title.slice(0, 12)}..</div>
                <div className="text-sm uppercase font-semibold text-white">
                    {price} €
                </div>
            </div>
            <div className="bg-transparent">
                <button 
                    onClick={() => removeFromCartList?.(product)} 
                    className="btn btn-square btn-ghost btn-sm hover:scale-120 active:scale-90"
                >
                    <FaTrashCan size={15} className="text-white/30" />
                </button>
            </div>
        </li>
    );
};
