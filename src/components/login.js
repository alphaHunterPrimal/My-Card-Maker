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

export function LOGIN(){
    var {
        setInicial
      } = useInitial()
    const [email, setEmail] = React.useState("")
    const [user, setUser] = React.useState("")
    const [senha, setSenha] = React.useState("")
    const [cadastrar, setCadastrar] = React.useState(false)
    /*function criarCadastro(){
        if(!email == "" && !user == "" && !senha == ""){
            console.log("Cadastro criado com sucesso!")
        } 
 
    }
     function Logar(){
        if(!user == "" && !senha == ""){
         setInicial(true)
         return
        } else {
            console.log("Deu não!")
        }
    }*/
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
<Inputlog required placeholder="e-mail"onChange={(dados) => {setEmail(dados.target.value)}} value={email}></Inputlog>
<Inputlog required placeholder="senha" onChange={(dados) => {setSenha(dados.target.value)}} value={senha}></Inputlog>

</Campolog>
<footer>
<Logar onClick={async() => {if(!email == "" && !senha == ""){setInicial(true)}else{alert("Deu não!")}}}><img src="/arrow-back.svg"></img></Logar>
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
<Inputlog required placeholder="nome" onChange={(dados) => {setUser(dados.target.value)}} value={user}></Inputlog>
<Inputlog required placeholder="e-mail" onChange={(dados) => {setEmail(dados.target.value)}} value={email}></Inputlog>
<Inputlog required placeholder="senha" onChange={(dados) => {setSenha(dados.target.value)}} value={senha}></Inputlog>

</Campolog>
<footer>
<Logar onClick={() => {
            if(!email == "" && !user == "" && !senha == ""){
                alert("Cadastro criado com sucesso!")
            } else {alert("Cadastro mal sucedido!")}
}}><img src="/arrow-back.svg"></img></Logar>
<Cadastro onClick={() =>{setCadastrar(false)}}>Voltar ao login.</Cadastro>
</footer>
        </Baselog>} 
    </Logos>       
</>
    )
}