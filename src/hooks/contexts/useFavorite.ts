import { useContext } from "react";
import { FavoriteContext } from "@hooks";

const useFavorite = () => {
    const favoriteContext = useContext(FavoriteContext);
    if (!favoriteContext) {
        throw new Error("useCart doit être utilisé à l'intérieur d'un CartProvider !!!");
    } else {
        return favoriteContext
    }
}

export default useFavorite;