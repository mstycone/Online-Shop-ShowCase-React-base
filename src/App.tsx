
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "@components"
import { Home, Favorites, Profile, SignIn, SignUp, Settings, Cart } from "@screens";
import { useProductHandlers } from "@hooks/useProductHandlers";
import products from '@data/products';

export default function App() {
  const {
    cartList,
    addToCartList,
    removeFromCartList,
    decrementQuantity,
    favoriteList,
    toggleFavorite
  } = useProductHandlers()
  
  return (
    <BrowserRouter>
      <NavigationBar
        countFavorite={favoriteList.length}
        cartList={cartList}
        removeFromCartList={removeFromCartList}
        decrementProductQuantity={decrementQuantity}
      />
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              addToCartList={addToCartList}
              toggleFavorite={toggleFavorite}
              emptyListMessage="There is no products"
              isFavoritesPage={false}
              productList={favoriteList}
              productDB={products}
              pageTitle="Home"
            />
          }
        />
        <Route 
          path="/cart" 
          element={
            <Cart
              addToCartList={addToCartList}
              toggleFavorite={toggleFavorite}
              emptyListMessage="Your Cart is Empty"
              isFavoritesPage={false}
              productList={favoriteList}
              productDB={cartList}
              pageTitle="Your Cart"
            />
          }
        />
        <Route 
          path="/favorites" 
          element={
            <Favorites
              addToCartList={addToCartList}
              toggleFavorite={toggleFavorite}
              emptyListMessage="You have no Favorites Yet"
              isFavoritesPage={true}
              productList={favoriteList}
              pageTitle="Your Favorites"
            />
          }
        />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/auth/signin" element={<SignIn/>}/>
        <Route path="/auth/signup" element={<SignUp/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </BrowserRouter>
  )
}
