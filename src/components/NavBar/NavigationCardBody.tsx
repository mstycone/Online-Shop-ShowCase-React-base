import type { INavigationCartProps } from "@interfaces/interfaces";
import { totalItem, totalPrice } from "@utilities/fonctions";
import { ProductCartList } from "@components";
import { Link } from "react-router-dom";


export const NavigationCardBody = ({
    cartList,
    removeFromCartList,
}: INavigationCartProps) => {

    const totalItemInCart = totalItem(cartList);
    const total = totalPrice(cartList);
    const scrollBarON = cartList.length > 3 ? "overflow-y-scroll scrollbar-thin" : "";
    const isCartEmpty = cartList.length !== 0 && "scroll-smooth min-h-100 max-h-110";

    return (
        <div className="card-body">
            <span className="text-lg font-bold text-white/90">
                {totalItemInCart > 99 ? "99+" : totalItemInCart} Item
                {totalItemInCart > 1 && "s"}
            </span>
            <span className="text-info font-bold">Subtotal: {total} €</span>
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
                                              removeFromCartList={
                                                  removeFromCartList
                                              }
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
    );
};
