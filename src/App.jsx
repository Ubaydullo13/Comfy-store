import { Routes, Route } from "react-router-dom"
import Products from "./pages/Products"
import About from "./pages/About"
import Cart from "./pages/Cart"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="h-full"> 
    <Navbar/>
    <div className="max-w-full px-48">
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/:id" element={<About/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
    </div>
     
   
  )
}

export default App
