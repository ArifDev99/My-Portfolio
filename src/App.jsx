import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import { Themeprovider } from "./context/Theme.context.api"
import Skills from "./pages/Skills"
import { Details_provider } from "./context/details.context.api"
import data from "./Data/My_data.json"
import Projects from "./pages/Projects"


function App() {


  return (

    <Themeprovider>
      <Details_provider value={data}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}>Home</Route>
          <Route path="/about" element={<About/>}>About</Route>
          <Route path="/contact" element={<Contact/>}>Contact</Route>
          <Route path="/project" element={<Projects/>}>My Project</Route>
        </Routes>
        {/* <Home/> */}
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </BrowserRouter>
      </Details_provider>
    </Themeprovider>
  )
}

export default App
