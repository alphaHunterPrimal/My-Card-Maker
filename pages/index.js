import React from 'react';
import Head from 'next/head';


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
        <div id="text" className={EFFECT} contentEditable="true" 
        onKeyUp={(e) => {
         if (e.keyCode == 16){
          var keywords = [
            "Destruir",
            "Obliterar",
            "Temporaria"];
           var keyimgs = ["virar"];
           var frase =  e.target.innerHTML
          // se eu der innerHTML
          //ele acaba dividindo o <span> ao meio por causa do split no espaco em <span class

          //se eu der innerText
          //ele troca um e depois, na hora de trocar o outro, ele apaga os demais

          
          // separar a frase num array para pegar cada palavra
          var cis = frase.split(" ")
          console.log(cis)
          // pegar o último elemento do array
          var cisL = cis[cis.length -1]
          console.log(cisL)

          //se o último elemento do array for uma keyword
          if(keywords.includes(cisL)){
          //trocar esse último elemento por um <span>
          cis.splice((cis.length - 1), 1, `<span class=${cisL}>${cisL}</span><span>&nbsp</span>`)
          //juntar o array novamente numa string
          const trans = cis.join(" ")
          console.log(trans)
          // transformar essa string no html interno da <div>
          e.target.innerHTML = trans
          }
          //var replaceado = frase.replace(`${cisL}`, `<span class=${cisL}>${cisL}</span><span>&nbsp</span>`)

          // retornar o valor para a frase, modificando-o
          //e.target.innerHTML = replaceado}
           else {
          if(keyimgs.includes(cisL)){
            var CIS = "/" + cisL + ".jpg"
            cis.splice((cis.length - 1), 1, `<img src=${CIS} class=${cisL}></img>`)
            const trans = cis.join(" ")
            e.target.innerHTML = trans          
          }
             else {
              console.log("não substituir nem por imagem, nem span")
           
            }}}}}
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
          // o value= effect deixou de ser usado há um tempo no projeto, mas foi mantido caso eu mude de ideia no futuro
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
