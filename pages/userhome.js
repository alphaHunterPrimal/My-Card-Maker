import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { useAuth } from '../src/contexts/AuthContext';
import { parseCookies } from 'nookies';
import jwt from "jsonwebtoken"
import {useRouter} from 'next/router';
import User from '../src/styles/Login/User';
import DivUpperBar from '../src/styles/UserHome/DivUpperBar';
import Voltar from '../src/styles/Galery/voltar';
import BodyProfile from '../src/styles/UserHome/BodyProfile';
import Input from '../src/styles/CardMaker/Input';
import InputPassword from '../src/styles/UserHome/InputPassword';

export default function UserHome(props){
    const router = useRouter()
    var {
        inicial, superuser, setInicial, setSuperuser
      } = useAuth()
      const[saida, setSaida] = React.useState("none")
      const [newName,setNewName] = React.useState("")
      const [oldPassword, setOldPassword] = React.useState("")
      const [newPassword, setNewPassword] = React.useState("")
      const [tipoSenhaVelha, setTipoSenhaVelha] = React.useState("password")
      const [tipoSenhaNova, setTipoSenhaNova] = React.useState("password")

    return(
        <>
        <Head>
            <title>Perfil</title>
        </Head>
        
        <DivUpperBar>
        <header>
        <Voltar onClick={() => {router.back()}}>
            <img src="/arrow-back.svg"></img>
        </Voltar>
        <User>
      <button onClick={() => saida == "none"? setSaida("inline") : setSaida("none")}>Logado como "{superuser}"</button>
      <button style={{display: `${saida}`}} onClick={() => {destroyCookie(null, "myuser.token")
      setSuperuser("")
       router.push('/login')}}>Sair</button>
      </User> 
      </header>
        </DivUpperBar>


        <BodyProfile>
            <div className='profileMain'>
                <div className='changeProfile'>

                   <div className='space-around'>
                     <p>Mudar nome</p>
                    </div>
                    <div className='flex-name'>
                    
                    <InputPassword placeholder={"Novo Nome"} onChange={(dados) => {setNewName(dados.target.value)}} value={newName}></InputPassword>
                    
                    
                    <button>Salvar</button>
                    </div>

                    <div className='space-around'>
                    <p>Mudar senha</p>
                    </div>
                    
                    <div className='changeOldPassword'>
                        <div>
                        <InputPassword placeholder={"Senha antiga"} type={tipoSenhaVelha} onChange={(dados) => {setOldPassword(dados.target.value)}} value={oldPassword}></InputPassword>
                    <button className='eyeLooking'
                    onClick={() => {
                        if(tipoSenhaVelha == "password"){
                          setTipoSenhaVelha("text")
                        }
                        if(tipoSenhaVelha == "text"){
                          setTipoSenhaVelha("password")
                        }
                        
                        }}>
                    <img src="/eye.png"></img>
                    </button>
                        </div>
                    
                    </div>


                    <div className='changeNewPassword'>
                        <div>
                        <InputPassword placeholder={"Senha atual"}type={tipoSenhaNova} onChange={(dados) => {setNewPassword(dados.target.value)}} value={newPassword}></InputPassword>
                    <button className='eyeLooking'
                    onClick={() => {
                        if(tipoSenhaNova == "password"){
                          setTipoSenhaNova("text")
                        }
                        if(tipoSenhaNova == "text"){
                          setTipoSenhaNova("password")
                        }
                        
                        }}>
                    <img src="/eye.png" ></img>
                    </button>
                        </div>

                    <button>Salvar</button>
                    </div>
                    
                    
                    
                    
                    
                    
    
                </div>


            </div>
        </BodyProfile>
        </>

    )
}

/*export async function getServerSideProps(ctx){
    //const apiClient = getAPIClient(ctx);
    const { ['myuser.token']: token } = parseCookies(ctx)
  
    if(!token) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        }
      }
    }
  
    const {username} = jwt.decode(token);
    return {
      props: {username}
    }
  }*/
  