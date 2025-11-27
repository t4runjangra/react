import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/home.jsx';
import Detail from './pages/detailes.jsx';
import About from './pages/about.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="bg-gray-800 p-4 flex justify-center gap-4">
        <Link to="/" className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition">
          Home
        </Link>
        <Link to="/detailsPage" className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition">
          Details
        </Link>
        <Link to="/about-page" className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition">
          About
        </Link>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/detailsPage' element={<Detail />} />
        <Route path='/about-page' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
