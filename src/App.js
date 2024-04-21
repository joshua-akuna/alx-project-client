import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import  Post from './Post';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Layout />}>  
        <Route index element={ <HomePage /> }/>
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<h2>Register</h2>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
