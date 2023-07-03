import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home.js";

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
