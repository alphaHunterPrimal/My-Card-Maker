import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { useAuth } from '../src/contexts/AuthContext';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import jwt from "jsonwebtoken"
import {useRouter} from 'next/router';
import User from '../src/styles/Login/User';
import DivUpperBar from '../src/styles/UserHome/DivUpperBar';
import Voltar from '../src/styles/Galery/voltar';
import BodyProfile from '../src/styles/UserHome/BodyProfile';
import Input from '../src/styles/CardMaker/Input';
import InputPassword from '../src/styles/UserHome/InputPassword';
import { motion, AnimatePresence } from "framer-motion"
import Modal from '../src/components/modal';


export default function UserHome(props){
    const router = useRouter()
    var {
        superuser, setSuperuser,// userId, setUserId, userName, setUserName
      } = useAuth()
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
      //const [userName, setUserName] = React.useState(newDbUsuarios[0].usuario)
      const [showName, setShowName] = React.useState(false)
      const [showPassword, setShowPassword] = React.useState(false)
      const [showCards, setShowCards] = React.useState(false)

      const [showModal, setShowModal] = React.useState(false);
      //const [showReset, setShowReset] = React.useState(true);
      const [zoomCarta, setZoomCarta] = React.useState("");

      

    return(
        <>
        <Head>
            <title>Perfil</title>
        </Head>
        
        <DivUpperBar>
        <header>
        <Voltar onClick={() => {router.back()}}>
            <img src="/arrow-back.svg"></img>
        </Voltar>
        <User>
      <button onClick={() => saida == "none"? setSaida("visible") : setSaida("none")}>Logado como "{props.username}"</button>
      <AnimatePresence
>
        { saida == "visible" ?
      <motion.button
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2}}
      /*style={{display: `${saida}`}}*/ onClick={() => {destroyCookie(null, "myuser.token")
      setSuperuser("")
       router.push('/login')}}>Sair</motion.button>
       : null }

      </AnimatePresence>

      </User> 
      </header>
        </DivUpperBar>
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
                      className='divCartas'
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2}}>
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
                        <button><img src="/trash.png" alt='deletar'></img></button>
                        <button><img src="/change.png" alt='alterar'></img></button>
                         </div>
                          </>

                        ))}
                        
                      </div>

                      
                      </motion.div>
                      </>
                      }
                    </AnimatePresence>

                </div>
                
                
                


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
  