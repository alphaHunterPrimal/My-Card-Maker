import React, { useEffect } from 'react';
import {useRouter} from 'next/router'
import Head from 'next/head';
import $, { ready } from "jquery";

import Input from '../src/styles/CardMaker/Input';
import Filters from '../src/styles/galery/filter';
import Voltar from "../src/styles/Galery/voltar"
import TopBar from '../src/styles/Galery/TopBar';
import Coment from '../src/styles/Galery/coment';
import GaleryCards from '../src/styles/Galery/GaleryCards';
import DiVariante from '../src/styles/Galery/variante';
import Divuser from '../src/styles/Galery/divuser';
import Inputlog from '../src/styles/Login/Inputlog';
import { useArray } from '../src/contexts/arrayContext';
//import DB, { filter } from '../db';

import jwt from "jsonwebtoken"
import nookies, { parseCookies, setCookie, destroyCookie } from "nookies";
import User from '../src/styles/Login/User';
import { useAuth } from '../src/contexts/AuthContext';
//var key = []
export default function Galeria(props){
    const router = useRouter();
    /*const [procura, setProcura] = React.useState('');
    var allKeywords = "";*/
    var {
        Velocidade,
        tiposDeCartas,
        Sets,
        Arquétipo,
        ArquétipoEfeitos,
        CustoM,
        Ganho,
        CustoE,
        Mov,
        Direcoes,
        Vida,
        Dano,
        KEY,
        KEI
    } = useArray()
    var {
        inicial, superuser, setInicial, setSuperuser
      } = useAuth()
      const[saida, setSaida] = React.useState("none")
    const [type, setType] = React.useState('');
    const [sets, setSets] = React.useState('');
    const [arctype, setArctype] = React.useState('');
    const [speed, setSpeed] = React.useState('');
    
    const [custoM, setCustoM] = React.useState('');
    const [custoE, setCustoE] = React.useState('');
    const [GE, setGE] = React.useState("false");
    const [ganho, setGanho] = React.useState('');
    const [mov, setMov] = React.useState('');
    const [direc, setDirec] = React.useState('');
    const [dano, setDano] = React.useState('');
    const [vida, setVida] = React.useState('');
    const [NEWDB, setNEWDB] = React.useState(props.DB);
    const [kei, setKei] = React.useState("");
    //const [indice, setIndice] = React.useState("1");
    var DpC;
    var DpG;
    var DpVelo;
    var DpMov;
    var DpDn;
    var DpVida;
    var DpDirec;
    const [teixto, setTeixto] = React.useState("") 
    
    const[autor, setAutor] = React.useState("")
    if(type == "Rainha"){
        DpC = 'none'
        DpG = "none"
        DpVelo = "none"
        DpMov = "none"
        DpDirec = "none"
        DpDn = "inline"
        DpVida = "inline"
    };
    if(type == "Criatura"){
        DpC = "inline"
        DpG = "inline"
        DpVelo = "none"
        DpMov = "inline"
        DpDirec = "inline"
        DpDn = "inline"
        DpVida = "inline"
    };
    if(type == "Armadilha"||type == "Terreno"){
        DpC = "inline"
        DpG = "none"
        DpVelo = "none"
        DpMov = "none"
        DpDirec = "none"
        DpDn = "none"
        DpVida = "none"
    };
    if(type == "Efeito"){
        DpC = "inline"
        DpG = "none"
        DpVelo = "inline"
        DpMov = "none"
        DpDirec = "none"
        DpDn = "none"
        DpVida = "none"
    }

    if(type == "Construcao"){
        DpC = "inline"
        DpG = "inline"
        DpVelo = "none"
        DpMov = "none"
        DpDirec = "none"
        DpDn = "inline"
        DpVida = "inline"
    }
    useEffect(() => {setNEWDB(NEWDB.filter((x) => (x.author == "Eumesmo" )));
     console.log(
        NEWDB.map((x)=>(
            console.log(x.author)
         ))
    )} , [])
    

    return(
        <>
        <Head>
            <title>Galeria</title>
        </Head>

        <TopBar>
        <Divuser>
            <Inputlog placeholder="Procure cartas pelo criador delas!" onChange={(dados) => {setAutor(dados.target.value)}} value={autor}></Inputlog>
        </Divuser>   
        <DiVariante>
        <span>Variantes</span>  
        <form className="Gvariante">
        <input name="onoff" type="radio" checked onClick={(dados) =>{
              setGE(dados.target.value)
              console.log(GE)
            }} value={"false"}/>
        <span>Off</span>
        <input name="onoff" type="radio" onClick={(dados) =>{
              setGE(dados.target.value)
              console.log(GE)
            }} value={"true"}/>
        <span>On</span> 
        </form>
        </DiVariante>
        <Voltar href="/"/*onClick={() => {router.push('/')}}*/>
            <img src="/arrow-back.svg"></img>
        </Voltar>

        <div style={{position: "absolute", top: "3vh", left: "7vw"}}>
<User>
      <button onClick={() => saida == "none"? setSaida("inline") : setSaida("none")}>Logado como "{superuser}"</button>
      <button style={{display: `${saida}`}} onClick={() => {destroyCookie(null, "myuser.token")
      setSuperuser("")
       router.push('/login')}}>Sair</button>
      </User> 
</div>
        <Coment >
        <span>Tipo</span> 
        <span>Palavras Chave</span> 
        <span>Sets</span> 
        <span style={{display: `${DpVelo}`}}>Rapidez</span> 
        <span >Arquétipo</span>  
          
        <span style={{display: `${DpC}`}}>CustoM</span>
        <span hidden={(GE == "false" || type == "Rainha" || type == "Bioma")}>CustoE</span>
        <span style={{display: `${DpG}`}}>Ganho</span>
        <span style={{display: `${DpMov}`}}>Mov</span>
        <span style={{display: `${DpDirec}`}}>Direc</span>
        <span style={{display: `${DpDn}`}}>Dano</span>
        <span style={{display: `${DpVida}`}}>Vida</span>
        </Coment>
        <Filters onSubmit={function(e){e.preventDefault()}}>
        
        <select id="tipos" onClick={(dados) => {setType(dados.target.value)}}>
            {tiposDeCartas.map((x)=>(
             <option value={x}>{x} </option>
         ))}
         </select>

{ 
    /*
  <Input onChange={(dados) =>{setProcura(dados.target.value)
                      $.each(KEY, function(key, link) {
                    if(procura.split(" ").includes(link) && !allKeywords.split(" ").includes(link)){
                      if(allKeywords == "") {allKeywords = link} else {
                        allKeywords = allKeywords + " " + link
                      }
                    }
                 });
                 console.log(procura)}
                 
} value={procura}></Input> {  
    */
}

            
            <select id="Gkei"  onChange={(dados) =>{setKei(dados.target.value)
             console.log(dados.target.value)}}>
            {KEY.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select> 
                
            

            <select id="sets" onChange={(dados) => {setSets(dados.target.value)}}>
            {Sets.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>

            <select id="velocidades" onChange={(dados) => {setSpeed(dados.target.value)}}>
            {Velocidade.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>

            <select id="arquétipos" style={{display: `${DpVelo}`}} onChange={(dados) => {setArctype(dados.target.value)}}>
            {
            type == "Efeito" ? ArquétipoEfeitos.map((x)=>(
                <option value={x.replace(/õ/g, "o").replace(/ã/g, "a").replace(/ç/g, "c")}>{x} </option>
            ))
            :
            Arquétipo.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>
            <select id="GcustoM"  style={{display: `${DpC}`}} onChange={(dados) =>{setCustoM(dados.target.value)}}>
            {CustoM.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>
            <select id="GcustoE" hidden={(GE == "false" || type == "Rainha" || type == "Bioma")} onChange={(dados) =>{setCustoE(dados.target.value)}}>
            {CustoE.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>
            <select id="Gganho"  style={{display: `${DpG}`}} onChange={(dados) =>{setGanho(dados.target.value)}}>
            {Ganho.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>
            <select id="Gmov"   style={{display: `${DpMov}`}} onChange={(dados) =>{setMov(dados.target.value)}}>
            {Mov.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>
            <select id="Gdirec"  style={{display: `${DpDirec}`}} onChange={(dados) =>{setDirec(dados.target.value)}}>
            {Direcoes.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>
            <select id="Gdano"  style={{display: `${DpDn}`}} onChange={(dados) =>{setDano(dados.target.value)}}>
            {Dano.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>
            <select id="Gvida"  style={{display: `${DpVida}`}} onChange={(dados) =>{setVida(dados.target.value)}}>
            {Vida.map((x)=>(
             <option value={x}>{x} </option>
         ))}
            </select>

        </Filters>
        <button className="submitar" onClick={async () => {
            setNEWDB(props.DB)
            console.log(NEWDB)         
            if(type != ""){setNEWDB(NEWDB.filter((x) => (x.typo == type )))}
            if(autor != ""){setNEWDB(NEWDB.filter((x) => (x.author == autor )))}
            if(sets != ""){setNEWDB(NEWDB.filter((x) => (x.sets == sets )))}
            if(arctype != ""){setNEWDB(NEWDB.filter((x) => (x.arctype == arctype )))}
            if(speed != ""){setNEWDB(NEWDB.filter((x) => (x.velocidade == speed )))}
            if(custoM != ""){setNEWDB(NEWDB.filter((x) => (x.custom == custoM )))}
            if(custoE != ""){setNEWDB(NEWDB.filter((x) => (x.custoe == custoE )))}
            if(ganho != ""){setNEWDB(NEWDB.filter((x) => (x.ganho == ganho )))}
            if(mov != ""){setNEWDB(NEWDB.filter((x) => (x.mov == mov )))}
            if(direc != ""){setNEWDB(NEWDB.filter((x) => (x.direc == direc )))}
            if(vida != ""){setNEWDB(NEWDB.filter((x) => (x.vida == vida )))}
            if(dano != ""){setNEWDB(NEWDB.filter((x) => (x.dano == dano )))}
            if(kei != ""){setNEWDB(NEWDB.filter((x) => (x.keywords.split(" ").includes(kei))))}
            
            
        
            setType("")
            setAutor("")
            setSets("")
            setArctype("")
            setSpeed("")
            setCustoM("")
            setGanho("")
            setMov("")
            setDirec("")
            setVida("")
            setDano("")
            //indice = 1
            setKei("")

            //$('#tipos').val("")
           
              }     
        }>Filtrar</button>
        </TopBar>
        <GaleryCards>
        {NEWDB.sort(function(a,b) {
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
}).map((x)=>(
            <img src={x.card}/>
         ))}
        </GaleryCards>
        
        </>

    )
}
export async function getServerSideProps(ctx){
    const resposta = await fetch('https://graphql.datocms.com/', {
        method: 'POST',
        headers: {
          'Authorization': '4743c2042e55f3385c756ec8477396',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ "query": `query {
          allGaleries {
            name
            author
            typo 
            keywords
            sets 
            velocidade
            arctype 
            card 
            custom
            custoe 
            ganho 
            mov 
            direc 
            dano 
            vida
          }
        }` })
      })
    const db = await resposta.json()
    const DB = db.data.allGaleries
    //console.log(db)
    console.log(DB)


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
        props: {
            DB, username
        }
    }
}