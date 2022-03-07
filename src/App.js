import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Adoption from'./components/Adoption';
import Nav from './components/Nav';
import Details from './components/Details';
import Footer from "./components/Footer";
  
function App() {
  
  return ( 
    <div>
    <Router>
      <Nav />
      <Routes>
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/" exact element={<Home />} /> 
        <Route path="/home/:id" element={<Details />} />
      </Routes> 
    </Router>
   </div>
  ); 
}

export default App;
