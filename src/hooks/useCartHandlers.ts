
import type { IProduct } from "@interfaces/interfaces";
import { isOnTheList } from "@utilities/fonctions";
import { useState } from "react";

export function useCartHandlers() {

    //State pour la liste des produits dans le panier
    const [cartList, setCartList] = useState<IProduct[]>([]);
    
    const addToCartList = (product: IProduct) => {
    
        const isCartList = (!isOnTheList(cartList, product))
          ? [...cartList, {...product, quantity: 1}]
          : (cartList.map((item) => {
              item = (item.id === product.id)
                ? {...item, quantity: (item.quantity || 0) + 1 }
                : item

              return item;
            })
          )
        ;
    
        setCartList(isCartList);
    }

    const [isCartPage, setIsCartPage ] = useState<boolean>(false);

    const isCartPageActive = (b: boolean) => {
        const weInCartPage = (isCartPage !== b) ? b : isCartPage ;

        setIsCartPage(weInCartPage)
    }
    
    const confirmRemoveMessage = "Are you sure you want to remove this item from your cart?";

    const removeFromCartList = (product: IProduct) => {
        const productInCart = isOnTheList(cartList, product);
    
        const confirmMessage: string = 
            (productInCart && productInCart.quantity)
                ? (productInCart.quantity > 1)
                    ? "There is more than one of this item in your cart. Would you like to remove them all?"
                    : confirmRemoveMessage
                : "This item is not in your cart"
        ;
    
        const isConfirmTrue = (confirm(confirmMessage))
            ? (cartList.filter((item) => item.id !== product.id))
            : cartList
        ;
    
        setCartList(isConfirmTrue);
    }
    
    const decrementQuantity = (product: IProduct) => {
        const productInCart = isOnTheList(cartList, product);
    
        const targetProduct = 
            (productInCart && productInCart.quantity)
                ? (productInCart.quantity > 1)
                    ? (cartList.map((item) => {
                            item = (item.quantity && item.id === product.id)
                                ? {...item, quantity: (item.quantity || 1) - 1}
                                : item
                            ;
                            return item;
                        }))
                    : ((confirm(confirmRemoveMessage)) 
                        ? (cartList.filter((item) => item.id !== product.id))
                        : cartList
                    )
                : cartList
        ;
        
        setCartList(targetProduct);
    }

    return {
        cartList,
        isCartPage,
        isCartPageActive,
        addToCartList,
        removeFromCartList,
        decrementQuantity
    }
}
