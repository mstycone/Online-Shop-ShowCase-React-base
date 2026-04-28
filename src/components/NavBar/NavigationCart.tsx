import { NavigationCardBody } from "@components";
import { totalItem } from "@utilities/fonctions";
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "@hooks";

export const NavigationCart = () => {

    const { cartList } = useCart();
    const totalItemInCart = totalItem(cartList);

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
                <NavigationCardBody/>
            </div>
        </div>
    );
};
