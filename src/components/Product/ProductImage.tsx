import type { IProductImageProps } from "@interfaces/interfaces";


export const ProductImage = ({ product, className }: IProductImageProps) => {
  return (
      <img
          src={"https://fakestoreapi.com/img" + product.image}
          alt={product.title}
          className={className}
      />
  );
}
