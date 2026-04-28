
import { Routes, Route } from "react-router-dom";
import { NavigationBar } from "@components"
import { Home, Favorites, Profile, SignIn, SignUp, Settings, Cart } from "@screens";
//import products from '@data/products';

export default function App() {
  
  return (
    <>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/auth/signin" element={<SignIn/>}/>
        <Route path="/auth/signup" element={<SignUp/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </>
  )
}
