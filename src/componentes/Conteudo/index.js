import React, { useState } from "react"
import Styles from "./Conteudo.module.css"

const Conteudo = () => {

  const [nomeSite, setNomeSite]=useState('')
  const [url, setUrl]=useState('')

  let favoritos=[]

  function salvarFavoritos(){
    favoritos=[...favoritos, {nomeSite, url}]
    localStorage.setItem('favorito', JSON.stringify (favoritos));
  }

  return (
    <div className={Styles.area}>  
      Conteudo
      <form className={Styles.formulario} onSubmit={()=>alert("Favorito salvo")}> 
      
      <label>Nome do Site </label>
      <h1>{nomeSite}</h1>
        <input name="nome-site" onChange={(evento)=>{setNomeSite(evento.target.value); console.log(nomeSite);}}>
        </input>
        <br/>

      <label> URL </label>
      <h1>{url}</h1>
        <input name='url' onChange={(evento)=>{setUrl(evento.target.value); console.log(url)}}></input>
        <br/>
        <button onClick={()=>salvarFavoritos()}>Salvar</button>
      </form>
    </div>
  );
};

export default Conteudo;
