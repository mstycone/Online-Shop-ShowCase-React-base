import type { IProduct } from "@interfaces/interfaces";

export function totalItem(list: IProduct[]): number { return list.reduce((total, item) => total + (item.quantity || 0), 0) }

export function totalPrice(list: IProduct[]): number { 
    const total: number =  list.reduce((total, item) => total + (item.price * (item.quantity || 0)), 0);
    const totalFixed2: number = Number(total.toFixed(2));
    return totalFixed2;
}

export function productPrice (product: IProduct) {
    const productPrice = (product.quantity) 
        ? (Number((product.price * product.quantity).toFixed(2)))
        : (Number(product.price.toFixed(2)))
    ;
    return productPrice;
}