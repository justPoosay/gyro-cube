import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import GyroCube from './pages/GyroCube'
import GyroImage from './pages/GyroImage';
import GyroHue from './pages/GyroHue';

function App() {
  return (
    <div>
      <nav>
          <Link to="/gyrocube">Number Cube</Link>
          <Link to="/sansdance">Kitty Cube</Link>
          <Link to="/gyrohue">Change Hue</Link>
      </nav>

      <Routes>
        <Route path="/gyrocube" element={<GyroCube />} />
        <Route path="/sansdance" element={<GyroImage />} />
        <Route path="/gyrohue" element={<GyroHue />} />
      </Routes>
    </div>
  );
}

export default App
