import type { IProduct } from "@interfaces/interfaces";
import { isOnTheList } from "@utilities/fonctions";
import { useState } from "react";


export function useFavoriteHandlers() {

    const [favoriteList, setFavoriteList] = useState<IProduct[]>([]);
    
    const toggleFavorite = (product: IProduct) => {
    
        const isFavorite = (!isOnTheList(favoriteList, product)) 
            ? [...favoriteList, product]
            : (favoriteList.filter((item) => item.id !== product.id))
        ;
    
        setFavoriteList(isFavorite);
    }

    return { favoriteList, toggleFavorite }
}