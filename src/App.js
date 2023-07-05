import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home.js";
import { Background } from './components/Background';

function App() {
  return (
    <BrowserRouter>
      <Background>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Background>
    </BrowserRouter>
  );
}

export default App;
