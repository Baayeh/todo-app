import React from 'react';
import { createRoot } from 'react-dom/client';
import './functionBased/App.css'
import TodoContainer from './functionBased/components/TodoContainer';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
)
