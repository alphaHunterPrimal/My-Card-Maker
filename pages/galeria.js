import React from 'react';
import {useRouter} from 'next/router'
import Head from 'next/head';
import $, { ready } from "jquery";

import Input from '../src/styles/CardMaker/Input';
import Filters from '../src/styles/galery/filter';
import Voltar from "../src/styles/Galery/voltar"
import TopBar from '../src/styles/Galery/TopBar';
import Coment from '../src/styles/Galery/coment';
import GaleryCards from '../src/styles/Galery/GaleryCards';
import DB, { filter } from '../db';

 var KEY = [
    'Destruir',
    'Obliterar',
    'Temporaria',
    'Aterrar'];
//var key = []
export default function Galeria(){
    const router = useRouter();
    const tiposDeCartas = ["Queen", "Creature", "Spell", "Trap", "Terrain", "Construction"];
    const Sets = ["", "firelizards"];
    const Arquétipo = ["", "mamals", "lizards", "constructo", "bio-constructo"];
    const Custo = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
    const Ganho = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const Mov = [ "1", "2", "3", "4", "5"];
    const Vida = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
    const Dano = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
    const [type, setType] = React.useState('');
    const [sets, setSets] = React.useState('');
    const [arctype, setArctype] = React.useState('');
    
    const [custo, setCusto] = React.useState('');
    const [ganho, setGanho] = React.useState('');
    const [mov, setMov] = React.useState('');
    const [dano, setDano] = React.useState('');
    const [vida, setVida] = React.useState('');
    const [NEWDB, setNEWDB] = React.useState(DB);
    const [kei, setKei] = React.useState("");
    //const [indice, setIndice] = React.useState("1");
    var DpC;
    var DpG;
    var DpMov;
    var DpDn;
    var DpVida;

    const [teixto, setTeixto] = React.useState("") 



    if(type == "Queen"){
        DpC = 'none'
        DpG = "none"
        DpMov = "none"
        DpDn = "inline"
        DpVida = "inline"
    };
    if(type == "Creature"){
        DpC = "inline"
        DpG = "inline"
        DpMov = "inline"
        DpDn = "inline"
        DpVida = "inline"
    };
    if(type == "Spell"||type == "Trap"||type == "Terrain"){
        DpC = "inline"
        DpG = "none"
        DpMov = "none"
        DpDn = "none"
        DpVida = "none"
    };

    if(type == "Construction"){
        DpC = "inline"
        DpG = "inline"
        DpMov = "none"
        DpDn = "inline"
        DpVida = "inline"
    }
    

    return(
        <>
        <Head>
            <title>Galeria</title>
        </Head>

        <TopBar>
        <Voltar href="/"/*onClick={() => {router.push('/')}}*/>
            <img src="/arrow-back.svg"></img>
        </Voltar>
        <Coment >
        <span>Tipo</span> 
        <span>Keywords</span> 
        <span>Sets</span> 
        <span>Arquétipo</span>  
          
        <span style={{display: `${DpC}`}}>Custo</span>
        <span style={{display: `${DpG}`}}>Ganho</span>
        <span style={{display: `${DpMov}`}}>Mov</span>
        <span style={{display: `${DpDn}`}}>Dano</span>
        <span style={{display: `${DpVida}`}}>Vida</span>
        </Coment>
        <Filters>
        
        <select id="tipos" onChange={(dados) => {setType(dados.target.value)}}>
            {tiposDeCartas.map((x)=>(
             <option value={x}>{x} </option>
         ))}
         </select>
         <select id="Gkei" size="5" onChange={(dados) =>{setKei(dados.target.value)
             console.log(dados.target.value)}}>
            {KEY.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>
             {/*<input id="KEi"  style={{width: "70px", fontSize: "10px"}} onChange={(dados) => {
                     setTeixto(dados.target.value)
                     //var testo = document.querySelector("#KEi").innerHTML
                     console.log(teixto)
                     var splitado = teixto.split(" ")
                     $.each(KEY, function(x, y) {
                        if(splitado.includes(y) && !key.includes(y)){
                            key.push(y)
                        }
                     });
                     console.log(splitado)
                     console.log(key)
                     
                     
                 
                 }
                 } value={teixto}></input>*/}
            <select id="sets" onChange={(dados) => {setSets(dados.target.value)}}>
            {Sets.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>
            <select id="arquétipos" onChange={(dados) => {setArctype(dados.target.value)}}>
            {Arquétipo.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>
            <select id="Gcusto" size="5" style={{display: `${DpC}`}} onChange={(dados) =>{setCusto(dados.target.value)}}>
            {Custo.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>
            <select id="Gganho" size="4" style={{display: `${DpG}`}} onChange={(dados) =>{setGanho(dados.target.value)}}>
            {Ganho.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>
            <select id="Gmov"  size="3" style={{display: `${DpMov}`}} onChange={(dados) =>{setMov(dados.target.value)}}>
            {Mov.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>
            <select id="Gdano" size="5" style={{display: `${DpDn}`}} onChange={(dados) =>{setDano(dados.target.value)}}>
            {Dano.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>
            <select id="Gvida" size="5" style={{display: `${DpVida}`}} onChange={(dados) =>{setVida(dados.target.value)}}>
            {Vida.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>

            {/*
            <Input id="Gcusto" type="number" min="0" placeholder="0" name="custo" style={{display: `${DpC}`}} onChange={(dados) =>{setCusto(dados.target.value)}}value={custo}/> 
            <Input id="Gganho" type="number" min="0" placeholder="0" name="ganho" style={{display: `${DpG}`}} onChange={(dados) =>{setGanho(dados.target.value)}} value={ganho}/>
            <Input id="Gmov" type="number" min="0" placeholder="0" name="mov" style={{display: `${DpMov}`}} onChange={(dados) =>{setMov(dados.target.value)}} value={mov}/>
            <Input id="Gdano" type="number" min="0" placeholder="0" name="dano" style={{display: `${DpDn}`}} onChange={(dados) =>{setDano(dados.target.value)}} value={dano}/>
            <Input id="Gvida" type="number" min="0" placeholder="0" name="vida" style={{display: `${DpVida}`}} onChange={(dados) =>{setVida(dados.target.value)}} value={vida}/> */}
            
            
        </Filters>
        <button className="submitar" onClick={async () => {
            setNEWDB(DB);
            if(type != ""){setNEWDB(NEWDB.filter((x) => (x.type == type )))}
            if(sets != ""){setNEWDB(NEWDB.filter((x) => (x.sets == sets )))}
            if(arctype != ""){setNEWDB(NEWDB.filter((x) => (x.arctype == arctype )))}
            if(custo != ""){setNEWDB(NEWDB.filter((x) => (x.custo == custo )))}
            if(ganho != ""){setNEWDB(NEWDB.filter((x) => (x.ganho == ganho )))}
            if(mov != ""){setNEWDB(NEWDB.filter((x) => (x.mov == type )))}
            if(vida != ""){setNEWDB(NEWDB.filter((x) => (x.vida == vida )))}
            if(dano != ""){setNEWDB(NEWDB.filter((x) => (x.dano == dano )))}
            if(kei != ""){setNEWDB(NEWDB.filter((x) => (x.KEYWORDS.includes(kei))))}
            //var indice = 1
            /*for (let i = 0; i < NEWDB.length; i++){
                console.log("cheguei aqui")
            }
            */
            /*NEWDB.map((x) => {
                for (let i = 0; i < NEWDB.length; i++){
                    console.log("cheguei aqui")
                    if(NEWDB[i].KEYWORDS[i].includes(key[i])){
                        console.log("sim")
                    } else { console.log("não")}
                }
            })*/
            /*setNEWDB(
                NEWDB.map((x) => 
                (x.KEYWORDS.map((y) =>
                (   
                    key.includes(y) ?
                    console.log(y) :
                    console.log("não")
                    
                ))
                )))*/
                /*
                if(key != "") {
                await NEWDB.map((x) => {
                    /*
                    var kei = key.toString()
                    var xei = x.KEYWORDS.toString()
                    console.log(kei)
                    console.log(xei)
                    
                    //var pode = true
                    if(key.includes(x.KEYWORDS.forEach((y) => {return y}
                    ))){
                        console.log("opa")
                    }
                    
                    if(!key.includes(x.KEYWORDS)){
                        console.log("apo")
                    }
                    
                    if(x.KEYWORDS.every(key.map(x => 
                        `${x}`
                    ))){
                        console.log("opa")
                    }
                    
                    
                        x.KEYWORDS.map((y) => {
                            console.log(indice)
                            if(x.id == indice){
                               
                            if(key.includes(y)){
                                //verificar = true
                                console.log("deu")
                                
                                
                            }
                            if(!key.includes(y)) {
                                var index = indice - 1  
                                         
                                setNEWDB(NEWDB.splice(index, 1))
                                indice = indice + 1
                                //setIndice(indexis)
                                console.log("não deu")
                                
                            }
                            else {

                            }
                        }
                             } )
                    
                    

                    
                }) 
               }*/

            
            
            
            console.log(NEWDB)
        
            setType("")
            setSets("")
            setArctype("")
            setCusto("")
            setGanho("")
            setMov("")
            setVida("")
            setDano("")
            //indice = 1
            setKei("")
            
           
            
        }}>Filtrar</button>
        </TopBar>
        <GaleryCards>
        {NEWDB.map((x)=>(
            <img src={x.card}/>
         ))}
        </GaleryCards>
        
        </>

    )
}