import Card from "../styles/CardMaker/Card";
import ImgBg from "../styles/CardMaker/ImgBg";

import Top from "../styles/CardMaker/Top";
import ImgMov from "../styles/CardMaker/ImgMov";
import Main from "../styles/CardMaker/Main";
import Status from "../styles/CardMaker/Status";
import React, {useEffect, useRef} from "react"
import { useInitial } from "../contexts/initialContext";
export function CARD(){
    var {
        tudo,
        sorc_anormal ,
        semvida ,
        semcusto ,
        semCC ,
        semdano ,
        digits,
        digitsEffect,
        fontsize,
        line,
        NOME,
        CUSTO,
        CUSTOE,
        IMG,
        EFFECT,
        custoM,
        custoE,
        ganho,
        nome,
        mov,
        image,
        desc,
        dano,
        vida,
        BG,
        BGATUAL,
        MVATUAL,
        energia, 
    }  = useInitial()
    useEffect(() => {tudo()} , [BG, energia, digitsEffect, digits, semcusto])

    const Ref = React.createRef();
    return(
    <Card id="CARD" >
    <ImgBg  src={`${BGATUAL}`} alt="Bgatual"></ImgBg>
    <Top >
    <span className={CUSTO} hidden={semcusto == true || sorc_anormal == true}>{`${custoM}`}</span>
    {//o span na carta com o valor do custoM em energia
    }
    
    <span className={CUSTOE} hidden={semcusto === true || energia === "false"}>{`${custoE}`}</span>
    
    <span className="ganho" hidden={semCC == true}>{`${ganho}`}</span>
    <span className={NOME}>{`${nome}`}</span>
    <span className="mov" hidden={!(BG == "Criatura" || BG == "CriaturaE")} style={{ fontWeight: "600", fontFamily: "'Oi', cursive", fontSize: "20px" }}>{`${mov}`}</span>
    </Top>
    <ImgMov src={`${MVATUAL}`} alt="MVatual" hidden={!(BG == "Criatura" || BG == "CriaturaE")}></ImgMov>
    <Main>
    <img className={IMG} src={`${image}`} alt="image"></img>
    <p className="desc">{`${desc}`}</p>
    <div id="text" ref={Ref} className={EFFECT} style={{ fontSize: `${fontsize}px`, lineHeight: `${line}px`}}></div>
    </Main>
    <Status>
    <Status.dano hidden={semdano == true}>{`${dano}`}</Status.dano>
    <Status.vida hidden={semvida == true}>{`${vida}`}</Status.vida>
    </Status>
  </Card>
  
  
  
  )
    
}