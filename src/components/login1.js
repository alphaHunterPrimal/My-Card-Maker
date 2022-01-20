import React, {useEffect } from "react"
import {useInitial} from "../contexts/initialContext" 
import {useRouter} from 'next/router';
import Input from "../styles/CardMaker/Input"
import Baselog1 from "../styles/Login/Baselog1";
import Logar1 from "../styles/Login/Logar1"
import Cadastro from "../styles/Login/Cadastro";
import Campolog from "../styles/Login/Campolog";
import Inputlog from "../styles/Login/Inputlog";
import Logos from "../styles/Login/Logos";

import { useSession, signIn, signOut } from "next-auth/react"

export function LOGIN1(){
    const { data: session } = useSession()
    var {
        setInicial
      } = useInitial()
    const [email, setEmail] = React.useState("")
    const [user, setUser] = React.useState("")
    const [senha, setSenha] = React.useState("")
    const [cadastrar, setCadastrar] = React.useState(false)
    const Google = "http://s2.glbimg.com/z_gIOSUdsxyNGClgVLYVBHBziyw=/0x0:400x400/400x400/s.glbimg.com/po/tt2/f/original/2016/05/20/new-google-favicon-logo.png"
    const Face = "https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-5-1.png"
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
        <Baselog1>
        <header>
        <strong>Meu Criador de Cartas</strong>
        <p>- Acesse sua conta e as criações de pessoas por todo o mundo! -</p>       
        </header>
<Campolog>
{/*
<Inputlog required placeholder="e-mail"onChange={(dados) => {setEmail(dados.target.value)}} value={email}></Inputlog>
<Inputlog required placeholder="senha" onChange={(dados) => {setSenha(dados.target.value)}} value={senha}></Inputlog>
*/}    


</Campolog>
<footer>
<div className={"Section"}>
<img src={`${Google}`}></img>    
<Logar1 onClick={async() => {signIn("auth0")}}>Login com Google</Logar1>
</div>
<div className={"Section"}>
<img src={`${Face}`}></img>    
<Logar1 onClick={async() => {signIn("facebook")}}>Login com Facebook</Logar1>
</div>

{/*<Cadastro onClick={() =>{setCadastrar(true)}}>Já tem cadastro?</Cadastro>*/}
</footer>
        </Baselog1>
    </Logos>       
</>
    )
}
