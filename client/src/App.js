import React from 'react';
import Sidebar from './components/sidebar.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        {/* Aqui vai o restante do conteúdo do dashboard */}
        <h1>Bem-vindo ao Dashboard</h1>
      </div>
    </div>
  );
}

export default App;