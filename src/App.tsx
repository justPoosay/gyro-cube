import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import GyroCube from './pages/GyroCube'
import GyroImage from './pages/GyroImage';
import GyroStretch from './pages/GyroStretch';
import GyroHue from './pages/GyroHue';

function App() {
  return (
    <div>
      <nav>
        <ul>
          {/* <li><Link to="/">Homepage</Link></li> */}
          <li><Link to="/gyrocube">Number Cube</Link></li>
          <li><Link to="/sansdance">Kitty Cube</Link></li>
          <li><Link to="/gyrostretch">Stretch Image</Link></li>
          <li><Link to="/gyrohue">Change Hue</Link></li>
        </ul>
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/gyrocube" element={<GyroCube />} />
        <Route path="/sansdance" element={<GyroImage />} />
        <Route path="/gyrostretch" element={<GyroStretch />} />
        <Route path="/gyrohue" element={<GyroHue />} />
      </Routes>
    </div>
  );
}

export default App
