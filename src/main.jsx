import React from 'react'
import ReactDOM from 'react-dom/client'

// import './index.css'
import Initial from './pages/initial';
import Cadastro from './pages/connections/cadastro';
import Login from './pages/connections/login';
import Principal from './pages/principal/principal';
import Item from './pages/principal/item';
import InfosPrincipais from './pages/initial/infos';
import Carrinho from './pages/principal/carrinho';

import {BrowserRouter, Routes, Route} from "react-router-dom";

/* <React.StrictMode>
  <App />
</React.StrictMode> */

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/main" element={<Principal />} />
      <Route path="/item" element={<Item />} />
      <Route path="/infos" element={<InfosPrincipais />} />
      <Route path="/carrinho" element={<Carrinho />} />
    </Routes>
  </BrowserRouter>
)
