import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Post from './Post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={
          <div className='blog'>
            <Header />
            <Post />
            <Post />
            <Post />
          </div>
        } />
      </Routes>
      
    </BrowserRouter>
);
}

export default App;
