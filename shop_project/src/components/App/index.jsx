import {Routes, Route} from 'react-router-dom';
import Home from '../../pages/Home'
import Categories from '../../pages/Categories'
import NotFound from '../../pages/NotFound'
import Products from '../../pages/Products'
import Layout from '../Layout';
import ProductDescription from '../../pages/ProductDescription';
import Card from "../../pages/Cart";
import Category from "../../pages/Category";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='card' element={<Card />}/>
          

          <Route path='products' element={<Products />}/>
          <Route path='categories' element={<Categories />}/>
          <Route path='category/:categoryId' element={<Category />}/>
          <Route path='product/:productId' element={<ProductDescription />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;