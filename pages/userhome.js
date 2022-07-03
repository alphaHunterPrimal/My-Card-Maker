import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { useAuth } from '../src/contexts/AuthContext';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import jwt from "jsonwebtoken"
import {useRouter} from 'next/router';
import User from '../src/styles/Login/User';
import Voltar from '../src/styles/Galery/voltar';
import BodyProfile from '../src/styles/UserHome/BodyProfile';
import Input from '../src/styles/CardMaker/Input';
import InputPassword from '../src/styles/UserHome/InputPassword';
import { motion, AnimatePresence } from "framer-motion"
import Modal from '../src/components/modal';
import { useInitial } from '../src/contexts/initialContext';
import Inputlog from '../src/styles/Login/Inputlog';
import { useArray } from '../src/contexts/arrayContext';
import UltraUpperBar from '../src/styles/CardMaker/UltraUpperBar';


export default function UserHome(props){
    const router = useRouter()
    var {
      alternarMaker, setAlternarMaker,
      cardId, setCardId,
      permitirReset, 
      setPermitirReset,
      resetAfterUpdate,
      setEffect,
      effect,

        custoM,
        setCustoM, 
        custoE,
        setCustoE,
        ganho,
        setGanho, 
        nome,
        setNome, 
        antigoNome,
        setAntigoNome,
        mov,
        setMov,
        image,
        setImage, 
        desc,
        setDesc, 
        dano,
        setDano, 
        vida,
        setVida,
        BG,
        setBG, 
        BGATUAL,
        MV,
        setMV,
        MVATUAL,
        energia, 
        setE,
        carta,
        setCarta, 
    
    } = useInitial()
    var {
        superuser, setSuperuser,
      } = useAuth()
    var {tiposDeCartas, Sets} = useArray()
      const[saida, setSaida] = React.useState("none")
      const [newName,setNewName] = React.useState("")
      const [oldPassword, setOldPassword] = React.useState("")
      const [newPassword, setNewPassword] = React.useState("")
      const [tipoSenhaVelha, setTipoSenhaVelha] = React.useState("password")
      const [tipoSenhaNova, setTipoSenhaNova] = React.useState("password")
      const [newDbUsuarios, setNewDbUsuarios] = React.useState(props.DBuser.filter((x) => (x.usuario == props.username))//[0]//.usuario
      )
      const [newDbCartas, setNewDbCartas] = React.useState(props.DBcards.filter((x) => (x.author == props.username))
      )
      const [userId, setUserId] = React.useState(newDbUsuarios[0].id)
      
      const [showName, setShowName] = React.useState(false)
      const [showPassword, setShowPassword] = React.useState(false)
      const [showCards, setShowCards] = React.useState(false)

      const [showModal, setShowModal] = React.useState(false);
      
      const [zoomCarta, setZoomCarta] = React.useState("");

      const [type, setType] = React.useState('');
      const [sets, setSets] = React.useState('');
      const [Aparecer, setAparecer] = React.useState(false);
      const [name, setName] = React.useState('');

      

    return(
        <>
        <Head>
            <title>Perfil</title>
        </Head>
        <UltraUpperBar/>

        <BodyProfile>
            <div className='profileMain'>
                <div className='changeProfile'>

                   <div className='space-center'>
                     <p>Mudar nome</p>
                     <button onClick={() => {
                     if(showName == false){
                      setShowName(true)
                    }
                    if(showName == true){
                      setShowName(false)
                    }
                     }}
>
                     <img src='/arrow_down.png'></img>
                     </button>
                     
                    </div>
                    <AnimatePresence>
                      {showName && 
                      <>
                      <motion.div className='flex-name'
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2}}>
                    
                    <InputPassword maxLength={15} placeholder={"Novo Nome"} onChange={(dados) => {setNewName(dados.target.value)}} value={newName}></InputPassword>
                    
                    <button onClick={async() => {
                      if(props.DBuser.filter((x) => (x.usuario == newName)) != ""){
                        alert("Esse nome está indisponível!")
                        
                      } else if(newName.trim() != "" && newName.length >= 4 && newName.length <= 15 ){
                        const UPDATE_NAME = {
                          userId: userId,
                          userName: newName,
                        }

                        fetch('/api/updateName', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(UPDATE_NAME)
                        })
                        .then(async (res) => {
                          const dados = await res.json();
                          console.log(dados.nomeEditado);
                        }) 

                        destroyCookie(null, "myuser.token")
                      
                        const tokenjwt = jwt.sign({username: newName.trim()}, "my-secret", {expiresIn: 3600})
                        setCookie(null, 'myuser.token', tokenjwt, {
                          maxAge: 60 * 60 * 1, // 1 hour
                        })

                        router.push("/userhome")



                        } else {alert("Seu nome de usuário deve ter de 4 a 15 caracteres")}
                        
                      
                    }}>Salvar</button>
                    </motion.div>
                      </>

                      }
                    
                    </AnimatePresence>

                    <div className='space-center'>
                    <p>Mudar senha</p>
                    <button onClick={() => {
                        if(showPassword == false){
                          setShowPassword(true)
                        }
                        if(showPassword == true){
                          setShowPassword(false)
                        }

                    }}>
                     <img src='/arrow_down.png'></img>
                     </button>
                    </div>
                    <AnimatePresence>
                      {showPassword &&
                      <>
                      <motion.div className='changeOldPassword'
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2}}
                      >
                        <div>
                        <InputPassword maxLength={10} placeholder={"Senha antiga"} type={tipoSenhaVelha} onChange={(dados) => {setOldPassword(dados.target.value)}} value={oldPassword}></InputPassword>
                    <button className='eyeLooking'
                    onClick={() => {
                        if(tipoSenhaVelha == "password"){
                          setTipoSenhaVelha("text")
                        }
                        if(tipoSenhaVelha == "text"){
                          setTipoSenhaVelha("password")
                        }
                        
                        }}>
                    <img src="/eye.png"></img>
                    </button>
                        </div>
                    
                    </motion.div>

                    <motion.div className='changeNewPassword' 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.4}}>
                        <div>
                        <InputPassword maxLength={10} placeholder={"Senha atual"}type={tipoSenhaNova} onChange={(dados) => {setNewPassword(dados.target.value)}} value={newPassword}></InputPassword>
                    <button className='eyeLooking'
                    onClick={() => {
                        if(tipoSenhaNova == "password"){
                          setTipoSenhaNova("text")
                        }
                        if(tipoSenhaNova == "text"){
                          setTipoSenhaNova("password")
                        }
                        
                        }}>
                    <img src="/eye.png" ></img>
                    </button>
                        </div>

                    <button onClick={async() => {
                      if(oldPassword == newDbUsuarios[0].senha ){
                        if(newPassword.trim() != "" && newPassword.length >= 4 && newPassword.length <= 10){
                          const UPDATE_PASSWORD = {
                            userId: userId,
                            userPassword: newPassword,
                          }
  
                          fetch('/api/updatePassword', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(UPDATE_PASSWORD)
                          })
                          .then(async (res) => {
                            const dados = await res.json();
                            console.log(dados.senhaEditada);
                          }) 
  
  
                          router.push("/userhome")


                        } else {alert("Sua senha deve ter de 4 a 10 caracteres")}
                        
                      } else {
                        alert("A senha anterior não coincide!")
                      }



                    }}>Salvar</button>
                    </motion.div>
                      
                      </>

                      }

                    </AnimatePresence>
                    <div className='space-center'>
                    <p> ________________________________________________________</p>
                    </div >

                </div >
                {superuser == process.env.NEXT_PUBLIC_ADMIN && 
                                <div className='changeCards'>
                                <div className='centralize'>
                                    <p>Cartas Criadas</p>
                                     <button onClick={() => {
                                     if(showCards == false){
                                      setShowCards(true)
                                    }
                                    if(showCards == true){
                                      setShowCards(false)
                                    }
                                     }}
                >
                                     <img src='/arrow_down.png'></img>
                                     </button>
                                    </div>
                                <AnimatePresence>
                                      {showCards &&
                                      <>
                                      <motion.div
                                      className='divProcuraCartas'
                                      initial={{ opacity: 0, y: -5 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -5 }}
                                      transition={{ duration: 0.2}}
                                      
                                      >
                                      <Inputlog placeholder={"Nome da carta"} onChange={(dados) => {setName(dados.target.value)}} value={name}></Inputlog>
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
                                      <button hidden={Aparecer == true} className='aparecer' onClick={async()=>{
                                        var tamanho = name.trim().length
                                        if(name != ""){
                                             setNewDbCartas(newDbCartas.filter((x) => (x.name.split("").splice(0, tamanho).toString().replace(/,/g, "") == name.trim()
                                             )))
                                            
                                            }
                                        if(type != ""){setNewDbCartas(newDbCartas.filter((x) => (x.typo == type )))}
                                        if(sets != ""){setNewDbCartas(newDbCartas.filter((x) => (x.sets == sets )))}
                                        setAparecer(true)
                                      }}>Filtrar</button>
                
                                        <button hidden={Aparecer == false} className='aparecer' onClick={async()=>{
                                        setName("")
                                        setType("")
                                        setSets("")
                                        setNewDbCartas(props.DBcards.filter((x) => (x.author == props.username)))
                                        setAparecer(false)
                                        
                                      }}>Resetar Filtro</button>  
                                      </motion.div>
                                      <motion.div
                                      className='divCartas'
                                      initial={{ opacity: 0, y: -5 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -5 }}
                                      transition={{ duration: 0.4}}>
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
                                        <button onClick={async() => {
                                        
                                        var confirmacao = prompt("Confirme o nome da carta a ser destruida")
                
                                        if(confirmacao == x.name){
                                          const Delete_Card = {
                                            cardId: x.id
                                          }
                  
                                          fetch('/api/deleteCard', {
                                            method: 'POST',
                                            headers: {
                                              'Content-Type': 'application/json',
                                            },
                                            body: JSON.stringify(Delete_Card)
                                          })
                                          .then(async (res) => {
                                            const dados = await res.json();
                                            console.log(dados.cartaDeletada);
                                          }) 
                                          alert("Carta deletada com sucesso!")
                  
                  
                                          router.push("/userhome")
                
                                        } else {alert("Nome digitado errado")}
                                    
                
                                        }}><img src="/trash.png" alt='deletar'></img></button>
                                        <button onClick={async() => {
                                          resetAfterUpdate()
                                          setNome(x.name)
                                          setAntigoNome(x.name)
                                          setBG(x.typo)
                                          setEffect(x.text)
                                          setImage(x.cardurl)
                                          setCardId(x.id)
                
                
                                          setCustoM(x.custom)
                                          setCustoE(x.custoe)
                                          setGanho(x.ganho)
                                          setMov(x.mov)
                                          setMV(x.direc)
                                          setDano(x.dano)
                                          setVida(x.vida)
                                          setPermitirReset(false)
                                          if(x.typo == "Efeito"){
                                            setDesc(x.arctype + x.velocidade + " - " + x.sets)
                                          } else {
                                            setDesc(x.arctype + " - " + x.sets)
                                          }
                                          setAlternarMaker("Editar")
                                          
                                          setTimeout(5000, router.push("/"))
                                          
                                          
                                          //não adianta setar palavras chaves também, porque elas depedem do texto e ele n é carregado
                                          //keywords: allKeywords
                
                                          //adicionar algumas opções de useState no reset() para limpar quando sair e voltar
                
                                          //a carta não será setada, já que ela será resetada
                                          //card: Uerieli 
                                          
                
                
                
                
                                        }}><img src="/change.png" alt='alterar'></img></button>
                                         </div>
                                          </>
                
                                        ))}
                                        
                                      </div>
                
                                      
                                      </motion.div>
                                      </>
                                      }
                                    </AnimatePresence>
                
                                </div>
                }

            </div>
        </BodyProfile>

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
  const bancoUsuarios = await fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': autorizacao,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ "query": `query {
        allLogins {
          id
          usuario
          email
          senha
        }
      }` })
    })
    const dbuser = await bancoUsuarios.json()
    const DBuser = dbuser.data.allLogins

    const bancoCartas = await fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': autorizacao,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ "query": `query {
        allGaleries(first: 100) {
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
          DBuser,
           DBcards,
            username
      }
  }
}
  