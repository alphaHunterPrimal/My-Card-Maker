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
  return (
    <Content>
      <Card>
        <Top>
        <span className="custo">{`${custo}`}</span>
        <span className="ganho">{`${ganho}`}</span>
        <span className="nome">{`${nome}`}</span>
        <span className="mov">{`${mov}`}</span>
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
          <h1>Tipo de carta</h1>
          <span>Custo</span>
          <Input name="custo" type="number" min="0" onChange={(dados) =>{setCusto(dados.target.value)}} value={custo}/>
          <span>Ganho</span>
          <Input name="ganho" type="number" min="0" onChange={(dados) =>{setGanho(dados.target.value)}} value={ganho}/>
          <span>Nome</span>
          <Input name="nome" onChange={(dados) =>{setNome(dados.target.value)}} value={nome}/>
          <span>Movimentacão</span>
          <Input name="mov" onChange={(dados) =>{setMov(dados.target.value)}} value={mov}/>
          <span>Imagem</span>
          <Input name="image" onChange={(dados) =>{setImage(dados.target.value)}} value={image}/>
          <span>Descricão</span>
          <Input name="descricão" onChange={(dados) =>{setDesc(dados.target.value)}} value={desc}/>
          <p>Efeitos</p>
          <textarea name="efeitos" onChange={(dados) =>{setEffect(dados.target.value)}} value={effect}></textarea>
          <div>
          <span>Dano</span>
          <Input name="dano" type="number" min="0" onChange={(dados) =>{setDano(dados.target.value)}} value={dano}/>
          <span>Vida</span>
          <Input name="vida" type="number" min="0" onChange={(dados) =>{setVida(dados.target.value)}} value={vida}/>
          </div>
        </form>
      </Maker>
    </Content>
  )
}
