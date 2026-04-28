import { ProductImage } from "@components";
import { useCart, useFavorite } from "@hooks";
import type { IProductProps } from "@interfaces/interfaces";
import { isOnTheList } from "@utilities/fonctions";
import { FaTrashCan} from "react-icons/fa6";

export const ProductFigure = ({product}: IProductProps) => {

    const { toggleFavorite, favoriteList } = useFavorite();
    const { removeFromCartList, isCartPage } = useCart();

    const isFavorite = (!isOnTheList(favoriteList, product))
        ? { fill: "none", strokeWidth: "2.5" }
        :  { fill: "red" , strokeWidth: "0" }
    ;

    const isItCartPage = (isCartPage && removeFromCartList);

    return (
        <figure className="h-80 w-full overflow-hidden bg-white relative">
            <ProductImage
                product={product}
                className="w-full h-full object-contain p-7"
            />
            <button
                onClick={() => toggleFavorite(product)}
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
            {isItCartPage && (
                <div className=" inline-1 absolute top-14 right-10 items-center">
                    <span className="inline-block rounded-lg text-xl text-primary p-1.25 font-bold bg-white text-center">
                        x{product.quantity}
                    </span>
                    <button
                        onClick={() => removeFromCartList(product)}
                        className="btn btn-square btn-ghost btn-sm my-3.25 p-1.5 bg-white text-primary/65 hover:text-primary hover:scale-120 border-none active:scale-90"
                    >
                        <FaTrashCan size={25} />
                    </button>
                </div>
            )}
        </figure>
    );
};
