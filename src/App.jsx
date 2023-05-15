import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import NotFound from './pages/NotFound';
import PageLayout from './layouts/PageLayout';
import Accordion from './components/Header/Accordion';


const App = () => {

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element ={<PageLayout/>}>
     <Route index element={<Home/>}/>
     <Route path='/sobre' element ={<Sobre />}/>
      <Route path='/contato' element ={<Contato />}/>

     </Route>
    
     <Route path='*' element={<NotFound/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
