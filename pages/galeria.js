import React, { useEffect, Component } from 'react';
import {useRouter} from 'next/router'
import Head from 'next/head';
import $, { ready } from "jquery";

import Input from '../src/styles/CardMaker/Input';
import Filters from '../src/styles/Galery/Filter';
import Voltar from "../src/styles/Galery/voltar"
import TopBar from '../src/styles/Galery/TopBar';
import Coment from '../src/styles/Galery/coment';
import GaleryCards from '../src/styles/Galery/GaleryCards';
import DiVariante from '../src/styles/Galery/variante';
import Divuser from '../src/styles/Galery/divuser';
import Inputlog from '../src/styles/Login/Inputlog';
import { useArray } from '../src/contexts/arrayContext';


import jwt from "jsonwebtoken"
import nookies, { parseCookies, setCookie, destroyCookie } from "nookies";
import User from '../src/styles/Login/User';
import { useAuth } from '../src/contexts/AuthContext';
import Modal from '../src/components/modal';
import { route } from 'next/dist/server/router';

import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";
import DivFiltros from '../src/styles/Galery/divFiltros';
import { AnimatePresence, motion } from 'framer-motion';
import { useInitial } from '../src/contexts/initialContext';
import UltraUpperBar from '../src/styles/CardMaker/UltraUpperBar';





export default function Galeria(props){
    const router = useRouter();

    const [selectedOption, setSelectedOption] = React.useState(null);
    const [selectedArctype, setSelectedArctype] = React.useState(null);
    const [selectedEffect, setSelectedEffect] = React.useState(null);
    const [selectedTrap, setSelectedTrap] = React.useState(null);

    var {
        Velocidade,
        tiposDeCartas,
        Sets,
        Arquétipo,
        ArquétipoEfeitos,
        ArquétipoArmadilhas,
        CustoM,
        Ganho,
        CustoE,
        Mov,
        Direcoes,
        Vida,
        Dano,
        KEY,
        KEI,

    } = useArray()
    var {
        inicial, superuser, setInicial, setSuperuser
      } = useAuth()

      var {
        resetAfterUpdate
      } = useInitial()
      const[saida, setSaida] = React.useState("none")
    const [name, setName] = React.useState('');
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
    const [kei, setKei] = React.useState(null);


    const [showModal, setShowModal] = React.useState(false);
    const [showReset, setShowReset] = React.useState(true);
    const [zoomCarta, setZoomCarta] = React.useState("");

   
    const [DpCE, setDpCE] = React.useState("none");
    const [Aparecer, setAparecer] = React.useState(false);
    var DpClassCustos;
    var DpClassMov
    var DpInputEnergia;
    var DpC;
    var DpG;
    var DpVelo;
    var DpMov;
    var DpDn;
    var DpVida;
    var DpDirec;
    var DpArc;
    var DpSets;
    var DpKey;
    const [teixto, setTeixto] = React.useState("") 
    
    const[autor, setAutor] = React.useState("")
    
    useEffect(() => {
      setNEWDB(NEWDB.filter((x) => (x.author == "Eumesmo" )))
     
     /*console.log(
        NEWDB.map((x)=>(
            console.log(x.author)
         ))
    )*/} , [])
    if(type == ""){
        DpSets = "none"
        DpKey = "none"
        DpArc = "none"
        DpC = 'none'
        DpG = "none"
        DpVelo = "none"
        DpMov = "none"
        DpDirec = "none"
        DpDn = "none"
        DpVida = "none"
        DpInputEnergia = "none"
        DpClassCustos = "none"
        DpClassMov = "none"
    };
    if(type == "Rainha"){
        DpSets = "inline"
        DpKey = "inline"
        DpArc = "inline"
        DpC = 'none'
        DpG = "none"
        DpVelo = "none"
        DpMov = "none"
        DpDirec = "none"
        DpDn = "inline"
        DpVida = "inline"
        DpInputEnergia = "none"
        DpClassCustos = "none"
        DpClassMov = "none"
    };
    if(type == "Criatura"){
        DpSets = "inline"
        DpKey = "inline"
        DpArc = "inline"
        DpC = "flex"
        DpG = "flex"
        DpVelo = "none"
        DpMov = "inline"
        DpDirec = "inline"
        DpDn = "inline"
        DpVida = "inline"
        DpInputEnergia = "flex"
        DpClassCustos = "flex"
        DpClassMov = "flex"

    };
    if(type == "Armadilha"||type == "Terreno"){
        DpSets = "inline"
        DpKey = "inline"
        DpArc = "inline"
        DpC = "flex"
        DpG = "none"
        DpVelo = "none"
        DpMov = "none"
        DpDirec = "none"
        DpDn = "none"
        DpVida = "none"
        DpInputEnergia = "flex"
        DpClassCustos = "flex"
        DpClassMov = "none"

    };
    if(type == "Efeito"){
        DpSets = "inline"
        DpKey = "inline"
        DpArc = "inline"
        DpC = "flex"
        DpG = "none"
        DpVelo = "inline"
        DpMov = "none"
        DpDirec = "none"
        DpDn = "none"
        DpVida = "none"
        DpInputEnergia = "flex"
        DpClassCustos = "flex"
        DpClassMov = "none"

    }
    if(type == "Construcao"){
        DpSets = "inline"
        DpKey = "inline"
        DpArc = "inline"
        DpC = "flex"
        DpG = "flex"
        DpVelo = "none"
        DpMov = "none"
        DpDirec = "none"
        DpDn = "inline"
        DpVida = "inline"
        DpInputEnergia = "flex"
        DpClassCustos = "flex"
        DpClassMov = "none"
        
    }


    //colocando as opções dentro do options
    const options = []
    const optionsArctype = []
    const optionsEffect = []
    const optionsTrap = []
    useEffect(() => {KEY.shift()}, [])
    KEY.map((x)=>(
        options.push({value: x, label: x })
    ))

    Arquétipo.map((x)=>(
        optionsArctype.push({value: x, label: x })
    ))
    ArquétipoEfeitos.map((x)=>(
        optionsEffect.push({value: x, label: x })
    ))
    ArquétipoArmadilhas.map((x)=>(
        optionsTrap.push({value: x, label: x })
    ))
    useEffect(() => {
        setDpCE("none")
        setSelectedArctype(null)
        setSelectedEffect(null)
        setSelectedTrap(null)

},[type])
    
    


    return(
        <>
        <Head>
            <title>Galeria</title>
        </Head>

        

        <UltraUpperBar/>
<TopBar> 
<div className='informarFiltro'>
          <span>- Filtre as cartas pelas suas preferências - </span>
          <div className="resolve-filter">
         <div>
         <button hidden={Aparecer == true} className='aparecer' onClick={()=>{
          setAparecer(true)
        }}>Abrir Filtro</button>

          <button hidden={Aparecer == false} className='aparecer' onClick={()=>{
          setAparecer(false)

        }}>Fechar Filtro</button>           
        
        
        
        </div> 

        </div>
        </div>

        </TopBar>


        <AnimatePresence>
          {Aparecer &&
         <DivFiltros>
          <motion.div
          className='divExteriorDoMotion'
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 1}}>

          <Filters onSubmit={function(e){e.preventDefault()}}>
          
          <div className='principal'>
            <div>
            <p>Tipo</p>
            <p style={{display: `${DpSets}`}}>Sets</p>
            </div>
          
          <div>
          <select id="tipos" onClick={(dados) => {setType(dados.target.value)}}>
                      {tiposDeCartas.map((x)=>(
                       <option selected={x == type} value={x}>{x} </option>
                   ))}
                   </select>
                   <select id="sets" style={{display: `${DpSets}`}} onChange={(dados) => {setSets(dados.target.value)}}>
                      {Sets.map((x)=>(
                       <option selected={x == sets} value={x}>{x} </option>
                   ))}
                      </select>
                      <button className="submitar" onClick={async () => {
          
          if(type != ""){setNEWDB(NEWDB.filter((x) => (x.typo == type )))}
          if(autor != ""){setNEWDB(NEWDB.filter((x) => (x.author == autor )))}
          
          if(arctype != null && arctype != undefined && arctype != []){
              if(type == "Efeito" ||type == "Armadilha" ){
                arctype.map((x) => (
                    setNEWDB(NEWDB.filter((y) => (y.arctype.replace(" de ", " ").split(" ").includes(x
                        .value
                        .replace(/õ/g, "o").replace(/ã/g, "a").replace(/ç/g, "c").replace(/é/g, "e").replace(/í/g, "i").replace(/á/g, "a")))))
                ))
              } else {
                arctype.map((x) => (
                    setNEWDB(NEWDB.filter((y) => (y.arctype.replace(" de ", " ").split(" ").includes(x.value))))
                ))
              }
          
            }
          if(sets != ""){setNEWDB(NEWDB.filter((x) => (x.sets == sets )))}
          if(speed != ""){setNEWDB(NEWDB.filter((x) => (x.velocidade == speed )))}
          if(custoM != ""){setNEWDB(NEWDB.filter((x) => (x.custom == custoM )))}
          if(custoE != ""){setNEWDB(NEWDB.filter((x) => (x.custoe == custoE )))}
          if(ganho != ""){setNEWDB(NEWDB.filter((x) => (x.ganho == ganho )))}
          if(mov != ""){setNEWDB(NEWDB.filter((x) => (x.mov == mov )))}
          if(direc != ""){setNEWDB(NEWDB.filter((x) => (x.direc == direc )))}
          if(vida != ""){setNEWDB(NEWDB.filter((x) => (x.vida == vida )))}
          if(dano != ""){setNEWDB(NEWDB.filter((x) => (x.dano == dano )))}
          if(kei != null && kei != undefined && kei != []){
            kei.map((x) => (
                setNEWDB(NEWDB.filter((y) => (y.keywords.split(" ").includes(x.value))))
            ))
            }

            var tamanho = name.trim().length
            if(name != ""){
                 setNEWDB(NEWDB.filter((x) => (x.name.split("").splice(0, tamanho).toString().replace(/,/g, "") == name.trim()
                 //falsaProcuraArray.toString().replace(/,/g, "")
                 )))
                
                }
          
          setShowReset(false)
          
            }     
          }>Filtrar</button>
          <button className="resetar" hidden={showReset} onClick={async() => {
          setNEWDB(props.DB)  
          setName("")
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
          
          setKei("")
          setSelectedOption(null)
          setSelectedArctype(null)
          setSelectedEffect(null)
          setSelectedTrap(null)
          
          
          setShowReset(true)
          
          
          }}>
          
          
          Resetar
          </button>
          
          </div>
          
          
          </div>
          
          <div className='searchName'>
          <Inputlog placeholder="Procure cartas pelo nome delas!" onChange={(dados) => {setName(dados.target.value)}} value={name}></Inputlog>
          <Inputlog placeholder="Procure cartas pelo criador delas!" onChange={(dados) => {setAutor(dados.target.value)}} value={autor}></Inputlog>
          </div>
          
          <div id="Gkei" style={{display: `${DpKey}`}} className='palavrasChaveDiv'>
          <p style={{display: `${DpKey}`}}>Palavras Chave</p> 
           <Select
           className="selectKey"
            isMulti={true}
           //defaultValue={selectedOption}
           onChange={(dados) => {
             setSelectedOption(dados)
             setKei(dados)
             selectedOption != null ?
             (kei.map((x)=>(console.log(x)))
             )
             :
             console.log("null")
           }
           }
           options={options}
           value={selectedOption}
          /> </div> 
          
          <div id="arquétipos" className='arquetipoDiv' style={{display: `${DpArc}`}}  >
          <p style={{display: `${DpArc}`}}>Arquétipo</p> 
          {
                      type == "Efeito" ?
                          
                      <Select
                      className="selectArc"
                          isMulti={true}
                         onChange={(dados) => {
          
                           setSelectedEffect(dados)
                           setArctype(dados)
                           selectedEffect != null ?
                           (arctype.map((x)=>(console.log(x)))
                           )
                           :
                           console.log("null")
                         }
                         }
                         options={optionsEffect}
                         value={selectedEffect}
                        />
          
          
                      : type == "Armadilha" ?
                      
                          
                          <Select
                          className="selectArc"
                          isMulti={true}
                         onChange={(dados) => {
                           setSelectedTrap(dados)
                           setArctype(dados)
                           selectedTrap != null ?
                           (arctype.map((x)=>(console.log(x)))
                           )
                           :
                           console.log("null")
                         }
                         }
                         options={optionsTrap}
                         value={selectedTrap}
                        />
                      
                      : 
                          <Select
                          className="selectArc"
                          isMulti={true}
                         onChange={(dados) => {
          
                           setSelectedArctype(dados)
                           setArctype(dados)
                           selectedArctype != null ?
                           (arctype.map((x)=>(console.log(x)))
                           )
                           :
                           console.log("null")
                         }
                         }
                         options={optionsArctype}
                         value={selectedArctype}
                        />
                      
          
                  }
          </div>
          
          <div className='velocidadeDiv' style={{display: `${DpVelo}`}}>
          <p style={{display: `${DpVelo}`}}>Rapidez</p> 
          <select id="velocidades"  onChange={(dados) => {setSpeed(dados.target.value)}}>
                      {Velocidade.map((x)=>(
                       <option selected={x == speed} value={x}>{x} </option>
                   ))}
                      </select>
          
          </div>
          
          <div className='custos' style={{display: `${DpClassCustos}`}}>
          
          <div>
                  <p style={{display: `${DpC}`}}>CustoM</p>
                  <p style={{display: `${DpCE}`, justifyContent: "center"}} hidden={(GE == "false" || type == "Rainha" || type == "Bioma"| type == "")}>CustoE</p>
                  <p style={{display: `${DpG}`}}>Ganho</p>
                  <p hidden={(type == "Rainha" || type == "Bioma"|| type == "")}>Variantes</p>
          </div>
          
          <div>
          <select id="GcustoM"  style={{display: `${DpC}`}} onChange={(dados) =>{setCustoM(dados.target.value)}}>
                      {CustoM.map((x)=>(
                       <option selected={x == custoM} value={x}>{x} </option>
                   ))}
                      </select>
                      <select id="GcustoE" hidden={(GE == "false" || type == "Rainha" || type == "Bioma"|| type == "")} onChange={(dados) =>{setCustoE(dados.target.value)}}>
                      {CustoE.map((x)=>(
                       <option selected={x == custoE}  value={x}>{x} </option>
                   ))}
                      </select>
                      <select id="Gganho"  style={{display: `${DpG}`}} onChange={(dados) =>{setGanho(dados.target.value)}}>
                      {Ganho.map((x)=>(
                       <option selected={x == ganho} value={x}>{x} </option>
                   ))}
                    </select>
          
                    <form className="Gvariante" hidden={(type == "Rainha" || type == "Bioma"|| type == "")}   >
                      <div style={{display: `${DpInputEnergia}`}}>
                      <input  name="onoff" type="radio" checked={GE == "false"} onClick={(dados) =>{
                        setGE(dados.target.value)
                        setDpCE("none")
          
                      }} value={"false"}/>
                  <span>Off</span>
                      </div>
                      <div style={{display: `${DpInputEnergia}`}}>
                      <input name="onoff" type="radio" onClick={(dados) =>{
                        setGE(dados.target.value)
                        setDpCE("flex")
                      }} value={"true"}/>
                  <span>On</span> 
                      </div>
          
                  </form>
          
          </div>
          
          </div>
          
          <div className='movimentacao' style={{display: `${DpClassMov}`}}>
          <div>
          <p style={{display: `${DpMov}`}}>Mov</p>
          <p style={{display: `${DpDirec}`}}>Direc</p>
            </div>  
          
            <div>
            <select id="Gmov"   style={{display: `${DpMov}`}} onChange={(dados) =>{setMov(dados.target.value)}}>
                      {Mov.map((x)=>(
                       <option selected={x == mov} value={x}>{x} </option>
                   ))}
                      </select>
                      <select id="Gdirec"  style={{display: `${DpDirec}`}} onChange={(dados) =>{setDirec(dados.target.value)}}>
                      {Direcoes.map((x)=>(
                       <option selected={x == direc} value={x}>{x} </option>
                   ))}
                    </select>
          
            </div>
          </div>
          
          <div className='statusBase'>
          
          <div>
          <p style={{display: `${DpDn}`}}>Dano</p>
          <p style={{display: `${DpVida}`}}>Vida</p>
          </div>
          
          <div>
          
          <select id="Gdano"  style={{display: `${DpDn}`}} onChange={(dados) =>{setDano(dados.target.value)}}>
                      {Dano.map((x)=>(
                       <option selected={x == dano} value={x}>{x} </option>
                   ))}
                      </select>
                      <select id="Gvida"  style={{display: `${DpVida}`}} onChange={(dados) =>{setVida(dados.target.value)}}>
                      {Vida.map((x)=>(
                       <option selected={x == vida} value={x}>{x} </option>
                   ))}
                      </select>
          </div>
          
          </div>   
          
                  </Filters>
          </motion.div>
          </DivFiltros>

          }

        </AnimatePresence>
       
        <GaleryCards>
        
        {NEWDB.sort(function(a,b) {
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
}).map((x)=>(
    <>
    <button onClick={() => {
        setShowModal(true)
        setZoomCarta(x.card)
        }}>
     <img src={x.card} />

    </button>

    </>
            
         ))}

        </GaleryCards>
        <Modal
             onClose={() => setShowModal(false)}
             show={showModal}
           >
            <img src={zoomCarta}/>
           </Modal>
        </>

    )
}
export async function getServerSideProps(ctx){
    const autorizacao = process.env.AUTHORIZATION
    const resposta = await fetch('https://graphql.datocms.com/', {
        method: 'POST',
        headers: {
          'Authorization': autorizacao,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ "query": `query {
          allGaleries {
            id
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
    //console.log(DB)


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