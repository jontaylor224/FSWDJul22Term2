import './App.css';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { AllHeroes, CreateHero } from './pages';
import { Header } from './components';

function App() {
  return (
    <>
      <Header />
      <Container>
        <ToastContainer />
        <Routes>
          <Route path="" element={<AllHeroes />} />
          <Route path="heroes/create" element={<CreateHero />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
