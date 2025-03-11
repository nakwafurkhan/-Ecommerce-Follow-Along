import './App.css';
import LoginSignup from './pages/loginSignup';
import LandingPage from './pages/landingPage';
import ProductForm from './pages/ProductForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Collection from './pages/Collection';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/signup" element={<LoginSignup />} />
        <Route path="/productform" element={<ProductForm />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </Router>
  );
}

export default App;
