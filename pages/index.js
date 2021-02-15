import styled from 'styled-components';
import React from 'react';
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
  const [BG, setBG] = React.useState('');
  var BGATUAL = "/" + BG + ".png";
  const [MV, setMV] = React.useState('');
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
}
  /*co
nst NoStats = [BG == "spell"||BG == "trap"||BG == "terrain"];*/
  return (
    <Content>
      <Card >
        <ImgBg src={`${BGATUAL}`} alt="Bgatual"></ImgBg>
        <Top>
        <span className={CUSTO} hidden={(BG == "queen")}>{`${custo}`}</span>
        <span className="ganho" hidden={!(BG == "creature" ||BG == "construction")}>{`${ganho}`}</span>
        <span className={NOME}>{`${nome}`}</span>
        <span className="mov" hidden={!(BG == "creature")}>{`${mov}`}</span>
        </Top>
        <ImgMov  src={`${MVATUAL}`} alt="MVatual" hidden={!(BG == "creature")}></ImgMov>
        <Main>
        <img className={IMG} src={`${image}`} alt="image"></img>
        <p className="desc">{`${desc}`}</p>
        <p className={EFFECT}>{`${effect}`}</p>
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

          <p>Efeitos</p>
          <textarea name="efeitos" onChange={(dados) =>{setEffect(dados.target.value)}} value={effect}></textarea>

          <div>
          <label for="dano" hidden={BG == "spell"||BG == "trap"||BG == "terrain"}>Dano</label>
          <Input id="dano" hidden={BG == "spell"||BG == "trap"||BG == "terrain"} name="dano" type="number" min="0" onChange={(dados) =>{setDano(dados.target.value)}} value={dano}/>
          <label for="vida" hidden={BG == "spell"||BG == "trap"||BG == "terrain"}>Vida</label>
          <Input id="vida" hidden={BG == "spell"||BG == "trap"||BG == "terrain"} name="vida" type="number" min="0" onChange={(dados) =>{setVida(dados.target.value)}} value={vida}/>
          </div>
        </form>
      </Maker>
    </Content>
  )
}
