import type { IProduct } from "@/interfaces/products";
import { NavigationCart, NavigationProfil } from "@components";

interface INavigationBarProps {
    countFavorite: number;
    cardList: IProduct[]
}

export const NavigationBar = ({ countFavorite, cardList }: INavigationBarProps) => {
    
    return (
        <>
            <div className="w-full max-w-7xl mx-auto mt-1 mb-8 px-2">
                <div className="navbar relative bg-base-100 shadow-sm rounded-md px-6 py-7">
                    <div className="flex-1">
                        <a className="btn btn-ghost absolute top-6.75 text-2xl text-white normal-case">
                            E-Shop
                        </a>
                    </div>
                    <div className="flex gap-4">
                        <NavigationCart cardList={cardList}/>
                        <NavigationProfil countFavorite={countFavorite}/>
                    </div>
                </div>
            </div>
        </>
    );
};
