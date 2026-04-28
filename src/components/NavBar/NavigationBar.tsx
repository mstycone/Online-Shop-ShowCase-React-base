import { Link } from "react-router-dom";
import { NavigationCart, NavigationProfil } from "@components";
import { useFavorite } from "@hooks";


export const NavigationBar = () => {

    const { favoriteList } = useFavorite();

    return (
        <>
            <div className="w-full max-w-7xl mx-auto mt-1 mb-8 px-2">
                <div className="navbar relative bg-base-100 shadow-sm rounded-md px-6 py-7">
                    <div className="flex-1">
                        <Link to="/">
                            <button className="btn btn-ghost absolute top-6.75 text-2xl text-white normal-case">
                                E-Shop
                            </button>
                        </Link>
                    </div>
                    <div className="flex gap-4">
                        <NavigationCart/>
                        <NavigationProfil countFavorite={favoriteList.length}/>
                    </div>
                </div>
            </div>
        </>
    );
};
