import React, {useEffect, useState} from 'react';

import Head from 'next/head';

import Content from '../src/styles/CardMaker/Content';

import { MAKER } from '../src/components/maker';
import {CARD} from "../src/components/card"
import {LOGIN} from "./login"
import { useInitial } from '../src/contexts/initialContext';
import {useRouter} from 'next/router';

import { useSession, signIn, signOut } from "next-auth/react"
import { LOGIN1 } from '../src/components/login1';
import { useAuth } from '../src/contexts/AuthContext';
import { parseCookies } from 'nookies';
import jwt from "jsonwebtoken"


export default function Home(props) {
  //const { data: session } = useSession()
  //const router = useRouter();
  //const [NEWAUTH, setNEWAUTH] = React.useState(props.Auth);
  //console.log(NEWAUTH)
  
  var {
    inicial, superuser, setInicial, setSuperuser
  } = useAuth()

 /* const { ['myuser.token']: token } = parseCookies()
  if(jwt.decode(token).username != null){
    setUsuario(jwt.decode(token).username)
    console.log(usuario)
  }*/
  useEffect(() => {setSuperuser(props.username)},[])
  //console.log(superuser)

    return (
      <> 
      <Head>
        <title>Meu criador de cartas</title>
  
      </Head>
      
   <Content>
   <CARD/> <MAKER/>
   {/* usuario ? <> <LOGIN/> </> : <> <CARD/> <MAKER/> </>*/}
   {/* (superuser) == "" && */}
     
      </Content>
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

