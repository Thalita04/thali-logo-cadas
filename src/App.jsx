import React from "react";
import { Link } from "react-router-dom";
import "./Cadastro.css";
import Facebook from './assets/facebook.png'
import Google from './assets/google.png'
import Apple from './assets/apple.png'

function App() {
  return (
    <>
      <div className="login">
      <h1>LOGIN</h1>

        <label for="usuario">USUÁRIO</label>
        <input type="text" placeholder="Digite seu usuário" />

        <label for="senha">SENHA</label>
        <input type="password" placeholder="Digite sua senha" />

        <div className="opcoes">
          <label>
            <input type="checkbox" /> Manter-se conectado
          </label>
          <a href="#">esqueceu a senha?</a>
        </div>

        <button type="submit">ENTRAR</button>

        <p>LOGAR COM</p>
        <div className="social">
           
          <img src={Facebook} alt="" className="facebook" />         
          <img src={Google} alt="" className="google" />
          <img src={Apple} alt="" className="apple" />
  
        </div>
        <p class="cadastro"> NÃO TEM CONTA? <Link to="/cadastro">Inscrever-se</Link> </p>
      </div>
    </>
  );
}

export default App;