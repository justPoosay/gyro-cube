import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import GyroCube from './pages/GyroCube'
import GyroImage from './pages/GyroHueImage';

function App() {
  return (
    <div>
      <nav>
        <ul>
          {/* <li><Link to="/">Homepage</Link></li> */}
          <li><Link to="/gyrocube">Kostka zyroskopowa</Link></li>
          <li><Link to="/sansdance">Sans Dance</Link></li>
        </ul>
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/gyrocube" element={<GyroCube />} />
        <Route path="/gyrocube" element={<GyroImage />} />
      </Routes>
    </div>
  );
}

export default App
