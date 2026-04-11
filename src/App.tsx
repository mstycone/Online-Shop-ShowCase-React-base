import { NavigationBar, ProductCard } from '@components';
import products from '@data/products';
import type { IProduct } from '@interfaces/products';
import { useState } from 'react';


function App() {

  //State pour la liste des produits dans le panier
  const [cardList, setCardList] = useState<IProduct[]>([]);

  const addToCardList = (product: IProduct) => {
    setCardList([...cardList, product]);
    return cardList;
  }

  //State pour ajouter et/ou retirer de la liste de favoris
  const [favoriteList, setFavoriteList] = useState<IProduct[]>([]);

  const addToFavoriteList = (product: IProduct) => {
    if (!favoriteList.includes(product)) {
      setFavoriteList([...favoriteList, product]);
    } else {
      setFavoriteList(favoriteList.filter((item) => item.id !== product.id));
    }
    return favoriteList;
  }

  return (
    <>
      <NavigationBar 
        countItem={cardList.length} 
        countFavorite={favoriteList.length}
        cardList={cardList}
      />
      <div className="flex flex-wrap justify-center gap-10 mb-40">
        {products.map((product: IProduct) => (
          <ProductCard 
            key={product.id} 
            product={product}
            favoriteList={favoriteList}
            addToCartList={() => addToCardList(product)}
            addToFavoriteList={() => addToFavoriteList(product)}
          />
        ))}
      </div>
    </>
  )
}

export default App
