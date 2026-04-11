import type { IProduct } from "@/interfaces/products";
import { ProductImage } from "./ProductImage";

interface IProductCartListProps {
    product: IProduct;
}

export const ProductCartList = ({ product }: IProductCartListProps) => {
    return (
        <li className="list-row flex justify-between items-center">
            <div>
                <ProductImage
                    product={product}
                    className="size-10 rounded-box bg-white"
                />
            </div>
            <div>
                <div>{product.title.slice(0,15)}...</div>
                <div className="text-xs uppercase font-semibold text-white">
                    {product.price} €
                </div>
            </div>
            <button className="btn btn-square btn-ghost btn-xs bg-transparent">
                X
            </button>
        </li>
    );
};
