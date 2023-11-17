import './App.css';
import{Router,Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import { BrowserRouter,Navigate  } from 'react-router-dom';


function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/About' element={<About/>}></Route>
     <Route path='/Home' element={<Home/>}></Route>
     <Route path="/*" element={<Navigate to="/"/>}></Route>
     

     </Routes>
     </BrowserRouter>
    
  
    </>
  );
}

export default App;
