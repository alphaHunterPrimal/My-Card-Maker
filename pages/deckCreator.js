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
import DivFiltrosDecks from '../src/styles/DeckCreator/divFiltrosDecks';
import Inputlog from '../src/styles/Login/Inputlog';
import DivFiltros from '../src/styles/Galery/divFiltros';
import Modal from "../src/components/modal"
import html2canvas from 'html2canvas';



export default function DeckCreator(props) {
    const router = useRouter()
    var {
        superuser, setSuperuser,
      } = useAuth()
      var {tiposDeCartas, Sets} = useArray()

      const [arrayDecks, setArrayDecks] = React.useState(
        [""/*, "Surto Insectóide", /*"Eskrugator Arruinado", "Eskrugator Arruinado",
      "Tunelador Final", "Tunelador Final", "Krug'onator Supremo do Deserto", "Krug'onator Supremo do Deserto",
      "Zhor'kag, Tubarão das Areias", "Zhor'kag, Tubarão das Areias"*/]);
      const[saida, setSaida] = React.useState("none")
      const [type, setType] = React.useState('');
      const [sets, setSets] = React.useState('');
      const [name, setName] = React.useState('');
      const [deckName, setDeckName] = React.useState('');
      const [Aparecer, setAparecer] = React.useState(false);
      const [AparecerBotao, setAparecerBotao] = React.useState(true);
      const [newDbCartas, setNewDbCartas] = React.useState(props.DBcards)
      const[autor, setAutor] = React.useState("")
      const [showModal, setShowModal] = React.useState(false);
      const [zoomCarta, setZoomCarta] = React.useState("");
    return (
      <> 
        <Head>
            <title>Perfil</title>
        </Head>
        <ReusableTopBar/>
        <DeckBody>
            <div className='selecionarFormato'>
            <button>Para Imprimir</button>
            <button>Para o TabletopSimulator</button>
            <div className='salvarDeck'>
              
                 <button onClick={async() => {
               await html2canvas(document.querySelector("#areaDasCartas"), { allowTaint: true, useCORS: true, logging: true }).then( async canvas => {
                 var dload = document.querySelector("#download")
                 var imagem = await canvas.toDataURL("imagem/png")

                 console.log(imagem)
                 dload.href = imagem;
                 dload.download = `${deckName}`
                 dload.click()
  
                 })
            }}>Salvar Baralho</button>
            <Inputlog placeholder="Nome do Deck" onChange={(dados) => {setDeckName(dados.target.value)}} value={deckName}></Inputlog>
            </div>

              <div className='botaoProcura'>
              {Aparecer ? <button onClick={()=>{setAparecer(false)}}>Fechar</button>:
            <button onClick={()=>{setAparecer(true)}}>Procurar cartas</button>
            }
              </div>
            
            </div>
            <div className='areaDasCartas' id="areaDasCartas">
              {arrayDecks != "" ?
              
              arrayDecks.map((x) => (
                <img crossOrigin="true" onClick={() => {
                  //setArrayDecks()
                     /*arrayDecks
                     .toString()
                     .replaceAll(", ", "_").replaceAll(",", "  ").replaceAll("_", ", ")
                     .replace(x, "  ").split("  "));*/
                     setArrayDecks(arrayDecks.toString().replaceAll(", ", "_").replaceAll(",", "  ").replaceAll("_", ", ").replace(x, "").split("  ").filter(Boolean))
                     
                     //alert(arrayDecks)
                  }}
                 src={props.DBcards.find((y) => (y.name == x)).card}></img>
              ))
            :
            null
            
            }
            </div>
        </DeckBody>
        <AnimatePresence>
        {Aparecer && 
<DivFiltrosDecks>
<motion.div
    className='divExteriorDoMotion'
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 30 }}
    transition={{ duration: 1}}>

<div className='principal'>
<div>
<p>Tipo</p>
<p>Sets</p>
</div>
<div>
<select id="tipos" onClick={(dados) => {setType(dados.target.value)}}>
          {tiposDeCartas.map((x)=>(
           <option selected={x == type} value={x}>{x} </option>
       ))}
</select>

       <select id="sets" onChange={(dados) => {setSets(dados.target.value)}}>
          {Sets.map((x)=>(
           <option selected={x == sets} value={x}>{x} </option>
       ))}
          </select>
          {AparecerBotao ? 
                    <button className="submitar" onClick={async()=>{
                      if(autor != ""){setNewDbCartas(newDbCartas.filter((x) => (x.author == autor )))}
                      var tamanho = name.trim().length

                      if(type != ""){ await setNewDbCartas(newDbCartas.filter((x) => (x.typo == type )))}
                      if(sets != ""){ await setNewDbCartas(newDbCartas.filter((x) => (x.sets == sets )))}
                      if(name != ""){
                        await setNewDbCartas(newDbCartas.filter((x) => (x.name.split("").splice(0, tamanho).toString().replace(/,/g, "") == name.trim()
                        )))
                       }

                      
                      setAparecerBotao(false)
                    }}>Filtrar</button> :
                    <button className="submitar" onClick={async()=>{
                      setName("")
                      setType("")
                      setSets("")
                      setAutor("")
                      setNewDbCartas(props.DBcards.filter((x) => (x.author == props.username)))
                      setAparecerBotao(true)
                      
                    }}>Resetar Filtro</button> 
          }

</div>

</div>

<div className='searchName'>
<Inputlog placeholder="Procure cartas pelo nome delas!" onChange={(dados) => {setName(dados.target.value)}} value={name}></Inputlog>
<Inputlog placeholder="Procure cartas pelo criador delas!" onChange={(dados) => {setAutor(dados.target.value)}} value={autor}></Inputlog>
</div>

<div className='divCartas'>
<div className='repetirCartas'>
                        {newDbCartas.map((x) => (
                          <>
                        <div>
                        <span>{x.name}</span> 
                        <button
                        onClick={() => {
                          setShowModal(true)
                          setZoomCarta(x.card)
                          }}
                        ><img src="/eye.png" alt='visualizar' ></img></button>
                        <button
                        onClick={async() => {
                          
                          if(arrayDecks.length < 10 && arrayDecks.toString() != ""){
                            await setArrayDecks((arrayDecks.toString().replaceAll(", ", "_").replaceAll(",", "  ").replaceAll("_", ", ") + "  "+ x.name).split("  "))
                            console.log(arrayDecks)
                          }
                          if(arrayDecks.toString() == ""){
                            await setArrayDecks((arrayDecks.toString()+ x.name).split("  "))
                            console.log(arrayDecks.toString())
                            
                          }
                          if(arrayDecks.length == 10){alert("Está cheio!")}
                          


                          }}
                        ><img src="/upload.png" alt='upload' ></img></button>

                         </div>
                          </>

                        ))}
                        
                      </div>
  </div>

</motion.div>
</DivFiltrosDecks>
        }
        </AnimatePresence>

        <Modal
             onClose={() => setShowModal(false)}
             show={showModal}
           >
            <img src={zoomCarta}/>
           </Modal>
           <a id="download"></a>
      </>
    )
  
  
}

export async function getServerSideProps(ctx){
  const autorizacao = process.env.AUTHORIZATION
  const bancoCartas = await fetch('https://graphql.datocms.com/', {
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
          text
          keywords
          sets 
          velocidade
          arctype 
          card 
          cardurl
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

    const dbcards = await bancoCartas.json()
    const DBcards = dbcards.data.allGaleries
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
    props: {username, DBcards}
  }
}
