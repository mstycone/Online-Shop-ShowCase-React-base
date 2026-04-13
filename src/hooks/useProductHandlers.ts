
import { useState } from "react";
import type { IProduct } from "@interfaces/products";

export function useProductHandlers() {

    //State pour la liste des produits dans le panier
    const [cartList, setCartList] = useState<IProduct[]>([]);
    
  const isOnTheList = (list: IProduct[], product:IProduct): IProduct | undefined => { 
    return (list.find((item) => item.id === product.id)) ? product : undefined;  
  };
    
    const addTocartList = (product: IProduct) => {
    
        const isCartList = (!isOnTheList(cartList, product))
          ? [...cartList, {...product, quantity: 1}]
          : (cartList.map((item) => {
              item = (item.id === product.id)
                ? {...item, quantity: (item.quantity || 0) + 1 }
                : item
              ;
              return item;
            })
          )
        ;
    
        setCartList(isCartList);
    }
    
    const confirmRemoveMessage = "Are you sure you want to remove this item from your cart?";

    const removeFromcartList = (product: IProduct) => {
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
    
    //State pour ajouter et/ou retirer de la liste de favoris
    const [favoriteList, setFavoriteList] = useState<IProduct[]>([]);
    
    const toggleFavorite = (product: IProduct) => {
    
        const isFavorite = (!isOnTheList(favoriteList, product)) 
            ? [...favoriteList, product]
            : (favoriteList.filter((item) => item.id !== product.id))
        ;
    
        setFavoriteList(isFavorite);
        return favoriteList;
    }
    return {
        cartList,
        setCartList,
        addTocartList,
        removeFromcartList,
        decrementQuantity,
        favoriteList,
        setFavoriteList,
        toggleFavorite
    }
}
