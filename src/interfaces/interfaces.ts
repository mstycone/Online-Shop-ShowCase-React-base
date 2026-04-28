export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity?: number
}

export interface IProductProps {
  product: IProduct
}

export interface CartContextType {
    cartList: IProduct[]
    addToCartList: (product: IProduct) => void
    isCartPage: boolean
    isCartPageActive: (b: boolean) => void
    removeFromCartList?: (product: IProduct) => void
    decrementQuantity?: (product: IProduct) => void
}

export interface FavoriteContextType {
    favoriteList: IProduct[];
    toggleFavorite: (product: IProduct) => void;
};

export interface IProductListProps extends IProductProps {
  emptyListMessage: string;
  isFavoritesPage: boolean;
  productList: IProduct[];
  productDB?: IProduct[]
}
export interface IProductImageProps extends Pick<IProductProps, 'product'>{
  className: string
}
export interface INavigationProfileCountProps {
  countFavorite: number
}

export interface IPageTitleProps {
  pageTitle: string,
  cartList?: IProduct[]
}

export interface IStandardPageProps extends IPageTitleProps {
  emptyListMessage: string;
  isFavoritesPage: boolean;
  productList: IProduct[];
  productDB?: IProduct[]
}