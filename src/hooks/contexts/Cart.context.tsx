import { createContext, type ReactNode } from "react";
import type { CartContextType } from "@interfaces/interfaces";
import { useCartHandlers } from "@hooks";

interface CartProviderType {
    children: ReactNode
}

const CartContext = createContext<CartContextType>({
    cartList: [],
    addToCartList: () => {},
    isCartPage: false,
    isCartPageActive: () => {},
    removeFromCartList: () => {},
    decrementQuantity: () => {}
})

export const CartProvider = ({children}: CartProviderType) => {

    const cartHandlers = useCartHandlers()

    return (
        <CartContext.Provider value={cartHandlers}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;