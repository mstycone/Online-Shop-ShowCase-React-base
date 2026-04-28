import { createContext, type ReactNode } from "react";
import { useFavoriteHandlers } from "@hooks";
import type { FavoriteContextType } from "@interfacesinterfaces";


interface FavoriteProviderProps {
    children: ReactNode;
}

const FavoriteContext = createContext<FavoriteContextType>({
    favoriteList: [],
    toggleFavorite: () => {},
});

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
    const favoriteHandlers = useFavoriteHandlers();

    return (
        <FavoriteContext.Provider value={favoriteHandlers}>
            {children}
        </FavoriteContext.Provider>
    );
};

export default FavoriteContext;