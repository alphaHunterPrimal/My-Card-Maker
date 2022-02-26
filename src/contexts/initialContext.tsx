
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import $, { ready } from "jquery";

type InitialContextType = {
  alternarMaker: string, setAlternarMaker: React.Dispatch<React.SetStateAction<string>>,
  cardId: string, setCardId: React.Dispatch<React.SetStateAction<string>>,

fonte: boolean, setFonte:React.Dispatch<React.SetStateAction<boolean>>,

  sorc_anormal: boolean, setSorc_anormal: React.Dispatch<React.SetStateAction<boolean>>,
  semvida: boolean, setSemvida: React.Dispatch<React.SetStateAction<boolean>>,
  semcusto: boolean, setSemcusto: React.Dispatch<React.SetStateAction<boolean>>,
  displaivar: string, setDisplaivar: React.Dispatch<React.SetStateAction<string>>,
  semCC: boolean, setSemCC: React.Dispatch<React.SetStateAction<boolean>>,
  semdano: boolean, setSemdano: React.Dispatch<React.SetStateAction<boolean>>,
  
  tudo: () => void,
  reset: () => void,
  resetAfterUpdate: () => void,
  permitirReset: boolean,
  setPermitirReset: React.Dispatch<React.SetStateAction<boolean>>,
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
  antigoNome: string, 
  setAntigoNome: React.Dispatch<React.SetStateAction<string>>, 
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

  //tiposDeCartas: string[], 
  //setasDeMov: string[], 
  /*keywords: {}, 
  keyimgs: {}*/
}
type InitialContextProviderProps = {
  children: ReactNode;
}
export const InitialContext = createContext({} as InitialContextType);

export const InitialContextProvider = (props: InitialContextProviderProps) => {
    const [alternarMaker, setAlternarMaker] = React.useState<string>('Criar');
    const [cardId, setCardId] = React.useState<string>('');

    const [custoM, setCustoM] = React.useState<string>('0');
    const [custoE, setCustoE] = React.useState<string>('0');
   
    const [ganho, setGanho] = React.useState<string>('0');
    
    const [nome, setNome] = React.useState<string>('');
    const [antigoNome, setAntigoNome] = React.useState<string>('');
    const [mov, setMov] = React.useState<string>('1');
    const [image, setImage] = React.useState<string>('');
    const [desc, setDesc] = React.useState<string>('');
    const [effect, setEffect] = React.useState<string>('');
    const [dano, setDano] = React.useState<string>('0');
    const [vida, setVida] = React.useState<string>('0');
    const [BG, setBG] = React.useState('Rainha');
    var BGATUAL = "/" + BG + ".png";
    
    const [MV, setMV] = React.useState<string>("Seta1");
    var MVATUAL = "/" + MV + ".png";
  
    const [carta, setCarta] = React.useState('');
    const [displai, setDisplai] = React.useState("inline")
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

    const [fonte, setFonte] = useState<boolean>(false);

    const [permitirReset, setPermitirReset]  = useState<boolean>(true)
    function resetAfterUpdate(){
      setNome("")
      setBG("Rainha")
      setEffect("")
      setImage("")
      setCardId("")


      setCustoM("")
      setCustoE("")
      setGanho("")
      setMov("")
      setMV("")
      setDano("")
      setVida("")
      setPermitirReset(true)
      setAlternarMaker("Criar")
      setDesc("")
    }
    function reset(){
      if(permitirReset == true){
        if(BG == "Rainha"){
          setCustoM("")
          setCustoE("")
          setGanho("")
          setMov("")
          setMV("")
          setDano("0")
          setVida("0")
                }
                if(BG == "Bioma"){
          setCustoM("")
          setCustoE("")
          setGanho("")
          setMov("")
          setMV("")
          setDano("")
          setVida("")
                }
                if(BG == "Criatura" || BG == "CriaturaE"){
          setCustoM("0")
          setCustoE("0")
          setGanho("0")
          setMov("1")
          setMV("Seta1")
          setDano("0")
          setVida("0")
                }
                
                if(BG == "Efeito"||BG == "EfeitoE"||BG == "Armadilha"||BG == "ArmadilhaE"||BG == "Terreno"||BG == "TerrenoE"){
          setCustoM("0")
          setCustoE("0")
          setGanho("")
          setMov("")
          setMV("")
          setDano("")
          setVida("")
                }
                if(BG == "Construcao" || BG == "ConstrucaoE"){
          setCustoM("0")
          setCustoE("0")
          setGanho("0")
          setMov("")
          setMV("")
          setDano("")
          setVida("0")
                }
      }
      

    }
    function tudo(){
      
      if(energia == "true"){
          if (BG == "Criatura") {
            setBG("CriaturaE")
          }
          if(BG == "Efeito") {
            setBG("EfeitoE")
          }
          if(BG == "Armadilha") {
            setBG("ArmadilhaE")
          }
          if(BG == "Construcao") {
            setBG("ConstrucaoE")
          }
          if(BG == "Terreno") {
            setBG("TerrenoE")
          }
        } else {
          if(energia == "false"){
           if (BG == "CriaturaE") {
             setBG("Criatura")
           }
           if(BG == "EfeitoE") {
             setBG("Efeito")
           }
           if(BG == "ArmadilhaE") {
             setBG("Armadilha")
           }
           if(BG == "ConstrucaoE" ) {
             setBG("Construcao")
           }
           if(BG == "TerrenoE" ) {
             setBG("Terreno")
           }
        }
        }

    
      if(BG == "Efeito"||BG == "Armadilha"||BG == "Terreno"||BG == "Bioma"){
        setEFFECT("effectTrue")
      } else { setEFFECT("effect")};
    
    
      if(BG == "Rainha"||BG == "Bioma"){
        setIMG("imgRainha")
      } else {setIMG("img1")};
    
    
      if(BG == "Efeito"||BG == "Armadilha"||BG == "Terreno") {
        setCUSTO("custoCentral")
      } else {setCUSTO("custoM1")}
    
      if(BG == "EfeitoE"||BG == "ArmadilhaE"||BG == "TerrenoE"){
         setSorc_anormal(true)
        setCUSTOE("custoCentral")
      } else {if(BG == "Efeito"||BG == "Armadilha"||BG == "Terreno"){
        setSorc_anormal(false);
      }}
    
      if(BG == "CriaturaE" || BG == "ConstrucaoE"){
        setSorc_anormal(false)
        setCUSTO("custoM2")
        setCUSTOE("custoE")
      }
    
    
      if (BG == "Rainha" && digits <= 25 || BG == "Bioma" && digits <= 25){
        setNOME("nomeRainha")
      } else{
        if (BG == "Rainha" && digits > 25 || BG == "Bioma" && digits > 25){
          setNOME("nomeRainha2")
        } else{    if (digits < 30) {
          setNOME("nome1")
        };
          if (digits >= 30){
          setNOME("nome2")
        }}
    };

    
    
      if(BG == "Construcao"){
        setStatusDescy("statusConstruct")
        setStatusMy("statusMconstruct")
      } else 
      { if(BG == "ConstrucaoE"){
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
    if(BG == "Efeito"||BG == "EfeitoE"||BG == "Armadilha"||BG == "ArmadilhaE"||BG == "Terreno"||BG == "TerrenoE"||BG == "Bioma"){
       setSemvida(true)
    } else {setSemvida(false)}
    
    if(BG == "Rainha" ||BG == "Bioma"){
      setSemcusto(true)
      setDisplaivar("none")
    } else {
      setSemcusto(false)
     setDisplaivar("block")}
    
    if(!(BG == "Criatura" ||BG == "Construcao" || BG == "CriaturaE" ||BG == "ConstrucaoE")){
       setSemCC(true)
    } else { setSemCC(false)}
    
    if(!(BG == "Criatura" ||BG == "CriaturaE" || BG == "Rainha")){
       setSemdano(true)
    } else {setSemdano(false)}

    }
  return(
      <InitialContext.Provider value={{
        alternarMaker, setAlternarMaker,
        cardId, setCardId,

        fonte, setFonte,
        
        sorc_anormal , setSorc_anormal ,
        semvida , setSemvida ,
        semcusto , setSemcusto ,
        displaivar, setDisplaivar,
        semCC , setSemCC ,
        semdano , setSemdano ,

        
        tudo,
        reset,
        resetAfterUpdate,
        permitirReset, 
        setPermitirReset, 
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
        antigoNome,
        setAntigoNome,
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
       // tiposDeCartas, 
       //setasDeMov, 
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