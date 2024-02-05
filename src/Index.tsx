import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const rootNode = document.getElementById('root');
if (rootNode) {
  createRoot(rootNode)
    .render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <App /> } />
          <Route path="App2" element={ <App /> } />
        </Routes>
      </BrowserRouter>
    );
}