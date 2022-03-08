import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from "framer-motion"
import {useRouter} from 'next/router';
import Voltar from '../Galery/voltar';
import User from '../Login/User';
import { useInitial } from '../../contexts/initialContext';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { useAuth } from '../../contexts/AuthContext';
import AvisoAlternar from './AvisoAlternar';

function ReusableTopBar(){
    const router = useRouter()
    var {
        superuser, setSuperuser,
      } = useAuth()
      var {
          saida, setSaida, resetAfterUpdate, alternarMaker, setAlternarMaker,
      } = useInitial()

      useEffect(() =>{
      if(router.pathname != "/"){setAlternarMaker("Criar"); resetAfterUpdate()}
      }, [])

      return(
          <>
          <UltraUpperBar>
        <header>
        {router.pathname != "/" &&
                <Voltar onClick={() => {router.back()}}>
                <img src="/arrow-back.svg"></img>
            </Voltar>
        }
      </header>
      { alternarMaker == "Editar" &&
  <div /*style={{position: "absolute", top: "1vh", left: "15vw"}}*/>
  <AvisoAlternar>
  <button onClick={async() =>{setAlternarMaker("Criar"); alert("Edição cancelada."); resetAfterUpdate()}}>X</button>
  <div>
  <p>Sair do modo de Edição</p>
  </div>
  
  </AvisoAlternar>
  
</div>

}
<div className='botõesDePush'>


{router.pathname != "/" &&
<button onClick={() => {router.push("/")}}>Ir para o CardMaker</button>}
{router.pathname != "/galeria" &&
<button onClick={() => {router.push("/galeria")}}>Ir para a Galeria</button>}
{router.pathname != "/deckCreator" &&
<button onClick={() => {router.push("/deckCreator")}}>Ir para o Criador de Decks</button>}
</div>

<div /*style={{position: "absolute", top: "1vh", left: "1vw"}}*/ >
<User>
      <button onClick={() => saida == "none"? setSaida("inline") : setSaida("none")}>Logado como "{superuser}"</button>
      <AnimatePresence
>
        { saida == "inline" ? 
          <>
      <motion.button
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2}}
      //style={{display: `${saida}`}} 
      onClick={() => {router.push('/userhome')}}>Ir para o perfil</motion.button>
      <motion.button
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.3}}
      /*style={{display: `${saida}`}}*/ onClick={() => {destroyCookie(null, "myuser.token")
      setSuperuser("")
      resetAfterUpdate()
       router.push('/login')}}>Sair</motion.button>

          </>

       : null }

      </AnimatePresence>
</User> 
</div>

</UltraUpperBar>
          </>
      )
}

    const UltraUpperBar = styled.div`
    width: 100%;
    position: absolute;
    height: 9vh;
    top: 0;
    background-color: blueviolet;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    //box-shadow: 2px 2px rgb(0, 0, 0, 0.7);
    header{
        display: flex;
    align-items: center;

    }
    .botõesDePush{
        width: 30vw;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        button{
            background-color: blueviolet;
            width: 9vw;
            height: 50%;
            border-radius: 10%;
            cursor: pointer;
            margin: 0 2vw 0 0;
        }
    }
    `;    


export default ReusableTopBar;