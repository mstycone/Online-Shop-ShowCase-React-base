import type { INavigationCartProps } from "@interfaces/interfaces";
import { Link } from "react-router";
import { ProductCartList } from "../Product/ProductCartList";
import { FaCartShopping } from "react-icons/fa6";


export const NavigationCart = ({
    cartList,
    removeFromCartList,
    decrementProductQuantity
}: INavigationCartProps) => {

    const totalItemInCart = cartList.reduce((total, item) => total + (item.quantity || 0), 0);
    const totalPrice = cartList.reduce((total, item) => total + (item.price * (item.quantity || 0)), 0);
    const scrollBarON = cartList.length > 3 ? "overflow-y-scroll scrollbar-thin" : "";
    const isCartEmpty = cartList.length === 0 ? "" : "scroll-smooth min-h-100 max-h-110";

    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle bg-transparent border-transparent"
            >
                <div className="indicator">
                    <FaCartShopping size={30} className="text-white/95" />
                    <span className="badge badge-sm indicator-item text-sm hover:scale-105 active:scale-95">
                        {totalItemInCart >= 99 ? "99+" : totalItemInCart}
                    </span>
                </div>
            </div>
            <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-70 shadow"
            >
                <div className="card-body">
                    <span className="text-lg font-bold text-white/90">
                        {totalItemInCart > 99 ? "99+" : totalItemInCart} Item
                        {totalItemInCart > 1 ? "s" : ""}
                    </span>
                    <span className="text-info font-bold">
                        Subtotal: {Number(totalPrice.toFixed(2))} €
                    </span>
                    <div className="card-actions flex flex-col w-full">
                        <div className="collapse collapse-arrow bg-base-200 rounded-md">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title btn btn-primary btn-block min-h-0 h-11 flex items-center justify-center p-0 text-white">
                                View cart
                            </div>
                            <div className="collapse-content">
                                <div className={scrollBarON + isCartEmpty}>
                                    <ul className="menu menu-sm bg-base-100 rounded-box mt-2 w-full">
                                        {cartList.length > 0
                                            ? cartList.map((product) => (
                                                  <ProductCartList
                                                      key={product.id}
                                                      product={product}
                                                      removeFromCartList={removeFromCartList}
                                                      decrementProductQuantity={decrementProductQuantity}
                                                  />
                                              ))
                                            : "Your cart is empty"}
                                    </ul>
                                </div>
                                <div className="border-t mt-2 pt-2 font-bold">
                                    <Link to="/cart">
                                        <button className="btn btn-ghost p-0 hover:scale-105 active:scale-100 text-white">
                                            Check the Cart →
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
