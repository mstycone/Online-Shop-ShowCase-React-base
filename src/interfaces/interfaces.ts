
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
  product: IProduct;
  favoriteList: IProduct[];
  addToCartList: (product: IProduct) => void;
  addToFavoriteList: (product: IProduct) => void
}

export interface IProductListProps {
  addToCartList: (product: IProduct) => void;
  toggleFavorite: (product: IProduct) => void;
  emptyListMessage: string;
  isFavoritesPage: boolean;
  productList: IProduct[];
  productDB?: IProduct[]
}

export interface IProductCartListProps {
  product: IProduct;
  removeFromCartList: (product: IProduct) => void;
  decrementProductQuantity: (product: IProduct) => void
}

export interface IProductImageProps {
  product: IProduct;
  className: string
}

export interface INavigationProps {
  cartList: IProduct[];
  removeFromCartList: (product: IProduct) => void;
  decrementProductQuantity: (product: IProduct) => void;
  countFavorite: number
}

export interface INavigationCartProps {
  cartList: IProduct[];
  removeFromCartList: (product: IProduct) => void;
  decrementProductQuantity: (product: IProduct) => void
}

export interface INavigationProfileProps {
  countFavorite: number
}