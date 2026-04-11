import type { IProduct } from "@/interfaces/products";
import { ProductImage } from "./ProductImage";
import { BsCartDash } from "react-icons/bs";
import { FaTrashCan } from "react-icons/fa6";

interface IProductCartListProps {
    product: IProduct;
}

export const ProductCartList = ({ product }: IProductCartListProps) => {


    return (
        <li className="list-row relative flex justify-between my-1.5 items-center">
            <div className="absolute top-0 right-0 bg-transparent">
                <button className="btn btn-square btn-ghost btn-xs bg-transparent hover:scale-120 active:scale-90">
                    <BsCartDash size={15} className="text-white" />
                </button>
            </div>
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
                    {product.quantity
                        ? Number((product.price * product.quantity).toFixed(2))
                        : Number(product.price.toFixed(2))
                    }
                    €
                </div>
            </div>
            <div className="bg-transparent">
                <button className="btn btn-square btn-ghost btn-sm hover:scale-120 active:scale-90">
                    <FaTrashCan size={15} className="text-white/30" />
                </button>
            </div>
        </li>
    );
};
