import './css/App.css';
import './css/nav.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from './nav';
import Home from './home';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import Blog from './blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
