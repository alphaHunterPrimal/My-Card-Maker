import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";


type InitialContextType = {
  sorc_anormal: boolean, setSorc_anormal: React.Dispatch<React.SetStateAction<boolean>>,
  semvida: boolean, setSemvida: React.Dispatch<React.SetStateAction<boolean>>,
  semcusto: boolean, setSemcusto: React.Dispatch<React.SetStateAction<boolean>>,
  displaivar: string, setDisplaivar: React.Dispatch<React.SetStateAction<string>>,
  semCC: boolean, setSemCC: React.Dispatch<React.SetStateAction<boolean>>,
  semdano: boolean, setSemdano: React.Dispatch<React.SetStateAction<boolean>>,
  tudo: () => void,
  digits: number, 
  digitsEffect: number,
  fontsize: number, setFontsize: React.Dispatch<React.SetStateAction<number>>,
  line: number, setLine: React.Dispatch<React.SetStateAction<number>>,  
  NOME: string, setNOME:React.Dispatch<React.SetStateAction<string>>, 
  CUSTO: string, setCUSTO:React.Dispatch<React.SetStateAction<string>>, 
  CUSTOE: string, setCUSTOE:React.Dispatch<React.SetStateAction<string>>, 
  IMG: string, setIMG:React.Dispatch<React.SetStateAction<string>>, 
  EFFECT: string, setEFFECT:React.Dispatch<React.SetStateAction<string>>, 
  SELECTS: string, setSELECTS:React.Dispatch<React.SetStateAction<string>>, 
  statusDescy: string, setStatusDescy:React.Dispatch<React.SetStateAction<string>>, 
  statusMy: string, setStatusMy: React.Dispatch<React.SetStateAction<string>>, 
  custoM: string,
  setCustoM: React.Dispatch<React.SetStateAction<string>>, 
  custoE: string,
  setCustoE: React.Dispatch<React.SetStateAction<string>>,
  ganho: string,
  setGanho: React.Dispatch<React.SetStateAction<string>>, 
  nome: string,
  setNome: React.Dispatch<React.SetStateAction<string>>, 
  mov: string,
  setMov: React.Dispatch<React.SetStateAction<string>>,
  image: string,
  setImage: React.Dispatch<React.SetStateAction<string>>, 
  desc: string,
  setDesc: React.Dispatch<React.SetStateAction<string>>, 
  effect: string,
  setEffect: React.Dispatch<React.SetStateAction<string>>, 
  dano: string,
  setDano: React.Dispatch<React.SetStateAction<string>>, 
  vida: string,
  setVida: React.Dispatch<React.SetStateAction<string>>,
  BG: string,
  setBG: React.Dispatch<React.SetStateAction<string>>, 
  BGATUAL: string,
  MV: string,
  setMV: React.Dispatch<React.SetStateAction<string>>,
  MVATUAL: string,
  energia: string, 
  setE: React.Dispatch<React.SetStateAction<string>>,
  carta: string,
  setCarta: React.Dispatch<React.SetStateAction<string>>, 
  displai: string,
  setDisplai: React.Dispatch<React.SetStateAction<string>>,

  tiposDeCartas: string[], 
  setasDeMov: string[], 
  /*keywords: {}, 
  keyimgs: {}*/
}
type InitialContextProviderProps = {
  children: ReactNode;
}
export const InitialContext = createContext({} as InitialContextType);

export const InitialContextProvider = (props: InitialContextProviderProps) => {
    
    const [custoM, setCustoM] = React.useState<string>('0');
    const [custoE, setCustoE] = React.useState<string>('0');

    const [ganho, setGanho] = React.useState<string>('0');
    
    const [nome, setNome] = React.useState<string>('');
    const [mov, setMov] = React.useState<string>('1');
    const [image, setImage] = React.useState<string>('');
    const [desc, setDesc] = React.useState<string>('');
    const [effect, setEffect] = React.useState<string>('');
    const [dano, setDano] = React.useState<string>('0');
    const [vida, setVida] = React.useState<string>('0');
    const [BG, setBG] = React.useState('Queen');
    var BGATUAL = "/" + BG + ".png";
    const [MV, setMV] = React.useState<string>('arrow1');
    var MVATUAL = "/" + MV + ".png";
  
    const [carta, setCarta] = React.useState('');
    const [displai, setDisplai] = React.useState("none")
    const tiposDeCartas = ["Queen", "Biome", "Creature", "Spell", "Trap", "Terrain", "Construction"];
    const setasDeMov = ["Arrow1", "Arrow2", "Arrow3"]
    const [fontsize, setFontsize] = useState<number>(0)
    const [line, setLine] = useState<number>(0)
    const [NOME, setNOME] = useState<string>("")
    const [IMG, setIMG] = useState<string>("")
    const [CUSTO, setCUSTO] = useState<string>("")
    const [CUSTOE, setCUSTOE] = useState<string>('');
    const [EFFECT, setEFFECT] = useState<string>("")
    const [SELECTS, setSELECTS] = useState<string>("")

    var digits = nome.length;
    var digitsEffect = effect.length;
    const [statusDescy, setStatusDescy] = useState<string>("")
    const [statusMy, setStatusMy] = useState<string>("")
  
    const[energia, setE] = React.useState<string>("false")

    const [semcusto,setSemcusto] = useState<boolean>(true);
    const [sorc_anormal,setSorc_anormal] = useState<boolean>(false);
    const [semCC,setSemCC] = useState<boolean>(true);
    const [semdano,setSemdano] = useState<boolean>(false);
    const [semvida,setSemvida] = useState<boolean>(false);
    const [displaivar,setDisplaivar] = useState<string>("");

    function tudo(){
      
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
        
      if(digitsEffect <= 120){
        setLine(19)
        setFontsize(19)
      } else {if(digitsEffect > 120 && digitsEffect <= 180){
        setLine(17)
        setFontsize(17)
      } else {if(digitsEffect > 180 && digitsEffect <= 240){
        setLine(16)
        setFontsize(16)
      } else {if(digitsEffect > 240 && digitsEffect <= 300){
        setLine(16)
        setFontsize(15)
      }
      else {if(digitsEffect > 400){
        setLine(16)
        setFontsize(14)
      }}}
    }}
    
      if(BG == "Spell"||BG == "Trap"||BG == "Terrain"||BG == "Biome"){
        setEFFECT("effectTrue")
      } else { setEFFECT("effect")};
    
    
      if(BG == "Queen"||BG == "Biome"){
        setIMG("imgQueen")
      } else {setIMG("img1")};
    
    
      if(BG == "Spell"||BG == "Trap"||BG == "Terrain") {
        setCUSTO("custoCentral")
      } else {setCUSTO("custoM1")}
    
      if(BG == "SpellE"||BG == "TrapE"||BG == "TerrainE"){
         setSorc_anormal(true)
        setCUSTOE("custoCentral")
      } else {if(BG == "Spell"||BG == "Trap"||BG == "Terrain"){
        setSorc_anormal(false);
      }}
    
      if(BG == "CreatureE" || BG == "ConstructionE"){
        setSorc_anormal(false)
        setCUSTO("custoM2")
        setCUSTOE("custoE")
      }
    
    
      if (BG == "Queen" && digits <= 25 || BG == "Biome" && digits <= 25){
        setNOME("nomeQueen")
      } else{
        if (BG == "Queen" && digits > 25 || BG == "Biome" && digits > 25){
          setNOME("nomeQueen2")
        } else{    if (digits < 25) {
          setNOME("nome1")
        };
          if (digits >= 25){
          setNOME("nome2")
        }}
    };

    
    
      if(BG == "Construction"){
        setStatusDescy("statusConstruct")
        setStatusMy("statusMconstruct")
      } else 
      { if(BG == "ConstructionE"){
        setStatusDescy("statusConstruct")
      } else {
         setStatusDescy("statusDesc")
         setStatusMy("statusM")
    }}
    
    if(semcusto == true){
      setSELECTS("selects1")
    } else {
      setSELECTS("selects2")
    }
    if(BG == "Spell"||BG == "SpellE"||BG == "Trap"||BG == "TrapE"||BG == "Terrain"||BG == "TerrainE"||BG == "Biome"){
       setSemvida(true)
    } else {setSemvida(false)}
    
    if(BG == "Queen" ||BG == "Biome"){
      setSemcusto(true)
      setDisplaivar("none")
    } else {
      setSemcusto(false)
     setDisplaivar("block")}
    
    if(!(BG == "Creature" ||BG == "Construction" || BG == "CreatureE" ||BG == "ConstructionE")){
       setSemCC(true)
    } else { setSemCC(false)}
    
    if(!(BG == "Creature" ||BG == "CreatureE" || BG == "Queen")){
       setSemdano(true)
    } else {setSemdano(false)}

    }
  return(
      <InitialContext.Provider value={{
        sorc_anormal , setSorc_anormal ,
        semvida , setSemvida ,
        semcusto , setSemcusto ,
        displaivar, setDisplaivar,
        semCC , setSemCC ,
        semdano , setSemdano ,

        tudo,

        digits,
        digitsEffect,

        fontsize, setFontsize,
        line, setLine,  
        NOME, setNOME, 
        CUSTO, setCUSTO, 
        CUSTOE, setCUSTOE, 
        IMG, setIMG, 
        EFFECT, setEFFECT, 
        SELECTS, setSELECTS, 
        statusDescy, setStatusDescy, 
        statusMy, setStatusMy, 


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
        tiposDeCartas, 
        setasDeMov, 
        /*keywords, 
        keyimgs,*/
        
      }}>
          {props.children}
      </InitialContext.Provider>
  )

    }
export function useInitial(){
const value = useContext(InitialContext)

  return value;
}