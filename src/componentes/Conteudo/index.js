import React from "react";

const Conteudo = () => {
  return (
    <div>
      Conteudo
      <form onSubmit={()=>alert("Favorito salvo")}> 
      <label> Nome do Site </label>
          <input name="nome-site"></input>
      <label> URL </label>
        <input name='url'></input>
      </form>
    </div>
  );
};

export default Conteudo;
