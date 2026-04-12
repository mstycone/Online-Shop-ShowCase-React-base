import { NavigationBar, ProductCard } from '@components';
import products from '@data/products';
import type { IProduct } from '@interfaces/products';
import { useState } from 'react';


const App = () => {

  //State pour la liste des produits dans le panier
  const [cardList, setCardList] = useState<IProduct[]>([]);

  const isOnTheList = (list: IProduct[], product:IProduct): boolean => { 
    return (list.find((item) => item.id === product.id)) ? true : false  
  };

  const addToCardList = (product: IProduct) => {

    if (!isOnTheList(cardList, product)) {
      const newProduct = {...product, quantity: 1}
      setCardList([...cardList, newProduct]);
    } else {
      setCardList(cardList.map((item) => {
        item = (item.id === product.id)
         ? {...item, quantity: (item.quantity || 0) + 1 }
         : item
         ;
         return item;
      }));
    }
    return cardList;
  }

  const removeFromCardList = (product: IProduct) => {

  }

  //State pour ajouter et/ou retirer de la liste de favoris
  const [favoriteList, setFavoriteList] = useState<IProduct[]>([]);

  const addToFavoriteList = (product: IProduct) => {
    if (!isOnTheList(favoriteList, product)) {
      setFavoriteList([...favoriteList, product]);
    } else {
      setFavoriteList(favoriteList.filter((item) => item.id !== product.id));
    }
    return favoriteList;
  }

  console.log("Favorite List: ", favoriteList);
  console.log("Card List: ", cardList);

  return (
    <>
      <NavigationBar
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
