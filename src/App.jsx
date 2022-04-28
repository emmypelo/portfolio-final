
import Navbar from "./components/navbar/Navbar";
import '../src/app.css';
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return <>
<Navbar/>
<Home/>
<About/>
<Services/>
<Contact/>
</>
};

export default App;