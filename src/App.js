import './App.css';
import { Routes, Route } from 'react-router-dom'
import About from './Components/About';
import Products from './Components/Products';
import Services from './Components/Services';
import Navigation from './Components/Navigation';
import NotFound from './Components/NotFound';
import UsersList from './Components/UsersList';
import UserDetails from './Components/UserDetails';


function App() {
  return (
    <>
      <Navigation />
      <Routes>
          <Route path='/' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/users-list' element={<UsersList />} />
          <Route path='/user/:email' element={<UserDetails />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;


// import GetUser from './Components/GetUser';

// <Route path='/user/:email' element={<UserDetails />} />
// <Route path='/users/list' element={<UsersList />} />


//  <Route path='/users/:id/:firstname' element={<GetUser />} />


