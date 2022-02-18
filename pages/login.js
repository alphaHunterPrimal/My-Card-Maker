import React, {useEffect } from "react"
import {useInitial} from "../src/contexts/initialContext" 
import router, {useRouter} from 'next/router';
import Input from "../src/styles/CardMaker/Input"
import Baselog from "../src/styles/Login/Baselog";
import Logar from "../src/styles/Login/Logar"
import Cadastro from "../src/styles/Login/Cadastro";
import Campolog from "../src/styles/Login/Campolog";
import Inputlog from "../src/styles/Login/Inputlog";
import Logos from "../src/styles/Login/Logos";
import { useAuth } from "../src/contexts/AuthContext";
import nookies, { parseCookies, setCookie, destroyCookie} from "nookies";
import { v4 as uuid } from 'uuid'
import jwt from "jsonwebtoken"
import { route } from "next/dist/server/router";

//require('dotenv/config');

const crypto = require('crypto');
export default function LOGIN(props){
    const [NEWAUTH, setNEWAUTH] = React.useState();
    
    useEffect(() => {
      fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': props.autorizacao,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ "query": `query {
          allLogins {
            usuario
            email
            senha
        }
      }` })
    }).then(res => res.json())
    .then((res) => {
      //alert(res.data.allLogins)
      setNEWAUTH(res.data.allLogins)

    })
    .catch((error) => {
      console.log(error);
    });
    },[])
        var {
            inicial, superuser, setInicial, setSuperuser
          } = useAuth()

    const [Email, setEmail] = React.useState("")
    const [User, setUser] = React.useState("")
    const [Senha, setSenha] = React.useState("")
    const [cadastrar, setCadastrar] = React.useState(false)
    const [tipoSenha, setTipoSenha] = React.useState("password")
    console.log(props.username)
    return(
        <>
    <Logos>
     
    {props.username != undefined && 
            <Baselog>
            <header>
            <strong>Meu Criador de Cartas</strong>
            <p>É preciso sair do login primeiro para poder entrar novamente!</p>       
            </header>
        <Campolog>
        <footer>
        <button className="sair"  onClick={() => {destroyCookie(null, "myuser.token")
      setSuperuser("")
      router.push('/login')}}>Sair</button>
        </footer>

        
        </Campolog>
 
            </Baselog>
    
    //: null
    }
    {props.username === undefined ?
        cadastrar === false ?
          
          

          <Baselog>
          <header>
          <strong>Meu Criador de Cartas</strong>
          <p>Acesse sua conta e as criações de pessoas por todo o mundo!</p>       
          </header>
      <Campolog>
      <Inputlog required placeholder="usuario"onChange={(dados) => {setUser(dados.target.value)}} value={User}></Inputlog>
      
      <div className="senha">
      <Inputlog required placeholder="senha" type={tipoSenha} onChange={(dados) => {setSenha(dados.target.value)}} value={Senha}></Inputlog>
      <button onClick={() => {
        if(tipoSenha == "password"){
          setTipoSenha("text")
        }
        if(tipoSenha == "text"){
          setTipoSenha("password")
        }
        
        }}>
      <img src="/eye.png"></img>
      </button>
      </div>
      
      


      
      
      </Campolog>
      <footer>
      <Logar onClick={
      async() => {
          if(NEWAUTH.filter((x) => (x.usuario == User.trim())) != ""){
              if(NEWAUTH.find((x) => (x.usuario == User.trim() && x.senha == Senha.trim()))){
  
                const tokenjwt = jwt.sign({username: User.trim()}, "my-secret", {expiresIn: 3600})
                  setCookie(null, 'myuser.token', tokenjwt, {
                    maxAge: 60 * 60 * 1, // 1 hour
                  })
                  const { ['myuser.token']: token } = parseCookies()
  
                  const {username} = jwt.decode(token);
                  console.log(username)
                  setSuperuser(username)


//ALTERAÇÕES PARA TESTE NO USERHOME
//VOLTAR PARA "/" DEPOIS
                  router.push('/')






                }
              else{alert("Senha ou usuário incorretos!")}}
              else{alert("Usuário inexistente!")}
          }
          
          }><img src="/arrow-back.svg"></img></Logar>
      <Cadastro onClick={() =>{setCadastrar(true)}}>Já tem cadastro?</Cadastro>
      </footer>
          </Baselog>
           
      :
      
          //cadastrar === true &&
          <Baselog>
          <header>
          <strong>Meu Criador de Cartas</strong>
          <p>Faça o seu cadastro para poder começar a criar cartas!</p>
          </header>
      <Campolog>
      <Inputlog required placeholder="usuário" maxLength={15} onChange={(dados) => {setUser(dados.target.value)}} value={User}></Inputlog>
      <Inputlog required placeholder="e-mail" onChange={(dados) => {setEmail(dados.target.value)}} value={Email}></Inputlog>
      
      <div className="senha">
      <Inputlog required type={tipoSenha} placeholder="senha" maxLength={10} onChange={(dados) => {setSenha(dados.target.value)}} value={Senha}></Inputlog>
      <button onClick={() => {
        if(tipoSenha == "password"){
          setTipoSenha("text")
        }
        if(tipoSenha == "text"){
          setTipoSenha("password")
        }
        
        }}>
      <img src="/eye.png"></img>
      </button>
      </div>
      </Campolog>
      <footer>
      <Logar onClick={() => {
              if(!Email.replace(" ", "") == "" && !User.replace(" ", "") == "" && !Senha.replace(" ", "") == "" ){
                  if(NEWAUTH.filter((x) => (x.usuario == User)) != ""){
                      alert("Usuário já cadastrado!")
                  }
                  if(User.length < 4 & User.length > 15 ){
                      alert("Seu nome de usuário deve ter de 4 a 15 dígitos")
                  }
                  if(User.length >= 4 & User.length <= 15 ){
                      if(NEWAUTH.filter((x) => (x.usuario == User)) == ""){
                          if(Senha.length < 4 & Senha.length > 10){
                              alert("Sua senha deve ter de 4 a 10 dígitos")
                          }
                          if(Senha.length >= 4 && Senha.length <= 10){
                              
                              var LOGIN = {
                                  usuario: User,
                                  email: Email,
                                  senha: Senha
                                }
                                
                                  fetch('/api/login', {
                                      method: 'POST',
                                      headers: {
                                        'Content-Type': 'application/json',
                                      },
                                      body: JSON.stringify(LOGIN)
                                    })
                                    .then(async (response) => {
                                      const dados = await response.json();
                                      console.log(dados.registroCriado);
                                    }) 


                                    const tokenjwt = jwt.sign({username: User.trim()}, "my-secret", {expiresIn: 3600})
                                    setCookie(null, 'myuser.token', tokenjwt, {
                                      maxAge: 60 * 60 * 1, // 1 hour
                                    })
                                    const { ['myuser.token']: token } = parseCookies()
                    
                                    const {username} = jwt.decode(token);
                                    console.log(username)
                                    
                                    alert("Cadastro criado com sucesso!")
                                    /*
                                    const {token, user} = {
                                      token: uuid(),
                                      user: User
                                    }
                                    setCookie(undefined, 'myuser.token', token, {
                                      maxAge: 60 * 60 * 1, // 1 hour
                                    })*/
  
                                    setSuperuser(User)
                                    setTimeout(() => {router.push('/')}, 4000)
                                    
                                
                                             
                      }else {alert("Algo deu errado ")}
                  } 
                  }
              } else {alert("Preencha todos os campos")}
              
              } 
      }><img src="/arrow-back.svg"></img></Logar>
      <Cadastro onClick={() =>{setCadastrar(false)}}>Voltar ao login.</Cadastro>
      </footer>
          </Baselog> 
    
    
: null 
}

    </Logos>       
    </>
    )
    }

    export async function getServerSideProps(ctx){
      //const apiClient = getAPIClient(ctx);
      const { ['myuser.token']: token } = parseCookies(ctx)
      const autorizacao = process.env.AUTHORIZATION
      if(token != null ){
        const {username} = jwt.decode(token);
              
      return {
        props: {username, autorizacao}
      }
      }
      if(token == null){
        return {
          props: {autorizacao}
        }
      }
    }




