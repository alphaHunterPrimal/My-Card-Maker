import React from 'react';
import Head from 'next/head';
import $ from "jquery"

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
  var NOME;
  var CUSTO;
  var IMG;
  var EFFECT;


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
        <div id="text" className={EFFECT}></div>
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
          <textarea id="edit" name="efeitos" hidden={false}  onChange={(dados) =>{setEffect(dados.target.value) 
          // o value= effect deixou de ser usado há um tempo no projeto, mas foi mantido caso eu mude de ideia no futuro
                    
          var keywords = {
            ":Destruir:" : 'Destruir',
            ":Obliterar:": 'Obliterar',
            ":Temporaria:":'Temporaria'};

          var keyimgs = {":virar:" : 'virar'};

          var quebra = {":quebra:" : "quebra"} 

          var text = document.querySelector("#edit").innerHTML;

         $.each(keyimgs, function(key, link) {
          var LINK = "/" + link + ".jpg" 
          text = text
          .replace(new RegExp(key, 'g'), "<img class='"+ link + "'src='" + LINK + "'>");
      });
         $.each(keywords, function(key, link) {
          text = text
          .replace(new RegExp(key, 'g'), "<span class='" + link + "'>"+link+"</span>");
       });
         $.each(quebra, function(key) {
          text = text
           .replace(new RegExp(key, 'g'), "<br>");
        });

         $('#text').html(text);
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
