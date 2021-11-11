import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Autre from './pages/Autre';
import Jeu from './pages/Jeu';
import Maitre from './pages/Maitre';
import Regles from './pages/Regles';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="autre" element={<Autre />} />
        <Route path="jeu" element={<Jeu />} />
        <Route path="maitre" element={<Maitre />} />
        <Route path="regles" element={<Regles />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
