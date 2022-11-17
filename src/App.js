import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/ListingsHome";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Offers from "./pages/Offers";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import EditListing from "./pages/EditListing";
import Listing from "./pages/Listing";
import Category from "./pages/Category";
function App() {
  return (
    <>
    <Router>
      <Header/> 
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/listingsHome" element={<Home/>}/>
        <Route path="/profile" element={<PrivateRoute/>}>
        <Route path="/profile" element={<Profile/>}/>
        </Route>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/category/:categoryName/:listingId" element={<Listing/>}/>
        
        <Route path="/offers" element={<Offers/>}/> 
        <Route path="/category/:categoryName" element={<Category/>}/> 
        <Route path="create-listing" element={<PrivateRoute/>}>
        <Route path="/create-listing" element={<CreateListing/>}/>
        </Route>
        <Route path="edit-listing" element={<PrivateRoute/>}>
        <Route path="/edit-listing/:listingId" element={<EditListing/>}/>
        </Route>
      </Routes>
    </Router>
    
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </>
  );
}

export default App;
