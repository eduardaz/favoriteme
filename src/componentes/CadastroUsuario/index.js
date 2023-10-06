import React, { useState } from "react";
import Styles from "./CadatroUsuario.module.css";

const CadastroUsuario = () => {
  const [Email, setEmail] = useState("");
  const [Nome, setNome] = useState("");
  const [Senha, setSenha] = useState("");
  const [ConfirmaçãoSenha, setConfirmaçãoSenha] = useState("");

  function salvarSenha(value) {
    setNome(value);
    setEmail(value);
    setSenha(value);
    setConfirmaçãoSenha(value);
  }

  function CadastroUsuario(Nome, Email, Senha) {
    let usuario = (Nome, Email, Senha);
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }

  function validar(Senha, ConfirmaçãoSenha) {
    if (Senha != ConfirmaçãoSenha) {
      alert("Senha errada!");
    } else {
      CadastroUsuario(Email, Nome, Senha);
    }
  }

  return (
    <div>
      {" "}
      CadastroUsuario
      <form>
        <label>Nome</label>
        <input
          type="text"
          value={Nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />

        <br />

        <label>Email</label>
        <input
          type="text"
          value={Email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <br />

        <label>Senha</label>
        <input
          type="password"
          value={Senha}
          onChange={(e) => {
            setSenha(e.target.value);
          }}
        />

        <br />

        <label>ConfirmaçãoSenha</label>
        <input
          type="password"
          value={ConfirmaçãoSenha}
          onChange={(e) => {
            setConfirmaçãoSenha(e.target.value);
          }}
        />
        <input
          type="button"
          onClick={() => validar(Senha, ConfirmaçãoSenha)}
          value="Cadastrar"
        />
        <br />
      </form>
    </div>
  );
};

export default CadastroUsuario;
