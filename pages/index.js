import React from 'react';
import Head from 'next/head';
import $, { ready } from "jquery";
import html2canvas from "html2canvas"
import domtoimage from 'dom-to-image';
import {saveAs} from 'file-saver';
//import Canvas2Image from "canvas2image"

import Content from '../src/components/Content/Content';
import Input from '../src/components/Input/Input';
import Card from '../src/components/Card/Card';
import Maker from '../src/components/Maker/Maker';
import Top from '../src/components/Top/Top';
import Main from '../src/components/Main/Main';
import Status from '../src/components/Status/Status';
//import Img from '../src/components/Img/Img';
import ImgBg from '../src/components/ImgBg/ImgBg';
import ImgMov from '../src/components/ImgMov/ImgMov';

export default function Home() {
  const [custo, setCusto] = React.useState('0');
  const [ganho, setGanho] = React.useState('0');
  const [nome, setNome] = React.useState('');
  const [mov, setMov] = React.useState('1');
  const [image, setImage] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [effect, setEffect] = React.useState('');
  const [dano, setDano] = React.useState('0');
  const [vida, setVida] = React.useState('0');
  const [BG, setBG] = React.useState('queen');
  var BGATUAL = "/" + BG + ".png";
  const [MV, setMV] = React.useState('arrow1');
  var MVATUAL = "/" + MV + ".png";

  var digits = nome.length;
  var digitsEffect = effect.length;
  var fontsize;
  var NOME;
  var CUSTO;
  var IMG;
  var EFFECT;
  if(digitsEffect <= 120){
    fontsize = 19;
  } else {if(digitsEffect > 120 && digitsEffect <= 180){
    fontsize = 17
  } else {if(digitsEffect > 180 && digitsEffect <= 240){
    fontsize = 16
  } else {if(digitsEffect > 240){
    fontsize = 15
  }}}}

  if(BG == "spell"||BG == "trap"||BG == "terrain"){
    EFFECT = "effectTrue"
  } else { EFFECT = "effect"};
  if(BG == "queen"){
    IMG = "imgQueen"
  } else {IMG = "img1"};
  if(BG == "spell"||BG == "trap"||BG == "terrain") {
    CUSTO = "custo2"
  } else {CUSTO = "custo1"}
  if (BG == "queen" && digits <= 25){
    NOME = "nomeQueen"
  } else{
    if (BG == "queen" && digits > 25){
      NOME = "nomeQueen2"
    } else{    if (digits < 25) {
      NOME = "nome1"
    };
      if (digits >= 25){
      NOME = "nome2"
    }}
};
 /*const Canvas2Image = (async () =>{ await import ("canvas2image")
 })*/ 
 /*async() => {await React.useEffect(() => {
  async () => {
    const Canvas2Image = (await import("canvas2image")).default();
      }
    },[])}*/
  return (
    <>
    <Head>
      <title>Meu criador de cartas</title>

    </Head>
 <Content>
        <Card id="CARD" >
        <ImgBg  src={`${BGATUAL}`} alt="Bgatual"></ImgBg>
        <Top >
        <span className={CUSTO} hidden={(BG == "queen")}>{`${custo}`}</span>
        <span className="ganho" hidden={!(BG == "creature" ||BG == "construction")}>{`${ganho}`}</span>
        <span className={NOME}>{`${nome}`}</span>
        <span className="mov" hidden={!(BG == "creature")} style={{ fontWeight: "600", fontFamily: "'Oi', cursive", fontSize: "20px" }}>{`${mov}`}</span>
        </Top>
        <ImgMov src={`${MVATUAL}`} alt="MVatual" hidden={!(BG == "creature")}></ImgMov>
        <Main>
        <img className={IMG} src={`${image}`} alt="image"></img>
        <p className="desc">{`${desc}`}</p>
        <div id="text" className={EFFECT} style={{ fontSize: `${fontsize}px`}}></div>
        </Main>
        <Status>
        <Status.dano hidden={BG == "spell"||BG == "trap"||BG == "terrain"}>{`${dano}`}</Status.dano>
        <Status.vida hidden={BG == "spell"||BG == "trap"||BG == "terrain"}>{`${vida}`}</Status.vida>
        </Status>
      </Card>
      <Maker>
        <form onSubmit={(dados)=>{
          dados.preventDefault();
        }}>
          <label for="tipo">Tipo de carta</label>
          <select id="tipo" className="tipo" onChange = {(dados) => {
            setBG(dados.target.value)
            /*var cardType = document.getElementById("tipo").value;
            Bgatual = "Bg." + cardType;*/
            console.log(BGATUAL)
          }}>
            <option value="queen">Queen</option>
            <option value="creature">Creature</option>
            <option value="spell">Spell</option>
            <option value="trap">Trap</option>
            <option value="terrain">Terrain</option>
            <option value="construction">Construction</option>
          </select>

          <label for="custo" hidden={(BG == "queen")}>Custo</label>
          <Input id="custo" hidden={(BG == "queen")} name="custo" type="number" min="0" onChange={(dados) =>{setCusto(dados.target.value)}} value={custo}/>

          <label for="ganho" hidden={!(BG == "creature" ||BG == "construction")}>Ganho</label>
          <Input id="ganho" name="ganho" hidden={!(BG == "creature" ||BG == "construction")} type="number" min="0" onChange={(dados) =>{setGanho(dados.target.value)}} value={ganho}/>

          <label for="nome">Nome</label>
          <Input id="nome" name="nome" onChange={(dados) =>{setNome(dados.target.value)}} value={nome}/>

          <label for="mov" hidden={!(BG == "creature")}>Movimentacão</label>
          <Input id="mov" hidden={!(BG == "creature")} name="mov" type="number" min="1" onChange={(dados) =>{setMov(dados.target.value)}} value={mov}/>
          <select hidden={!(BG == "creature")} onChange = {(dados) => {setMV(dados.target.value)}}>
            <option value="arrow1">Arrow1</option>
            <option value="arrow2">Arrow2</option>
            <option value="arrow3">Arrow3</option>
          </select>

          <p>Imagem</p>
          <Input id="image" name="image" onChange={(dados) =>{setImage(dados.target.value)}} value={image}/>

          <label for="descricão">Descricão</label>
          <Input id="descricão" name="descricão" onChange={(dados) =>{setDesc(dados.target.value)}} value={desc}/>
          
          <p hidden={false} >Efeitos</p>
          <textarea id="edit" name="efeitos" hidden={false}  onChange={(dados) =>{setEffect(dados.target.value) 
          // o value= effect deixou de ser usado há um tempo no projeto, mas foi mantido caso eu mude de ideia no futuro
                    
          var keywords = {
            ":Dest:" : 'Destruir',
            ":Obli:": 'Obliterar',
            ":Temp:": 'Temporaria',
            ":Ate:": 'Aterrar'};

          var keyimgs = {
          ":v:" : 'virar',
           ":t:": 'time'};

          var quebra = {":q:" : "quebra"} 

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
          <div className="statusDesc">
          <span hidden={BG == "spell"||BG == "trap"||BG == "terrain"}>Dano</span>
          
          <span hidden={BG == "spell"||BG == "trap"||BG == "terrain"}>Vida</span>
          
          </div>
          <div className="statusM">
          <Input id="dano" hidden={BG == "spell"||BG == "trap"||BG == "terrain"} name="dano" type="number" min="0" onChange={(dados) =>{setDano(dados.target.value)}} value={dano}/>
          <Input id="vida" hidden={BG == "spell"||BG == "trap"||BG == "terrain"} name="vida" type="number" min="0" onChange={(dados) =>{setVida(dados.target.value)}} value={vida}/>
          </div>
        </form>
        <div className="buttonSave">
        <button 
           className="salvar"
           
           onClick={async()=>{
            await html2canvas(document.querySelector("#CARD")).then(canvas => {
              //document.body.appendChild(canvas)
              var dload = document.querySelector("#download")
              var image = canvas.toDataURL("image/png")//.replace("image/png", "image/octet-stream");
              //Canvas2Image.saveAsPNG(canvas)
              dload.href = image;
              dload.download = "cartinha"
              dload.click()
              })
          /*React.useEffect(() => {
          async () => {
            const Canvas2Image = (await import("canvas2image")).default();

          html2canvas(document.querySelector("#CARD")).then(canvas => {
            //document.body.appendChild(canvas)
            //var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            return Canvas2Image.saveAsPNG(canvas);
          })
              }
            },[])*/
          
          }
            //window.location.href = image;
}>

          Salvar
          </button>
        </div>
        <a id="download"></a>
        
      </Maker>
    </Content>
    </>
  )
}
