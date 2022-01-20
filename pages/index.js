import React from 'react';

import Head from 'next/head';

import Content from '../src/styles/CardMaker/Content';

import { MAKER } from '../src/components/maker';
import {CARD} from "../src/components/card"
import {LOGIN} from "../src/components/login"
import { useInitial } from '../src/contexts/initialContext';


import { useSession, signIn, signOut } from "next-auth/react"
import { LOGIN1 } from '../src/components/login1';


export default function Home() {
  const { data: session } = useSession()
  var {
    inicial
  } = useInitial()
  return (
    <> 
    <Head>
      <title>Meu criador de cartas</title>

    </Head>
    
 <Content>
 { !(session) && <> <CARD/> <MAKER/> </>}
 {/* !(session) && <> <LOGIN1/> </>*/}
    </Content>
    </>
  )
}

