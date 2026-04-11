import type { IProduct } from "@/interfaces/products";
import { ProductCartList } from "../Product/ProductCartList";
import { FaCartShopping } from "react-icons/fa6";

interface INavigationCartProps {
    countItem: number;
    cardList: IProduct[];
}

export const NavigationCart = ({
    countItem,
    cardList,
}: INavigationCartProps) => {
    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle bg-transparent border-transparent"
            >
                <div className="indicator">
                    <FaCartShopping size={30} className="text-white/95"/>
                    <span className="badge badge-sm indicator-item text-sm">
                        {countItem >= 99 ? "99+" : countItem}
                    </span>
                </div>
            </div>
            <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-70 shadow"
            >
                <div className="card-body">
                    <span className="text-lg font-bold">
                        {countItem > 99 ? "99+" : countItem} Item
                        {countItem > 1 ? "s" : ""}
                    </span>
                    <span className="text-info">Subtotal: 0 €</span>
                    <div className="card-actions flex flex-col w-full">
                        <div className="collapse collapse-arrow bg-base-200 rounded-md">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title btn btn-primary btn-block min-h-0 h-11 flex items-center justify-center p-0">
                                View cart
                            </div>
                            <div className="collapse-content">
                                <div className="overflow-y-scroll scrollbar-thin min-h-90 max-h-100">
                                    <ul className="menu menu-sm bg-base-100 rounded-box mt-2 w-full">
                                        {
                                            cardList.length > 0 ? (
                                                cardList.map((product) => (
                                                    <ProductCartList
                                                        key={product.id}
                                                        product={product}
                                                    />
                                                ))
                                            ) : ("")
                                        }
                                    </ul>
                                </div>
                                <div className="border-t mt-2 pt-2 font-bold">
                                    <button className="btn btn-ghost p-0">
                                        Check the Cart →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
