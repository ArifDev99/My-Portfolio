import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import { Themeprovider } from "./context/Theme.context.api"

function App() {

  return (
    <Themeprovider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}>Home</Route>
          <Route path="/about" element={<About/>}>About</Route>
          <Route path="/contact" element={<Contact/>}>Contact</Route>
        </Routes>
        {/* <Home/> */}
        <About/>
        <Contact/>
      </BrowserRouter>
    </Themeprovider>
  )
}

export default App
