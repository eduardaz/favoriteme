import React, { useState } from "react";
import Styles from "./Conteudo.module.css";

const Conteudo = () => {
  const [nomeSite, setNomeSite] = useState("");
  const [url, setUrl] = useState("");
  const [favoritos, setFavoritos] = useState([]);

  function salvarFavoritos() {
    setFavoritos([...favoritos, { nomeSite, url }]);
    localStorage.setItem("favorito", JSON.stringify(favoritos));
    console.log(favoritos);
  }

  return (
    <div className={Styles.area}>
      <ul>
        {favoritos[0] != undefined &&
          favoritos.map((favorito) => (
            <li>
              {favorito.nome} : {favorito.url}
            </li>
          ))}
      </ul>
      Conteudo
      <form className={Styles.formulario}>
        <label>Nome do Site </label>
        <h1>{nomeSite}</h1>
        <input
          name="nome-site"
          onChange={(evento) => {
            setNomeSite(evento.target.value);
            console.log(nomeSite);
          }}
        ></input>
        <br />

        <label> URL </label>
        <h1>{url}</h1>
        <input
          name="url"
          onChange={(evento) => {
            setUrl(evento.target.value);
            console.log(url);
          }}
        ></input>
        <br />
        <input type="button" value="Salvar" onClick={() => salvarFavoritos()} />
        {/*<button onClick={()=>salvarFavoritos()}>Salvar</button>*/}
      </form>
    </div>
  );
};

export default Conteudo;
