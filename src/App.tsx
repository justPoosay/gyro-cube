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
          <Link to="/movingcube">Number Cube</Link>
          <Link to="/movingcustomcube">Kitty Cube</Link>
          <Link to="/3d-sticker">Change Hue</Link>
      </nav>

      <Routes>
        <Route path="/movingcube" element={<GyroCube />} />
        <Route path="/movingcustomcube" element={<GyroImage />} />
        <Route path="/gyrostretch" element={<GyroStretch />} />
        <Route path="/3d-sticker" element={<GyroHue />} />
      </Routes>
    </div>
  );
}

export default App
