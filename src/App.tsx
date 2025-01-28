import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import GyroCube from './pages/GyroCube'
import GyroImage from './pages/GyroImage';
import GyroStretch from './pages/GyroStretch';

function App() {
  return (
    <div>
      <nav>
        <ul>
          {/* <li><Link to="/">Homepage</Link></li> */}
          <li><Link to="/gyrocube">Kostka zyroskopowa</Link></li>
          <li><Link to="/sansdance">Kitty Cube</Link></li>
          <li><Link to="/gyrostretch">Stretch Image</Link></li>
        </ul>
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/gyrocube" element={<GyroCube />} />
        <Route path="/sansdance" element={<GyroImage />} />
        <Route path="/gyrostretch" element={<GyroStretch />} />
      </Routes>
    </div>
  );
}

export default App
