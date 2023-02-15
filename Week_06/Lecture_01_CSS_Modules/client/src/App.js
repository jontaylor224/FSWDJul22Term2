import './App.css';
import { Route, Routes } from 'react-router-dom';
import { GalleryPage, LandingPage, ShopPage } from './pages';
import { Header } from './components';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="gallery" element={<GalleryPage />} />
      </Routes>
    </>
  );
}

export default App;
