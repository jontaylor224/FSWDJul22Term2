import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { Dashboard, LandingPage } from './pages';
import { CreateHero, HeroDetail, HeroList } from './components';
import { ToastContainer } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="heroes" element={<Dashboard />}>
          <Route path="" element={<HeroList />} />
          <Route path=":heroId" element={<HeroDetail />} />
          <Route path="create" element={<CreateHero />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
