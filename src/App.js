import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateProduct from './pages/product/CreateProduct'
import ListProducts from './pages/product/ListProducts'
import EditProduct from './pages/product/EditProduct'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index  element={<Home />} />
          <Route path='/products' element={<ListProducts />} />
          <Route path='/products/create' element={<CreateProduct />} />
          <Route path='/products/edit/:id' element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
