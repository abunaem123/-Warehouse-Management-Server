import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Home/Products/Products';
import About from './components/About/About'
import Login from './components/Login/Login/Login';
import NotFound from './components/Service/NotFound/NotFound';
import Register from './components/Shared/Register/Register';
import Blogs from './components/Blogs/Blogs';
import ProductDetail from './components/ProductDetail/ProductDetail';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import ManageInventories from './components/ManageInventories/ManageInventories';
import AddMyItem from './components/AddMyItem/AddMyItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/addmyitem' element={<AddMyItem></AddMyItem>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/manageinventory'element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
