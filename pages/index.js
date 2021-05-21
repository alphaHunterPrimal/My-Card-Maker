import React from 'react';
import {useRouter} from 'next/router'
import Head from 'next/head';
import $, { ready } from "jquery";
import html2canvas from "html2canvas"
//import domtoimage from 'dom-to-image';
//import {saveAs} from 'file-saver';
//import Canvas2Image from "canvas2image"
import Content from '../src/styles/CardMaker/Content';
import Input from '../src/styles/CardMaker/Input';
import Card from '../src/styles/CardMaker/Card';
import Maker from '../src/styles/CardMaker/Maker';
import Top from '../src/styles/CardMaker/Top';
import Main from '../src/styles/CardMaker/Main';
import Status from '../src/styles/CardMaker/Status';
import ImgBg from '../src/styles/CardMaker/ImgBg';
import ImgMov from '../src/styles/CardMaker/ImgMov';
//import DB from '../db';
import createCard from '../src/database/createCard';
//const Database = require("../src/database/db");
//import mv from "mv";
var allKeywords = "";
export default function Home() {
  const router = useRouter();
  const [custoM, setCustoM] = React.useState('0');
  const [custoE, setCustoE] = React.useState('0');
  const [ganho, setGanho] = React.useState('0');
  
  const [nome, setNome] = React.useState('');
  const [mov, setMov] = React.useState('1');
  const [image, setImage] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [effect, setEffect] = React.useState('');
  const [dano, setDano] = React.useState('0');
  const [vida, setVida] = React.useState('0');
  const [BG, setBG] = React.useState('Queen');
  var BGATUAL = "/" + BG + ".png";
  const [MV, setMV] = React.useState('arrow1');
  var MVATUAL = "/" + MV + ".png";

  const [carta, setCarta] = React.useState('');
  const [displai, setDisplai] = React.useState("none")
  const tiposDeCartas = ["Queen", "Biome", "Creature", "Spell", "Trap", "Terrain", "Construction"];
  const setasDeMov = ["Arrow1", "Arrow2", "Arrow3"]
  
  var digits = nome.length;
  var digitsEffect = effect.length;
  var fontsize;
  var NOME;
  var CUSTO;
  var CUSTOE;
  var IMG;
  var EFFECT;
  var SELECTS;
  

  var statusDescy;
  var statusMy;

  const[energia, setE] = React.useState("false")
   
   //selecionar o tipo de carta de acordo com ele estar ou não com energia

   if(energia == "true"){
     if (BG == "Creature") {
       setBG("CreatureE")
     }
     if(BG == "Spell") {
       setBG("SpellE")
     }
     if(BG == "Trap") {
       setBG("TrapE")
     }
     if(BG == "Construction") {
       setBG("ConstructionE")
     }
     if(BG == "Terrain") {
       setBG("TerrainE")
     }
   } else {
     if(energia == "false"){
      if (BG == "CreatureE") {
        setBG("Creature")
      }
      if(BG == "SpellE") {
        setBG("Spell")
      }
      if(BG == "TrapE") {
        setBG("Trap")
      }
      if(BG == "ConstructionE" ) {
        setBG("Construction")
      }
      if(BG == "TerrainE" ) {
        setBG("Terrain")
      }
   }
   }
   
  var keywords = {
    ":Dest:" : 'Destruir',
    ":Obli:": 'Obliterar',
    ":Temp:": 'Temporaria',
    ":Ate:": 'Aterrar', 
  ":Nas:": "Nascer",
   ":Inv:" : "Invocar",
    ":Voa:": "Voar",
     ":Com:": "Comprar",
    ":Man:" : "Manutenção",
    ":Rus:" : "Rush", 
    ":Sta:" : "Starter"};

  var keyimgs = {
   ":v:" : 'virar',
   ":t:": 'time', 
   ":m:": "mineral", 
   ":q:": "quadrado", 
    ":r:": "resistencia", 
  ":alc:" : "alcance"};

  if(digitsEffect <= 120){
    fontsize = 19;
  } else {if(digitsEffect > 120 && digitsEffect <= 180){
    fontsize = 17
  } else {if(digitsEffect > 180 && digitsEffect <= 240){
    fontsize = 16
  } else {if(digitsEffect > 240 && digitsEffect <= 300){
    fontsize = 15
  }
  else {if(digitsEffect > 300){
    fontsize = 14
  }}}
}}

  if(BG == "Spell"||BG == "Trap"||BG == "Terrain"||BG == "Biome"){
    EFFECT = "effectTrue"
  } else { EFFECT = "effect"};


  if(BG == "Queen"||BG == "Biome"){
    IMG = "imgQueen"
  } else {IMG = "img1"};


  if(BG == "Spell"||BG == "Trap"||BG == "Terrain") {
    CUSTO = "custoCentral"
  } else {CUSTO = "custoM1"}

  if(BG == "SpellE"||BG == "TrapE"||BG == "TerrainE"){
    var sorc_anormal = true;
    CUSTOE = "custoCentral"
  } else {if(BG == "Spell"||BG == "Trap"||BG == "Terrain"){
    sorc_anormal = false;
  }}

  if(BG == "CreatureE" || BG == "ConstructionE"){
    CUSTO = "custoM2"
    CUSTOE = "custoE"
  }


  if (BG == "Queen" && digits <= 25 || BG == "Biome" && digits <= 25){
    NOME = "nomeQueen"
  } else{
    if (BG == "Queen" && digits > 25 || BG == "Biome" && digits > 25){
      NOME = "nomeQueen2"
    } else{    if (digits < 25) {
      NOME = "nome1"
    };
      if (digits >= 25){
      NOME = "nome2"
    }}
};
if(semcusto == true){
  SELECTS = "selects1"
} else {
  SELECTS = "selects2"
}


  if(BG == "Construction"){
    statusDescy = "statusConstruct"
    statusMy = "statusMconstruct"
  } else 
  { if(BG == "ConstructionE"){
    statusDescy = "statusConstruct"
  } else {
     statusDescy = "statusDesc"
     statusMy = "statusM"
}}


if(BG == "Spell"||BG == "SpellE"||BG == "Trap"||BG == "TrapE"||BG == "Terrain"||BG == "TerrainE"||BG == "Biome"){
  var semvida = true
} else {semvida = false}

if(BG == "Queen" ||BG == "Biome"){
  var semcusto = true
  var displaivar = "none"
} else {
  semcusto = false
displaivar = "block"}

if(!(BG == "Creature" ||BG == "Construction" || BG == "CreatureE" ||BG == "ConstructionE")){
  var semCC = true
} else {semCC = false}

if(!(BG == "Creature" ||BG == "CreatureE" || BG == "Queen")){
  var semdano = true
} else {semdano = false}




  return (
    <>
    <Head>
      <title>Meu criador de cartas</title>

    </Head>
 <Content>
      <Card id="CARD" >
        <ImgBg  src={`${BGATUAL}`} alt="Bgatual"></ImgBg>
        <Top >
        <span className={CUSTO} hidden={semcusto == true || sorc_anormal == true}>{`${custoM}`}</span>
        {//o span na carta com o valor do custoM em energia
        }
        
        <span className={CUSTOE} hidden={semcusto === true || energia === "false"}>{`${custoE}`}</span>
        
        <span className="ganho" hidden={semCC == true}>{`${ganho}`}</span>
        <span className={NOME}>{`${nome}`}</span>
        <span className="mov" hidden={!(BG == "Creature" || BG == "CreatureE")} style={{ fontWeight: "600", fontFamily: "'Oi', cursive", fontSize: "20px" }}>{`${mov}`}</span>
        </Top>
        <ImgMov src={`${MVATUAL}`} alt="MVatual" hidden={!(BG == "Creature" || BG == "CreatureE")}></ImgMov>
        <Main>
        <img className={IMG} src={`${image}`} alt="image"></img>
        <p className="desc">{`${desc}`}</p>
        <div id="text" className={EFFECT} style={{ fontSize: `${fontsize}px`}}></div>
        </Main>
        <Status>
        <Status.dano hidden={semdano == true}>{`${dano}`}</Status.dano>
        <Status.vida hidden={semvida == true}>{`${vida}`}</Status.vida>
        </Status>
      </Card>
      <Maker>
        <form onSubmit={(dados)=>{
          dados.preventDefault();
        }}>
          <div className={SELECTS}>
          <label for="tipo">Tipo de carta</label>
          <label for="variante" hidden={semcusto == true}> Variante </label>
          <select id="tipo" className="tipo" onChange = {(dados) => {
            setBG(dados.target.value)
            /*var cardType = document.getElementById("tipo").value;
            Bgatual = "Bg." + cardType;*/
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

          

          <label for="custoM" hidden={semcusto == true || sorc_anormal == true }>CustoM</label>
          <Input id="custoM" hidden={semcusto == true|| sorc_anormal == true} name="custoM" type="number" min="0" onChange={(dados) =>{setCustoM(dados.target.value)}} value={custoM}/>

          {// escolher o custo em energia 
          }
          <label for="custoE" hidden={energia == "false"}>CustoE</label>
          <Input id="custoE" hidden={energia == "false"} name="custoE" type="number" min="0" onChange={(dados) =>{setCustoE(dados.target.value)}} value={custoE}/>
           

          <label for="ganho" hidden={semCC == true}>Ganho</label>
          <Input id="ganho" name="ganho" hidden={semCC == true} type="number" min="0" onChange={(dados) =>{setGanho(dados.target.value)}} value={ganho}/>

          <label for="nome">Nome</label>
          <Input id="nome" name="nome" onChange={(dados) =>{setNome(dados.target.value)}} value={nome}/>

          <label for="mov" hidden={!(BG == "Creature"|| BG == "CreatureE")}>Movimentacão</label>
          <Input id="mov" hidden={!(BG == "Creature"|| BG == "CreatureE")} name="mov" type="number" min="1" onChange={(dados) =>{setMov(dados.target.value)}} value={mov}/>
          <select hidden={!(BG == "Creature"|| BG == "CreatureE")} onChange = {(dados) => {setMV(dados.target.value)}}>
          {setasDeMov.map((x)=>(
             <option value={x}>{x} </option>
         ))}
          </select>

          <p>Imagem</p>
          <Input id="image" name="image" onChange={(dados) =>{setImage(dados.target.value)}} value={image}/>

          <label for="descricão">Descricão</label>
          <Input id="descricão" name="descricão" onChange={(dados) =>{setDesc(dados.target.value)}} value={desc}/>
          
          <p>Efeitos</p>
          <textarea id="edit" name="efeitos" onChange={(dados) =>{setEffect(dados.target.value) 
          // o value= effect deixou de ser usado há um tempo no projeto, mas foi mantido caso eu mude de ideia no futuro
                    


          var quebra = {":p:" : "quebra"} 

          var text = document.querySelector("#edit").innerHTML;
          
         $.each(keyimgs, function(key, link) {
          var LINK = "/" + link + ".png" 
          text = text
          .replace(new RegExp(key, 'g'), "<img class='"+ link + "'src='" + LINK + "'>");
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
           onClick={async()=>{
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
            onClick={async ()=>{
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
           /*
           async function Salvar() {
             const insertedCards = {
              type: BG,
              name: nome,
              card: carta,
              sets: SETS,
              arctype: ARCTYPES,
              custoM: custoM,
              ganho: ganho,
              mov: mov,
              MV: MV, 
              vida: vida,
              dano: dano
             }
             try{
              const db = await Database;
              await createCard(db, {cartas})
             }
             catch (error) {
              console.log(error)
            }

           }*/

            /*console.log(allKeywords)
            await DB.push({
            type: `${BG}`,
            KEYWORDS: `${allKeywords}`,
            name: `${nome}`,
            card: `${carta}`,
            sets: `${SETS}`,
            arctype: `${ARCTYPES}`,
            custoM: `${custoM}`,
            ganho: `${ganho}`,
            mov: `${mov}`,
            vida: `${vida}`,
            dano: `${dano}`})      
            console.log(DB)*/    
            //setTimeout(()=>{router.push('/galeria')}, 3000)
          }
}>Enviar</button>
        </div>

      </Maker>
    </Content>
    </>
  )
}
