import { useCart } from "@hooks";
import type { IProductProps } from "@interfaces/interfaces";
import { FaCartPlus } from "react-icons/fa6";

export const ProductCardHomeFooter = ({product}: IProductProps) => {

    const { addToCartList } = useCart();

    return (
        <div className="card-actions justify-end mt-3">
            <button
                onClick={() => addToCartList(product)}
                className="btn btn-ghost text-xl text-white active:scale-90"
            >
                <FaCartPlus size={30} style={{ margin: 10 }} />
            </button>
        </div>
    );
};
