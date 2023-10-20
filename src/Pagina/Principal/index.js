import React from 'react'
import Cabecalho from '../../componentes/Cabecalho'
import Rodape from '../../componentes/Rodape'
import Conteudo from '../../componentes/Conteudo'
import CadastroUsuario from '../../Pagina/CadastroUsuario';
import Login from '../../Pagina/Login'

export const Principal = () => {
    
  return (
    <div>
      
    <Cabecalho logo='logo512.png' titulo="favorite.me" subtitulo='Aqui você faz a escolha certa!'/>
    {/*<Conteudo/>*/}
    <CadastroUsuario/>
    <Login/>

    <Rodape database="favoriteme" logo1='logo1.png' logo2='logo2.png' logo3='logo3.png' />
    
    </div>
  )
}
