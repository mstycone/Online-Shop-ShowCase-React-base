
import type { IProduct } from "@interfaces/products";

interface IProductImage {
    product: IProduct;
    className: string;
}

export const ProductImage = ({ product, className }: IProductImage) => {
  return (
      <img
          src={"https://fakestoreapi.com/img" + product.image}
          alt={product.title}
          className={className}
      />
  );
}
