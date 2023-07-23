import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home.js";
import Background from './components/Background';
import Projects from './pages/Projects';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Background>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*'  element={<NotFound />} />
        </Routes>
      </Background>
    </BrowserRouter>
  );
}

export default App;
