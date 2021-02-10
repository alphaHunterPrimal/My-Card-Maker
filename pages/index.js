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
import Img2 from '../src/components/Img2/Img2';
const {Bg /*,Background*/} = require('../Back.js');
var {Bgatual} = require('../Back.js');

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
  /*const NoStats = [BG == "spell"||BG == "trap"||BG == "terrain"];*/
  return (
    <Content>
      <Card >
        <Img2 src={`${BGATUAL}`} alt="Bgatual"></Img2>
        <Top>
        <span className="custo">{`${custo}`}</span>
        <span className="ganho">{`${ganho}`}</span>
        <span className="nome">{`${nome}`}</span>
        <span className="mov">{`${mov}`}</span>
        <img src={`${MVATUAL}`} alt="MVatual"></img>
        </Top>
        <Main>
        <Img src={`${image}`} alt="image"></Img>
        <p className="desc">{`${desc}`}</p>
        <p className="effect">{`${effect}`}</p>
        </Main>
        <Status>
        <Status.dano>{`${dano}`}</Status.dano>
        <Status.vida>{`${vida}`}</Status.vida>
        </Status>
      </Card>
      <Maker>
        <form onSubmit={(dados)=>{
          dados.preventDefault();
        }}>
          <span>Tipo de carta</span>
          <select id="tipo" onChange = {(dados) => {
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

          <span>Custo</span>
          <Input name="custo" type="number" min="0" onChange={(dados) =>{setCusto(dados.target.value)}} value={custo}/>

          <label for="ganho" hidden={!(BG == "creature" ||BG == "construction")}>Ganho</label>
          <Input id="ganho" name="ganho" hidden={!(BG == "creature" ||BG == "construction")} type="number" min="0" onChange={(dados) =>{setGanho(dados.target.value)}} value={ganho}/>

          <label for="nome">Nome</label>
          <Input id="nome" name="nome" onChange={(dados) =>{setNome(dados.target.value)}} value={nome}/>

          <label for="mov" hidden={!(BG == "creature")}>Movimentacão</label>
          <Input id="mov" hidden={!(BG == "creature")} name="mov" onChange={(dados) =>{setMov(dados.target.value)}} value={mov}/>
          <select hidden={!(BG == "creature")} onChange = {(dados) => {setMV(dados.target.value)}}>
            <option value="arrow1">Arrow1</option>
            <option value="arrow2">Arrow2</option>
            <option value="arrow3">Arrow3</option>
          </select>

          <label for="image">Imagem</label>
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