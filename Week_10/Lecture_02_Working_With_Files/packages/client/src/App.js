import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Dashboard from './pages/Dashboard';
import FileUploader from './components/FileUploader';
import FileBox from './components/FileBox';

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="box/:userId" element={<Dashboard />}>
          <Route path="" element={<FileBox />} />
          <Route path="upload" element={<FileUploader />} />
        </Route>
        <Route path="auth" element={<AuthPage />}>
          <Route path="signup" element={<RegisterForm />} />
          <Route path="signin" element={<LoginForm />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
