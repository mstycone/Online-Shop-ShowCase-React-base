import { useContext } from "react";
import { CartContext } from "@hooks";

const useCart = () => {
    const cartContext = useContext(CartContext);
    if (!cartContext) {
        throw new Error("useCart doit être utilisé à l'intérieur d'un CartProvider !!!");
    } else {
        return cartContext
    }
}

export default useCart;