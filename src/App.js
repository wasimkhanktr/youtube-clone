
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Categories from './components/categories';
import Navbar from './components/navbar';
import Video from './components/video';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addvideo from './components/addvideo';
import SignIn from './components/signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route element={<Video/>} path='/'/>
          <Route element={<Categories/>} path='/search' />
          <Route element={<Addvideo/>} path="/addvideo" />
          <Route element={<SignIn/>} path="/signin" />
        </Routes>
      </BrowserRouter>
      

      
    </div>
  );
}

export default App;
