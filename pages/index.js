import React, {useEffect, useState} from 'react';
import Head from 'next/head';

import Content from '../src/styles/CardMaker/Content';

import { MAKER } from '../src/components/maker';
import {CARD} from "../src/components/card"

import {useRouter} from 'next/router';

import { useAuth } from '../src/contexts/AuthContext';
import { parseCookies } from 'nookies';
import jwt from "jsonwebtoken"


export default function Home(props) {
  var {
    setSuperuser
  } = useAuth()

  useEffect(() => {setSuperuser(props.username)},[])

    return (
      <> 
      <Head>
        <title>Meu criador de cartas</title>
  
      </Head>
      
   <Content>
   <CARD/> <MAKER/>
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

