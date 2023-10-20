import React, { useState } from "react";

const Login = () => {
    const [Email, setEmail] = useState("");
    const [Senha, setSenha] = useState("");
    
    function validacao (){
    let usuario = JSON.parse(localStorage.getItem('usuario'))
    console.log(usuario)

    let emailCadastrado = usuario.Email
    let senhaCadastrada = usuario.Senha
    
    if (usuario!==Senha){
    if (emailCadastrado === Email && senhaCadastrada === Senha) {
      alert ('Login realizado com sucesso')
      
    }

    else {
      alert ('Email ou Senha incorretos')
    }
  }
  
  
}
  
    return (
    <div> Login
    <form>
    <label>Email</label>
    <input type="text" value={Email} onChange={(e) => {setEmail(e.target.value);}} />
    <br/>
    
    <label>Senha</label>
    <input type="password"  value={Senha} onChange={(e) => {setSenha(e.target.value);}} />
    <input type="button" onClick={()=>validacao()} value='login'/>
    </form>
    </div>
    
  )
    }

export default Login;