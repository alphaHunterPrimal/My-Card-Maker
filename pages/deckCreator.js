import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from "framer-motion"
import { useInitial } from '../src/contexts/initialContext';
import { useArray } from '../src/contexts/arrayContext';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import {useRouter} from 'next/router';

import jwt from "jsonwebtoken"
import ReusableTopBar from '../src/styles/CardMaker/UltraUpperBar';
import Voltar from '../src/styles/Galery/voltar';
import User from '../src/styles/Login/User';
import { useAuth } from '../src/contexts/AuthContext';
import DeckBody from '../src/styles/DeckCreator/deckBody';


export default function DeckCreator(props) {
    const router = useRouter()
    var {
        superuser, setSuperuser,
      } = useAuth()

      const[saida, setSaida] = React.useState("none")
    return (
      <> 
        <Head>
            <title>Perfil</title>
        </Head>
        <ReusableTopBar/>
        <DeckBody></DeckBody>
      </>
    )
  
  
}

export async function getServerSideProps(ctx){
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
}
