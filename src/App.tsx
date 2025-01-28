import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import GyroCube from './pages/GyroCube'

function App() {
  return (
    <div>
      <nav>
        <ul>
          {/* <li><Link to="/">Homepage</Link></li> */}
          <li><Link to="/gyrocube">Kostka zyroskopowa</Link></li>
        </ul>
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/gyrocube" element={<GyroCube />} />
      </Routes>
    </div>
  );
}

export default App
