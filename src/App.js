import './App.css';
import { Routes, Route } from 'react-router-dom'
import About from './Components/About';
import Products from './Components/Products';
import Services from './Components/Services';
import Navigation from './Components/Navigation';
import NotFound from './Components/NotFound';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
          <Route exact path='/' element={<About />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/products' element={<Products />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
