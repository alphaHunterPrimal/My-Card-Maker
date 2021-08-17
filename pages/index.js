import React from 'react';

import Head from 'next/head';

import Content from '../src/styles/CardMaker/Content';

import { MAKER } from '../src/components/maker';
import {CARD} from "../src/components/card"
 

export default function Home() {
  return (
    <> 
    <Head>
      <title>Meu criador de cartas</title>

    </Head>
 <Content>
<CARD/>
<MAKER/>
    </Content>
    </>
  )
}
