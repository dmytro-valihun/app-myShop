import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar.jsx';
import Shop from './Pages/Shop/Shop.jsx';
import ShopCategory from './Pages/ShopCategory/ShopCategory.jsx';
import Product from './Pages/Product/Product.jsx';
import Login from './Pages/Login/Login.jsx';
import Bin from './Pages/Bin/Bin.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import Footer from './Components/Footer/Footer.jsx';
import bannerMen from './Components/Assets/banner_mens.png';
import bannerWomen from './Components/Assets/banner_women.png';
import bannerKids from './Components/Assets/banner_kids.png';


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory banner={bannerMen} category='men'/>} />
        <Route path='/women' element={<ShopCategory banner={bannerWomen} category='women'/>} />
        <Route path='/kids' element={<ShopCategory banner={bannerKids} category='kid' />} />
        <Route path='/product' element={<Product />} >
          <Route path=':productId' element={<Product />} />
        </Route >
        <Route path='/bin' element={<Bin />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
