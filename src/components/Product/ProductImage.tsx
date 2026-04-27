import type { IProductImageProps } from "@interfaces/interfaces";

export const ProductImage = ({ product, className }: IProductImageProps) => {
    return (
        <img src={product.image} alt={product.title} className={className} />
    );
};
