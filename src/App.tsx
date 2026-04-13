
import { BrowserRouter, Routes, Route } from "react-router";
import { NavigationBar } from "@components"
import { Home, Favorites, SignIn, SignUp, Settings, Cart } from "@screens";
import { useProductHandlers } from "./hooks/useProductHandlers";

export default function App() {
  const {
    cartList,
    removeFromcartList,
    decrementQuantity,
    favoriteList,
  } = useProductHandlers()
  
  return (
    <BrowserRouter>
      <NavigationBar
        countFavorite={favoriteList.length}
        cartList={cartList}
        removeFromCartList={removeFromcartList}
        decrementProductQuantity={decrementQuantity}
      />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/auth/signin" element={<SignIn/>}/>
        <Route path="/auth/signup" element={<SignUp/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </BrowserRouter>
  )
}
