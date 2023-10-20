import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Principal } from './src/Pagina/Principal'
import Login from './src/Pagina/Login'
import CadastroUsuario from './src/Pagina/CadastroUsuario'

const routes = () => {
  return (
    <BrowserRouter>
    <Routes> 
        <Route path='/' element={<Principal/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/cadastro' element={<CadastroUsuario/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default routes