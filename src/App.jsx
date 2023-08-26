import { CartProvider } from './components/CartContext/CartContext';
import Footer from './components/Footer/Footer';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';
import SearchResult from './components/SearchResult/SearchResult';
import Cart from './pages/cart/Cart';

import Category from './pages/category/Category';
import Home from './pages/home/Home'
import Product from './pages/product/Product'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
      <CartProvider>
          <BrowserRouter>
            
              <Navbar />

              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/products' element={<Product />}></Route>
                <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
                <Route path='/products/:category' element={<Category />}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/search/:titulo' element={<SearchResult />}></Route>
              </Routes>
            
              <Footer />

          </BrowserRouter>
        </CartProvider>
      </header>
    </>
  )
}

export default App
