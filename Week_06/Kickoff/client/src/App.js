import style from './App.module.css';
import { Footer, Header } from './components';
import { Route, Routes } from 'react-router-dom';
import { AboutPage, HomePage, DashboardPage, ProductDetailsPage } from './pages';

function App() {
  return (
    <>
      <Header />
      <div className={style.container}>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<DashboardPage />}>
            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>
          {/* <Route path="products/:productId" element={<ProductDetailsPage />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
