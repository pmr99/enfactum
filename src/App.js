import './App.css';
import NavigationBar from './components/nav';
import Home from './pages/home';
import Blog from './pages/blog';
import About from './pages/about';
import Footer from './components/footer';
import ContactUs from './pages/contactUs';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
          <NavigationBar className = 'navigationBar'/>
           <Routes> 
                <Route path="/" element = {<Home/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element= {<ContactUs/>}/>
           </Routes>
           <Footer/>
    </Router>
   );
}

export default App;
