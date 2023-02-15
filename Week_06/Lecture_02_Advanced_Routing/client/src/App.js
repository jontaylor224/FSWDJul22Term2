import './App.css';
import { Route, Routes } from 'react-router-dom';
import { GalleryPage, LandingPage, ProductPage, ShopPage } from './pages';
import { FilteredProductsList, Header } from './components';
import products from './products'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="shop" element={<ShopPage products={products} />}>
          <Route path=":category" element={<FilteredProductsList products={products} />} />
        </Route>
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="product/:id" element={<ProductPage products={products} />} />
      </Routes>
    </>
  );
}

export default App;
