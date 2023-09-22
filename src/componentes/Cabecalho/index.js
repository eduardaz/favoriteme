import React from 'react'
import Style from './Cabecalho.module.css'


export default function Cabecalho(props) {
  return (
  
    <div className={Style.cabecalho}>
    <img className={Style.imagem} src={props.logo}/>
    <p className={Style.titulo} >{props.titulo}</p>
    <p className={`${Style.subtitulo} ${Style.subtitulo}`}>{props.subtitulo}</p>

     
        <ul>
          <ol>Duda linda</ol>
          <ol>Duda olnda</ol>
          <ol>Duda olnda</ol>
        </ul>
        
      

    </div>
    
    
  )
}


