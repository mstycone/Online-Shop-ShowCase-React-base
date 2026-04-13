
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "@components"
import { Home, Favorites, Profile, SignIn, SignUp, Settings, Cart } from "@screens";
import { useProductHandlers } from "@hooks/useProductHandlers";

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
              favoriteList={favoriteList}
              addToCartList={addToCartList}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/auth/signin" element={<SignIn/>}/>
        <Route path="/auth/signup" element={<SignUp/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </BrowserRouter>
  )
}
