import styled from 'styled-components';
import React from 'react';
import Head from 'next/head';
import $ from "jquery";

import Content from '../src/components/Content/Content';
import Input from '../src/components/Input/Input';
import Card from '../src/components/Card/Card';
import Maker from '../src/components/Maker/Maker';
import Top from '../src/components/Top/Top';
import Main from '../src/components/Main/Main';
import Status from '../src/components/Status/Status';
import Img from '../src/components/Img/Img';
import ImgBg from '../src/components/ImgBg/ImgBg';
import ImgMov from '../src/components/ImgMov/ImgMov';
/*const {Bg ,Background} = require('../Back.js');
var {Bgatual} = require('../Back.js');*/

export default function Home() {
  const [custo, setCusto] = React.useState('');
  const [ganho, setGanho] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [mov, setMov] = React.useState('');
  const [image, setImage] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [effect, setEffect] = React.useState('');
  const [dano, setDano] = React.useState('');
  const [vida, setVida] = React.useState('');
  const [BG, setBG] = React.useState('queen');
  var BGATUAL = "/" + BG + ".png";
  const [MV, setMV] = React.useState('');
  var MVATUAL = "/" + MV + ".png";
  var digits = nome.length;
  var NOME;
  var CUSTO;
  var IMG;
  var EFFECT;
var keywords = {
    ":Destruir:" : "Destruir",
    ":Obliterar:" : "Obliterar",
    ":Temporaria:" : "Temporaria"};
var keyimgs = {
":virar:" : "virar"};

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



  /*const NoStats = [BG == "spell"||BG == "trap"||BG == "terrain"];*/
  return (
    <>
    <Head>
      <title>Meu criador de cartas</title>
    </Head>
 <Content>
      <Card >
        <ImgBg src={`${BGATUAL}`} alt="Bgatual"></ImgBg>
        <Top>
        <span className={CUSTO} hidden={(BG == "queen")}>{`${custo}`}</span>
        <span className="ganho" hidden={!(BG == "creature" ||BG == "construction")}>{`${ganho}`}</span>
        <span className={NOME}>{`${nome}`}</span>
        <span className="mov" hidden={!(BG == "creature")}>{`${mov}`}</span>
        </Top>
        <ImgMov src={`${MVATUAL}`} alt="MVatual" hidden={!(BG == "creature")}></ImgMov>
        <Main>
        <img className={IMG} src={`${image}`} alt="image"></img>
        <p className="desc">{`${desc}`}</p>
        <div id="text" className={EFFECT} contentEditable="true" 
        onKeyUp={(e) => {
          if(e.keyCode == 32){
            var test = e.target.innerText

            $.each(keyimgs, function(key, link) {
              var LINK = "/" + link + ".jpg"
              test = test.replace(new RegExp(key, 'g'), "<img class='"+ link +"'" +"src='" + LINK + "'>");
            });
            $.each(keywords, function(key, link) {
              test = test
              .replace(new RegExp(key, 'g'), "<span class='" + link + "'>"+link+"</span>");
            });
          
            $('#text').html(test);
          }
        }}
        /*onKeyUp={(e) => {
          var keywords = {
            ":Destruir:" : "Destruir",
            ":Obliterar:" : "Obliterar",
            ":Temporaria:" : "Temporaria"};
          var keyimgs = {
            ":virar:" : "/virar.jpg"};
            var test = e.value;

            $.each(keywords, function(key, link) {
              test = test.replace(new RegExp(key, 'g'), "<span class='" + link + "'>"+link+"</span>");})

              $('#text').html(text);
          //const regex = new RegExp('(<div>|<br>)', 'gi')
          //const regex1 = new RegExp('</div>', 'gi')
          //var regex2 = /(\W)\s$/gi
          
           /* if (e.keyCode == 16){
              
          var frase =  e.target.innerText
          //.replace(regex, '').replace(regex1, ' ').replace(regex2, '<p></p>');    
          console.log(frase)
          // separar a frase num array para pegar cada palavra
          var cis = frase.split(" ")
          console.log(cis)
          // trocar o último elemento do array
          var cisL = cis[cis.length -1]
          console.log(cisL)
          //tentando trocar o bagui
          /*if(cisL == ''){
            cisL = cis.push("oi")}
          if(keywords.includes(cisL)){
          
          cis.splice((cis.length - 1), 1, `<span class=${cisL}>${cisL}</span></span><span>&nbsp</span>`)
          
          var trans = cis.join(" ")
          e.target.innerHTML = trans
          }
          //var replaceado = frase.replace(`${cisL}`, `<span class=${cisL}>${cisL}</span><span>&nbsp</span>`)

          // retornar o valor para a frase, modificando-o
          //e.target.innerHTML = replaceado}
           /*else {
          if(keyimgs.includes(cisL)){
            var CIS = "/" + cisL + ".jpg"
            replaceado = frase.replace(`${cisL}`, `<img src=${CIS} class=${cisL}></img>`)
  
            // retornar o valor para a frase, modificando-o
            e.target.innerHTML = replaceado} else {
              console.log("tem não")
           
          }}}
          //onde inserir o código
             } */  

        ></div>
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
          
          <p hidden={true} >Efeitos</p>
          <textarea id="edit" name="efeitos" hidden={true}  onChange={(dados) =>{setEffect(dados.target.value) 
          /*var text = document.getElementById("text");
          var edit = document.getElementById("edit");
          let regexUniqueWord = /^(amor|love|hate)$/ig
          let regexFirstWord = /^(amor|love|hate)(\W)/ig
          let regexLastWord = /(\W)(amor|love|hate)$/ig
          let regex = /([^\w>])(amor|love|hate)(\W)/ig
          edit.addEventListener("keyup", function() 
          {/*e.keyCode == 32 && (text.innerHTML = effect.replace('amor', ' <span className="color-red">amor</span>'))
            // Recupera o texto da caixa de texto
         let result = edit.value
  
          // Verifica se a unica palavra é amor
          result = result.replace(regexUniqueWord, '<span class="color-red">$1</span>')
          
          // Verifica se a primeira palavra é amor
          result = result.replace(regexFirstWord, '<span class="color-red">$1</span>$2')
          
          // Verifica se a ultima palavra é amor
          result = result.replace(regexLastWord, '$1<span class="color-red">$2</span>')
          
          // Verifica por amor no resto da string
          result = result.replaceAll(regex, '$1<span class="color-red">$2</span>$3')
          
          // Redundancia
          result = result.replaceAll(regex, '$1<span class="color-red">$2</span>$3')
          
          text.innerHTML = result})
          */
          }} value={effect}></textarea>
          <div>
          <label for="dano" hidden={BG == "spell"||BG == "trap"||BG == "terrain"}>Dano</label>
          <Input id="dano" hidden={BG == "spell"||BG == "trap"||BG == "terrain"} name="dano" type="number" min="0" onChange={(dados) =>{setDano(dados.target.value)}} value={dano}/>
          <label for="vida" hidden={BG == "spell"||BG == "trap"||BG == "terrain"}>Vida</label>
          <Input id="vida" hidden={BG == "spell"||BG == "trap"||BG == "terrain"} name="vida" type="number" min="0" onChange={(dados) =>{setVida(dados.target.value)}} value={vida}/>
          </div>
        </form>
      </Maker>
    </Content>
    </>
  )
}
