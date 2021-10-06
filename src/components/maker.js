import React, {useEffect } from "react"
import {useInitial} from "../contexts/initialContext" 
import $ from "jquery";
import html2canvas from "html2canvas";
import Maker from "../styles/CardMaker/Maker";
import {useRouter} from 'next/router';
import Input from "../styles/CardMaker/Input"
export function MAKER(){
  //const { user, signInWithGoogle } = useAuth()
    var allKeywords = "";
    const router = useRouter();
var {
  sorc_anormal ,
  semvida ,
  semcusto ,
  displaivar,
  semCC ,
  semdano ,
    tudo,
    reset, 
    digits,
    digitsEffect,
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
var keywords = {
  ":Dest:" : 'Destruir',
  ":Obli:": 'Obliterar',
  ":Temp:": 'Temporaria',
  ":Inst:" : "Instant",
  ":Fas:": "Fast",
  ":Ate:": 'Aterrar', 
  ":Nas:": "Nascer",
  ":Mor:" : "Morrer",
 ":Inv:" : "Invocar",
  ":Voa:": "Voar",
   ":Com:": "Comprar",
  ":Man:" : "Manutenção",
  ":Rus:" : "Rush", 
  ":Sta:" : "Starter",
 ":Que:": "Quest",
 ":Men:" : "Menace", 
":Cel:" : "Celeridade", 
":Prt:": "Pronto"};

var keyimgs = {
 ":v:" : 'virar',
 ":t:": 'time', 
 ":m:": "mineral", 
 ":q:": "quadrado", 
  ":r:": "resistencia", 
":alc:" : "alcance"};
const tiposDeCartas = ["Queen", "Biome", "Creature", "Spell", "Trap", "Terrain", "Construction"];
const setasDeMov = ["Arrow1", "Arrow2", "Arrow3"]

useEffect(() => {tudo()} , [BG, energia, digitsEffect, digits, semcusto])
useEffect(()=>{
reset()
}, [BG])
/*
async function login(){
  if (!user) {
    await signInWithGoogle()
  }
  setTimeout(()=>{router.push('/galeria')}, 3000)
}*/
    return(
<Maker>
        <form onSubmit={(dados)=>{
          dados.preventDefault();
        }}>
          <div className={SELECTS}>
          <p>Tipo de carta</p>
          
          <p hidden={semcusto == true}> Variante</p>
          <select id="tipo" className="tipo" onChange = {(dados) => {
            setBG(dados.target.value)

            console.log(BGATUAL)
          }}>
          {tiposDeCartas.map((x)=>(
             <option value={x}>{x} </option>
         ))}
          </select>
          
            
         
          <select id="variante" hidden={semcusto == true} style={{display: `${displaivar}`}} onChange={(dados) =>{
              setE(dados.target.value)
          }}>
          <option value={"false"}  selected>False</option>
          <option value={"true"}  >True</option>
          </select>
          </div>

          
          <p hidden={semcusto == true || sorc_anormal == true }>CustoM</p>
          
          <Input id="custoM" hidden={semcusto == true|| sorc_anormal == true} name="custoM" type="number" min="0" onChange={(dados) =>{setCustoM(dados.target.value)}} value={custoM}/>

          {// escolher o custo em energia 
          }
          <p hidden={energia == "false"}>CustoE</p>
        
          <Input id="custoE" hidden={energia == "false"} name="custoE" type="number" min="0" onChange={(dados) =>{setCustoE(dados.target.value)}} value={custoE}/>
           
          <p hidden={semCC == true}>Ganho</p>
    
          <Input id="ganho" name="ganho" hidden={semCC == true} type="number" min="0" onChange={(dados) =>{setGanho(dados.target.value)}} value={ganho}/>

          <p>Nome</p>
         
          <Input id="nome" name="nome" onChange={(dados) =>{setNome(dados.target.value)}} value={nome}/>

          <p hidden={!(BG == "Creature"|| BG == "CreatureE")}>Movimentacão</p>
      
          <Input id="mov" hidden={!(BG == "Creature"|| BG == "CreatureE")} name="mov" type="number" min="1" onChange={(dados) =>{setMov(dados.target.value)}} value={mov}/>
          <select hidden={!(BG == "Creature"|| BG == "CreatureE")} onChange = {(dados) => {setMV(dados.target.value)}}>
          {setasDeMov.map((x)=>(
             <option value={x}>{x} </option>
         ))}
          </select>

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
           onClick={
            async()=>{
            await html2canvas(document.querySelector("#CARD")).then( async canvas => {
              //document.body.appendChild(canvas)
              var dload = document.querySelector("#download")
              var image = canvas.toDataURL("image/png")//.replace("image/png", "image/octet-stream");
              //Canvas2Image.saveAsPNG(canvas)
              dload.href = image;
              dload.download = `${nome}`
              dload.click()
               
             // DB.push({type: `${BG}`, name: `${nome}`, custoM: `${custoM}`})        
              })   
            //router.push('/galeria')
            setDisplai("inline")

          }
}>
          Salvar
          </button>
          <button 
        className="galeria"
        onClick={() => {
          router.push('/galeria')
        }}>Ir para a galeria</button>
        </div>
        <a id="download"></a>
        <div className="final" >
        <Input id="carta" name="carta" className="carta" style={{display: `${displai}`}} onChange={(dados) =>{setCarta(dados.target.value)}} value={carta}/>
        <button className="enviar" style={{display: `${displai}`}}
            onClick={(e) => { 
              e.preventDefault()
              //setTimeout(()=>{router.push('/galeria')}, 3000)
              var ambos = desc.split(" - ")
            
              var SETS = ambos[1]
              //console.log(SETS)
              var ARCTYPES = ambos[0]
              //console.log(ARCTYPES)
              
              //var movement = [MV, mov]
              //console.log(movement)
              //para cada keyword, colocá-la dentro de uma string se ela estiver no texto
              $.each(keywords, function(key, link) {
                if(effect.split(" ").includes(key) && !allKeywords.split(" ").includes(link)){
                  if(allKeywords == "") {allKeywords = link} else {
                    allKeywords = allKeywords + " " + link
                  }
                }
             });
             console.log(allKeywords)
             console.log(allKeywords.split(" "))
             


             
             var galeries = {
               typo: BG, 
               keywords: allKeywords, 
               sets: SETS, 
               arctype: ARCTYPES, 
               card: carta, 
               custom: custoM, 
               custoe: custoE, 
               ganho: ganho, 
               mov: mov, 
               direc: MV, 
               dano: dano, 
               vida: vida
             }
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
          }
>Enviar</button>
        </div>

      </Maker>
    )
}
