import React from 'react';
import {useRouter} from 'next/router'
import Head from 'next/head';
import $, { ready } from "jquery";

import Input from '../src/styles/CardMaker/Input';
import Filters from '../src/styles/galery/filter';
import Voltar from "../src/styles/Galery/voltar"
import TopBar from '../src/styles/Galery/TopBar';

export default function Galeria(){
    const router = useRouter();
    const tiposDeCartas = ["Queen", "Creature", "Spell", "Trap", "Terrain", "Construction"];
    const Sets = ["firelizards"];
    const Arquétipo = ["mamals", "lizards", "constructo", "bio-constructo"]
    const [GCusto, setGCusto] = React.useState('0');
    return(
        <>
        <Head>
            <title>Galeria</title>
        </Head>

        <TopBar>
        <Voltar onClick={() => {router.push('/')}}>
            <img src="/arrow-back.svg"></img>
        </Voltar>
        <Filters>
            <select>
            {tiposDeCartas.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>
            <select>
            {Sets.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>
            <select>
            {Arquétipo.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>
            <Input id="Gcusto" type="number" min="0" name="custo" onChange={(dados) =>{setGCusto(dados.target.value)}} value={GCusto}/>
        </Filters>
        </TopBar>

        
        </>

    )
}