import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dash_Meli from './pages/Dash_Meli';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dash_Meli />} />
        {/* Outras rotas podem ser adicionadas aqui */}
      </Routes>
    </Router>
  );
}

export default App;