import React, {useEffect } from "react"
import {useInitial} from "../contexts/initialContext" 
import $, { speed } from "jquery";
import html2canvas from "html2canvas";
import Maker from "../styles/CardMaker/Maker";
import {useRouter} from 'next/router';
import Input from "../styles/CardMaker/Input"

import { useSession, signIn, signOut } from "next-auth/react"

import { upload64} from '../../pages/api/s3'
import { deleteAWSrecord } from "../../pages/api/s3Delete";
import User from "../styles/Login/User";
import { useArray } from "../contexts/arrayContext";
import { useAuth } from "../contexts/AuthContext";

import jwt from "jsonwebtoken"
import nookies, { parseCookies, setCookie, destroyCookie } from "nookies";
import { AnimatePresence, motion } from "framer-motion";
import AvisoAlternar from "../styles/CardMaker/AvisoAlternar";
import UltraUpperBar from "../styles/CardMaker/UltraUpperBar";


export function MAKER(props){

  const AWSlink = process.env.NEXT_PUBLIC_AWS_LINK

    var allKeywords = "";
    const router = useRouter();
    var {
      inicial, superuser, setInicial, setSuperuser
    } = useAuth()
    
var {
  alternarMaker, setAlternarMaker,
  cardId, setCardId,
  fonte, setFonte,
  sorc_anormal ,
  semvida ,
  semcusto ,
  displaivar,
  semCC ,
  semdano ,
    tudo,
    reset,
    resetAfterUpdate,
    permitirReset,
    setPermitirReset, 
    digits,
    digitsEffect,
    setFontsize,
    setLine,
    fontsize,
    SELECTS,
    statusDescy,  
    statusMy, 
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
    effect,
    setEffect, 
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
    displai, 
    setDisplai,

} = useInitial()
var {
KEYY, KEI, tiposDeCartas, Direcoes, ArquétipoEfeitos, CriarVelocidade
} = useArray()
useEffect(() => {tiposDeCartas.shift()}, [])

function botaofonte(){
  if(fonte == false){
    setFonte(true)
  }
  if(fonte == true){
    setFonte(false)
  }
}
var keywords = {
  ":Dest:" : 'Destruir',
  ":Obli:": 'Obliterar',
  ":Temp:": 'Temporaria',
  ":Ime:" : "Imediato",
  ":Rap:": "Rápido",
  ":Ate:": 'Aterrar',
  ":Enx:": "Enxame", 
  ":Nas:": "Nascer",
  ":Res:" : "Ressurgir",
  ":Mor:" : "Morrer",
  ":Mod:": "Modular",
  ":Trp:":"Trap",
  ":Fus:" : "Fusão",
 ":Inv:" : "Invocar",
  ":Voa:": "Voar",
   ":Com:": "Comprar",
  ":Man:" : "Manutenção",
  ":Atr:" : "Atroz", 
  ":Ini:" : "Inicial",
 ":Met:": "Meta",
 ":Ame:" : "Ameaçador", 
":Cel:" : "Celeridade", 
":Prt:": "Pronto", 
":Pur:" : "Puro"};

var keyimgs = {
 ":v:" : 'virar',
 ":t:": 'tempo',
 ":qc:": "quebrar-cristal", 
 ":m:": "mineral", 
 ":q:": "quadrado", 
  ":r:": "resistencia", 
":alc:" : "alcance",
 ":a1:": "arrow1"};

const[saida, setSaida] = React.useState("none")
const [palavraschave, setPalavraschave] = React.useState("none")
//useEffect(() => {botaoFonte()}, [fonte])
useEffect(() => {tudo()} , [BG, energia, digitsEffect, digits, semcusto])
useEffect(()=>{
reset()

}, [BG])
useEffect(()=>{
  setLine(19)
  setFontsize(19)
  }, [])
  useEffect(()=>{
    superuser == process.env.NEXT_PUBLIC_ADMIN?
    setDisplai("inline")
    : null
    }, [])


useEffect(()=>{
  if(fonte == false){
    if(digitsEffect <= 120){
      setLine(20)
      setFontsize(20)
    } else {if(digitsEffect > 180 && digitsEffect <= 240){
      setLine(18)
      setFontsize(18)
    } else {if(digitsEffect > 240 && digitsEffect <= 300){
      setLine(16)
      setFontsize(16)
    } else {if(digitsEffect > 300 && digitsEffect <= 350){
      setLine(15)
      setFontsize(15)
    }
    else {if(digitsEffect > 400){
      setLine(13)
      setFontsize(13)
    }}}
  }}
  }
  if(fonte == true){
return 
  }
}, [digitsEffect])


    return(
      <>

<UltraUpperBar/>

<Maker>
        <form onSubmit={(dados)=>{
          dados.preventDefault();
        }}
        onChange={() => {
          if(permitirReset == false){
            setPermitirReset(true)

          }
        }}>
          <div className={SELECTS}>
          <p>Tipo de carta</p>
          
          <p hidden={semcusto == true}> Variante</p>
          <select id="tipo" className="tipo" onChange = {(dados) => {
            setBG(dados.target.value)
            console.log(BGATUAL)

            
          }}>
          {tiposDeCartas.map((x)=>(
             <option selected={x == BG} value={x}>{x} </option>
         ))}
          </select>
          
            
         
          <select id="variante" className="tipo" hidden={semcusto == true} style={{display: `${displaivar}`}} onChange={(dados) =>{
              setE(dados.target.value)
          }}>
          <option value={"false"}  selected>Off</option>
          <option value={"true"} >On</option>
          </select>
          </div>

          
          <p hidden={semcusto == true || sorc_anormal == true }>CustoM</p>
          <Input id="custoM" hidden={semcusto == true|| sorc_anormal == true} name="custoM" type="number" min="0" onChange={async(dados) =>{setCustoM(dados.target.value)}} value={custoM}/>

          {// escolher o custo em energia
          }
          <p hidden={energia == "false"}>CustoE</p>
          <Input id="custoE" hidden={energia == "false"} name="custoE" type="number" min="0" onChange={(dados) =>{setCustoE(dados.target.value)}} value={custoE}/>
           
          <p hidden={semCC == true}>Ganho</p>
          <Input id="ganho" name="ganho" hidden={semCC == true} type="number" min="0" onChange={(dados) =>{setGanho(dados.target.value)}} value={ganho}/>

          <p>Nome</p>
          <Input id="nome" name="nome" onChange={(dados) =>{setNome(dados.target.value)}} value={nome}/>

          <p hidden={!(BG == "Criatura"|| BG == "CriaturaE")}>Movimentacão</p>
          <Input id="mov" hidden={!(BG == "Criatura"|| BG == "CriaturaE")} name="mov" type="number" min="1" onChange={(dados) =>{setMov(dados.target.value)}} value={mov}/>
<div hidden={!(BG == "Criatura"|| BG == "CriaturaE")} className="direcoes">
          <span >Direções</span>
          <select  className="movimentos" onChange = {(dados) => {setMV(dados.target.value)}}>
          {Direcoes.map((x)=>(
             <option selected={x == MV} value={x}>{x} </option>
         ))}
          </select>
</div>


          <p>Imagem</p>
          <Input id="image" name="image" onChange={(dados) =>{setImage(dados.target.value)}} value={image}/>

          <p>Descricão</p>
          <Input id="descricão" name="descricão" onChange={(dados) =>{setDesc(dados.target.value)}} value={desc}/>
          
          <p>Efeitos</p>
          <textarea id="edit" name="efeitos" onChange={(dados) =>{setEffect(dados.target.value) 
          // o value= effect deixou de ser usado há um tempo no projeto, mas foi mantido caso eu mude de ideia no futuro
                    


          var quebra = {":p:" : "quebra"} 

          var text = document.querySelector("#edit").innerHTML;
          
          /*var imeg = $("[name = imgs]")
          imeg.width(50)
          console.log(imeg)*/
          
          
         $.each(keyimgs, function(key, link) {
          var LINK = "/" + link + ".png" 
          text = text
          .replace(new RegExp(key, 'g'),
           "<img name='imgs' class='"+ link + "'src='" + LINK + "' style='width: " + fontsize + "px; height: " + fontsize + "px'>");
          
      });
         $.each(keywords, function(key, link) {
          text = text
          .replace(new RegExp(key, 'g'), "<span class='" + link + "'>"+link+"</span>");
       });
         $.each(quebra, function(key) {
          text = text
           .replace(new RegExp(key, 'g'), "<p></p>");
        });

         $('#text').html(text);
         
          }} value={effect}></textarea>

<div className="fonte-div">
<button onClick={() => {botaofonte()}}>Fonte:</button>
{fonte == false && <span>Modo Automático</span>}
{fonte == true &&  <input className="fonte" id="fonte" name="fonte" type="number" min="10" onChange={(dados) =>{
            setFontsize(dados.target.value)
             setLine(dados.target.value)}} value={fontsize}/>       
}
<div className="palavraschave">
  <button onClick={() => palavraschave == "none" ? setPalavraschave("inline") : setPalavraschave("none")}>Palavras Chave</button>
  <div style={{display: `${palavraschave}`}} className="gridchaves">
<select /*size={5}*/ >
{
KEI.map((x, index) => (
    <option>{x} = {KEYY[index]}</option>
))}
</select>

  </div>
</div>
</div>
          
          <div className={`${statusDescy}`}>
          <span hidden={semdano == true}>Dano</span>
          
          <span hidden={semvida == true}>Vida</span>
          </div>
          
          <div className={`${statusMy}`}>
          <Input id="dano" hidden={semdano == true} name="dano" type="number" min="0" onChange={(dados) =>{setDano(dados.target.value)}} value={dano}/>
          <Input id="vida" hidden={semvida == true} name="vida" type="number" min="0" onChange={(dados) =>{setVida(dados.target.value)}} value={vida}/>
          </div>
        </form>
        <div className="buttonSave">
        <button 
           className="salvar"
           onClick={async()=>{ 
            
            
            await html2canvas(document.querySelector("#CARD"), { allowTaint: true, useCORS: true, logging: true}).then( async canvas => {
              var dload = document.querySelector("#download")
              var imagem = await canvas.toDataURL("imagem/png") 
              console.log(imagem)
              dload.href = imagem;
              dload.download = `${nome}`
              dload.click()
              })

            

          }                          
}>
          Salvar
          </button>
          <button className="enviar" //style={{ display: `${displai}`}}
            onClick={async(e) => { 
              e.preventDefault()

              if(superuser == process.env.NEXT_PUBLIC_ADMIN){
                var NOme = nome.replace(/õ/g, "o").replace(/ã/g, "a").replace(/ç/g, "c").replace(/é/g, "e").replace(/í/g, "i").replace(/á/g, "a").replace(/ó/g, "o")
                var Uerieli = AWSlink + NOme.split(" ").join("_")// +".jpg"
                
  
          //se estiverem faltando os dados, nem gastar tempo tentando enviar
                if(nome != "" && ARCTYPES != "" && SETS != "" //&& autor != ""
                ){
                  //se for uma nova carta
                  if(alternarMaker == "Criar"){
                    await html2canvas(document.querySelector("#CARD"), { allowTaint: true, useCORS: true, logging: true }).then( async canvas => {
                      var imagem = await canvas.toDataURL("imagem/png")
                      console.log(imagem)
                      await upload64(imagem, NOme)
                      console.log(NOme)       
                      }) 
                  }

                  //se o nome for velho e estiver sendo feito uma edição que não altera o nome original
                  if(alternarMaker == "Editar" && antigoNome == nome) {
                    await html2canvas(document.querySelector("#CARD"), { allowTaint: true, useCORS: true, logging: true }).then( async canvas => {
                      var imagem = await canvas.toDataURL("imagem/png")
                      console.log(imagem)
                      await upload64(imagem, NOme)
                      console.log(NOme)       
                      }) 
                  }

                  //se o nome for velho e estiver sendo feito uma edição que altera o nome original
                  if(alternarMaker == "Editar" && antigoNome != nome) {
                    var imagem = await canvas.toDataURL("imagem/png")
                    await deleteAWSrecord(antigoNome)
                    await upload64(imagem, NOme)

                  }
  }
  else{
        alert("Incompleto")              
  }
  
           
                var ambos = desc.split(" - ")
                image
              
                var SETS = ambos[1]
                //console.log(SETS)
                var ARCTYPES = ambos[0].replace(/õ/g, "o").replace(/ã/g, "a").replace(/ç/g, "c")//.replace(/é/g, "e").replace(/í/g, "i").replace(/á/g, "a").replace(/ó/g, "o")
                //console.log(ARCTYPES)
  
  
              //separar a velocidade do arquétipo de uma carta de efeito
                var Arkétipo = "";
                var Speed = "";
                if(BG == "Efeito"){
  
                ArquétipoEfeitos.map((x) =>(
                  ARCTYPES.split(" ").includes(x.replace(/õ/g, "o").replace(/ã/g, "a").replace(/ç/g, "c"))?
                  Arkétipo = x.replace(/õ/g, "o").replace(/ã/g, "a").replace(/ç/g, "c"):
                null
                ))
                if(ARCTYPES.split(" ").includes("Única")){
                  Arkétipo = Arkétipo + " Única"
                }
                CriarVelocidade.map((x) =>(
                  ARCTYPES.split(" ").includes(x.replace(/õ/g, "o").replace(/ã/g, "a").replace(/ç/g, "c"))?
                  Speed = x.replace(/õ/g, "o").replace(/ã/g, "a").replace(/ç/g, "c"):
                null
                ))
                
                }
                //console.log(Arkétipo)
                //console.log(Speed)
                //para cada keyword, colocá-la dentro de uma string se ela estiver no texto
                $.each(keywords, function(key, link) {
                  if(effect.replaceAll("(", " ").replaceAll(")", " ").replaceAll("[", " ").replaceAll(",", " ").replaceAll("::", ":").split(" ").includes(key) && !allKeywords.split(" ").includes(link)){
                    if(allKeywords == "") {allKeywords = link} else {
                      allKeywords = allKeywords + " " + link 
                    }
                  }
               });
               //console.log(allKeywords.split(" "))
               
              setCarta(Uerieli)
               var autor = superuser//session.user.email.replace(/@gmail.com/, "")
               //console.log(autor)
  if(BG == "Efeito" && cardId == ""){
    var galeries = {
      name: nome,
      author: autor,
      typo: BG, 
      keywords: allKeywords,
      text: effect, 
      sets: SETS,
      velocidade: Speed, 
      arctype: Arkétipo, 
      card: Uerieli,
      cardurl: image, 
      custom: custoM, 
      custoe: custoE, 
      ganho: ganho, 
      mov: mov, 
      direc: MV, 
      dano: dano, 
      vida: vida
    }
  }
  if(BG != "Effeito" && cardId == "") {
    var galeries = {
      name: nome,
      author: autor,
      typo: BG, 
      keywords: allKeywords, 
      text: effect, 
      sets: SETS,
      velocidade: Speed, 
      arctype: ARCTYPES, 
      card: Uerieli, 
      cardurl: image, 
      custom: custoM, 
      custoe: custoE, 
      ganho: ganho, 
      mov: mov, 
      direc: MV, 
      dano: dano, 
      vida: vida
    }
  }
  if(BG == "Efeito" && cardId != ""){
    var galeries = {
      cardId: cardId,
      name: nome,
      author: autor,
      typo: BG, 
      keywords: allKeywords,
      text: effect, 
      sets: SETS,
      velocidade: Speed, 
      arctype: Arkétipo, 
      card: Uerieli,
      cardurl: image, 
      custom: custoM, 
      custoe: custoE, 
      ganho: ganho, 
      mov: mov, 
      direc: MV, 
      dano: dano, 
      vida: vida
    }
  }
  if(BG != "Effeito" && cardId != "") {
    var galeries = {
      cardId: cardId,
      name: nome,
      author: autor,
      typo: BG, 
      keywords: allKeywords, 
      text: effect, 
      sets: SETS,
      velocidade: Speed, 
      arctype: ARCTYPES, 
      card: Uerieli, 
      cardurl: image, 
      custom: custoM, 
      custoe: custoE, 
      ganho: ganho, 
      mov: mov, 
      direc: MV, 
      dano: dano, 
      vida: vida
    }
  }
  
  if(alternarMaker == "Criar"){
    fetch('/api/galeries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(galeries)
    })
    .then(async (response) => {
      const dados = await response.json();
      console.log(dados.registroCriado);
    })
    }
  
  if(alternarMaker == "Editar"){
    fetch('/api/updateCard', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(galeries)
  })
  .then(async (response) => {
    const dados = await response.json();
    console.log(dados.cartaEditada);
  })
  }}
 
              }

              
          }
>Enviar</button>
        </div>
        <a id="download"></a>

      </Maker>
      </>
    )
}

export async function getInitialProps(ctx){
  //const apiClient = getAPIClient(ctx);
  const { ['myuser.token']: token } = parseCookies(ctx)

  const {username} = jwt.decode(token);
  
  
  return {
    props: {username}
  }
}
