import{ BrowserRouter,Routes,Route,Link} from "react-router-dom";
import { FaHome, FaMale, FaFemale, FaChild, FaStar, FaShoePrints, FaMobileAlt, FaShoppingCart, FaEnvelope, FaInfoCircle } from "react-icons/fa";
import Home from "./Home";
import Men from "./Men";
import Women from "./Women";
import Kids from "./Kids";
import Beauty from "./Beauty";
import FootWear from "./FootWear";
import Electronics from "./Electronics";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";


import "./App.css";
import { useSelector } from "react-redux";



function App ()
{

  const cartItems = useSelector
  ((state) => state.cart);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity,0);

  return(
    <>
    <BrowserRouter>
    <nav>
    <Link to="/home"><FaHome /> HOME</Link>
  <Link to="/men"><FaMale /> MEN</Link>
  <Link to="/women"><FaFemale /> WOMEN</Link>
  <Link to="/kids"><FaChild /> KIDS</Link>
  <Link to="/beauty"><FaStar /> BEAUTY</Link>
  <Link to="/footwear"><FaShoePrints /> FOOTWEAR</Link>
  <Link to="/electronics"><FaMobileAlt /> ELECTRONICS</Link>
  <Link to="/cart"><FaShoppingCart /> CART[{totalItems}]</Link>
  <Link to="/contactus"><FaEnvelope /> CONTACT US</Link>
  <Link to="/aboutus"><FaInfoCircle /> ABOUT US</Link>
    </nav>
    
    <Routes>
      <Route  path="/home" element={<Home/>}/>
      <Route  path="/men" element={<Men/>}/>
      <Route  path="/women" element={<Women/>}/>
      <Route  path="/kids" element={<Kids/>}/>
      <Route  path="/beauty" element={<Beauty/>}/>
      <Route  path="/footwear" element={<FootWear/>}/>
      <Route  path="/electronics" element={<Electronics/>}/>
      <Route  path="/cart" element={<Cart/>}/>
      <Route  path="/contactus" element={<ContactUs/>}/>
      <Route  path="/aboutus" element={<AboutUs/>}/>

    </Routes>

    
    </BrowserRouter>
    


    </>

  )
}
export default App;
