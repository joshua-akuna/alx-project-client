import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import  Post from './Post';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Layout />}>  
        <Route index element={ <Post /> }/>
        <Route path='/login' element={<h1>Login Page</h1>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
