
import './App.css';
import {  Routes, Route, } from 'react-router-dom';
import AddShop from './shop/AddShop';
import AddProduct from './Product/AddProduct';
import EditProduct from './Product/EditProduct';
import ShowProduct from './Product/ShowProduct';
import HomePage from './shop/HomePage';
import MyShop from './shop/MyShop';
import EditShop from './shop/EditShop';
function App() {
  return (
  <>
   <Routes>
          <Route  path="/" element={<HomePage />}>
            {/* <Route path=":id" element={<UserProfile />} /> */}
          </Route>
          <Route path='/add-shop' element={<AddShop/>}></Route>
          <Route path='/edit-shop' element={<EditShop/>}></Route>
          <Route path='/my-shop' element={<MyShop/>}></Route>
          <Route path='/add-product' element={<AddProduct/>}></Route>
          <Route path='/edit-product/:id' element={<EditProduct/>}></Route>
          <Route path='/show-product' element={<ShowProduct/>}></Route>
        </Routes>
  </>
  );
}

export default App;
