import './App.css';
import {Route, Routes} from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage.tsx';
import HomePage from './pages/Home/HomePage.tsx';
import RegistrPage from './pages/Registration/RegistrPage.tsx';
import CartPage from './pages/CartPage/CartPage.tsx';
import ProductDetails from './components/Products/ProductDetails/ProductDetails';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegistrPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/products/:productId'element={<ProductDetails/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
