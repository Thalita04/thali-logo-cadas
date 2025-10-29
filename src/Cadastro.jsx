import React from "react";
import "./App.css";
import { Link } from "react-router";
import Facebook from './assets/facebook.png'
import Google from './assets/google.png'
import Apple from './assets/apple.png'

function Cadastro() {
  return (
    <>
      <div className="cadastro">
        <h1>CADASTRO</h1>

        <label for="nome">NOME</label>
        <input type="text" id="nome" placeholder="Digite seu nome completo" />

        <label for="email">E-MAIL</label>
        <input type="text" id="email" placeholder="Digite seu e-mail" />

        <label for="cpf">CPF</label>
        <input type="text" id="cpf" placeholder="Digite seu CPF" />

        <label for="usuario">USUÁRIO</label>
        <input type="text" id="usuario" placeholder="Crie seu usuário" />
       
        <label for="senha">SENHA</label>
        <input type="password" id="senha" placeholder="Crie uma senha" />

        <button type="submit">CADASTRAR</button>

        <p>LOGAR COM</p>
        <div className="social">
                   
          <img src={Facebook} alt="" className="facebook" />
                  
          <img src={Google} alt="" className="google" />
                
           <img src={Apple} alt="" className="apple" />
        </div>

        <p class="login"> JÁ TEM CONTA? <Link to="/">Fazer login</Link> </p>
      </div>
    </>
  );
}
export default Cadastro;