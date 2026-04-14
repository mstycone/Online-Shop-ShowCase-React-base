
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
  addToFavoriteList: (product: IProduct) => void;
  removeFromCartList?: (product: IProduct) => void;
  decrementProductQuantity?: (product: IProduct) => void
}

export interface IProductListProps extends Pick<IProductProps, 'addToCartList' | 'removeFromCartList' | 'decrementProductQuantity'> {
  toggleFavorite: (product: IProduct) => void;
  emptyListMessage: string;
  isFavoritesPage: boolean;
  productList: IProduct[];
  productDB?: IProduct[]
}
export interface IProductCartListProps extends Pick<IProductProps, "product">{
  removeFromCartList: (product: IProduct) => void;
}
export interface IProductImageProps extends Pick<IProductProps, 'product'>{
  className: string
}

export interface INavigationCartProps extends Omit<IProductCartListProps, 'product'>{
  cartList: IProduct[];
}
export interface INavigationProfileProps {
  countFavorite: number
}

export interface INavigationProps extends INavigationCartProps, INavigationProfileProps {}

export interface IPageTitleProps {
  pageTitle: string,
  cartList?: IProduct[]
}

export interface IStandardPageProps extends IProductListProps, IPageTitleProps {}