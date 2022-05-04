import React from 'react';
import Navbar from './Menu/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from './pages/Inicio'
import Todos from './pages/Todos'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
::selection {
  background-color: red;
  color: white;
}
::-webkit-scrollbar {
  display: none;
}
body{
  background-color: black;
  color: #fff;
}
`;


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
