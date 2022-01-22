import React, {useEffect } from "react"
import {useInitial} from "../contexts/initialContext" 
import {useRouter} from 'next/router';
import Input from "../styles/CardMaker/Input"
import Baselog from "../styles/Login/Baselog";
import Logar from "../styles/Login/Logar"
import Cadastro from "../styles/Login/Cadastro";
import Campolog from "../styles/Login/Campolog";
import Inputlog from "../styles/Login/Inputlog";
import Logos from "../styles/Login/Logos";
import { useAuth } from "../contexts/AuthContext";

export function LOGIN(){
    const [NEWAUTH, setNEWAUTH] = React.useState();
    useEffect(() => {
        fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '4743c2042e55f3385c756ec8477396',
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
    
    return(
        <>
    <Logos>
    {cadastrar === false &&
        <Baselog>
        <header>
        <strong>Meu Criador de Cartas</strong>
        <p>Acesse sua conta e as criações de pessoas por todo o mundo!</p>       
        </header>
    <Campolog>
    <Inputlog required placeholder="usuario"onChange={(dados) => {setUser(dados.target.value)}} value={User}></Inputlog>
    <Inputlog required placeholder="senha" onChange={(dados) => {setSenha(dados.target.value)}} value={Senha}></Inputlog>
    
    </Campolog>
    <footer>
    <Logar onClick={
    async() => {
        if(NEWAUTH.filter((x) => (x.usuario == User)) != ""){
            if(NEWAUTH.find((x) => (x.usuario == User && x.senha == Senha))){
                setSuperuser(User)
                //setInicial(true)
              }
            else{alert("Senha ou usuário incorretos!")}}
            //else{alert("Usuário inexistente!")}
        }
        
        }><img src="/arrow-back.svg"></img></Logar>
    <Cadastro onClick={() =>{setCadastrar(true)}}>Já tem cadastro?</Cadastro>
    </footer>
        </Baselog>} 
    
    
        {cadastrar === true &&
        <Baselog>
        <header>
        <strong>Meu Criador de Cartas</strong>
        <p>Faça o seu cadastro para poder começar a criar cartas!</p>
        </header>
    <Campolog>
    <Inputlog required placeholder="usuário (não utilize caracteres especiais)" maxLength={15} onChange={(dados) => {setUser(dados.target.value)}} value={User}></Inputlog>
    <Inputlog required placeholder="e-mail" onChange={(dados) => {setEmail(dados.target.value)}} value={Email}></Inputlog>
    <Inputlog required placeholder="senha (não utilize caracteres especiais)" maxLength={10} onChange={(dados) => {setSenha(dados.target.value)}} value={Senha}></Inputlog>
    
    </Campolog>
    <footer>
    <Logar onClick={() => {
            if(!Email.replace(" ", "") == "" && !User.replace(" ", "") == "" && !Senha.replace(" ", "") == "" ){
                if(NEWAUTH.filter((x) => (x.usuario == User)) != ""){
                    alert("Usuário já cadastrado!")
                }
                if(User.length < 4 || User.length > 15 ){
                    alert("Seu nome de usuário deve ter de 4 a 15 dígitos")
                }
                if(User.length >= 4 || User.length <= 15 ){
                    if(NEWAUTH.filter((x) => (x.usuario == User)) == ""){
                        if(Senha.length < 4 || Senha.length > 10){
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
                                  alert("Cadastro criado com sucesso!")
                                  setSuperuser(User)
                                  setTimeout(() => {setInicial(true)}, 4000)
    
                              
                              
                                  
                              
                                        
                    }alert("Algo deu errado ")
                }
                }
            } else {alert("Preencha todos os campos")}
            
            } 
    }><img src="/arrow-back.svg"></img></Logar>
    <Cadastro onClick={() =>{setCadastrar(false)}}>Voltar ao login.</Cadastro>
    </footer>
        </Baselog>} 
    </Logos>       
    </>
    )
    }



