import React, {useEffect} from 'react';

import Head from 'next/head';

import Content from '../src/styles/CardMaker/Content';

import { MAKER } from '../src/components/maker';
import {CARD} from "../src/components/card"
import {LOGIN} from "../src/components/login"
import { useInitial } from '../src/contexts/initialContext';
import {useRouter} from 'next/router';

import { useSession, signIn, signOut } from "next-auth/react"
import { LOGIN1 } from '../src/components/login1';
import { useAuth } from '../src/contexts/AuthContext';



export default function Home(props) {
  //const { data: session } = useSession()
  //const router = useRouter();
  //const [NEWAUTH, setNEWAUTH] = React.useState(props.Auth);
  //console.log(NEWAUTH)
  var {
    inicial, superuser, setInicial, setSuperuser
  } = useAuth()
  //console.log(superuser)

    return (
      <> 
      <Head>
        <title>Meu criador de cartas</title>
  
      </Head>
      
   <Content>
     
   { superuser != "" ? <> <CARD/> <MAKER/> </> : <> <LOGIN/> </>}
   {/* (superuser) == "" && */}
     
      </Content>
      </>
    )
  
  
}/*
export async function getServerSideProps(ctx){
  const res = await fetch('https://graphql.datocms.com/', {
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
    })
  const auth = await res.json()
  
  const Auth = auth.data.allLogins
  //console.log(db)
  //alert(Auth)
  return {
      props: {
          Auth,
      }
  }
}*/

