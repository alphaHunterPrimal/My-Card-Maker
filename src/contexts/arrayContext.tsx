
import { useContext, createContext, ReactNode, useEffect, useState } from "react";

import React from "react"

type ArrayContextType = {
tiposDeCartas: string[],
Sets: string[],
Arquétipo: string[],
ArquétipoEfeitos: string[],
Velocidade: string[],
CriarVelocidade: string[],
CustoM: string[],
Ganho: string[],
CustoE: string[],
Mov: string[],
Direcoes: string[],
Vida: string[],
Dano: string[],
KEY: string[],
KEYY: string[],
KEI: string[],

}

type ArrayContextProviderProps = {
  children: ReactNode;
}

export const ArrayContext = createContext({} as ArrayContextType);

export function ArrayContextProvider(props: ArrayContextProviderProps) {
    const tiposDeCartas = ["Rainha", "Criatura", "Efeito", "Armadilha", "Terreno", "Construcao"];
    const ArquétipoEfeitos = ["Ação", "Técnica", "Mutação", "Evolução"]
    const Sets = ["", "Pyrossaurs", "Lizardpliers", "Rockrar", "Alissaurs"];
    const Arquétipo = ["", "Réptil", "Constructo", "Bio-constructo"];
    


const CustoM = []
const Vida = []
const Dano= []
const Ganho = []
const CustoE = []
var i = 0
var a = 0
while(i <21){
  var stringo = i.toString()
  CustoM.push(stringo)
  Dano.push(stringo)
  Vida.push(stringo)

  i++
}
while(a <11){
  var stringu = a.toString()
  Ganho.push(stringu)
  CustoE.push(stringu)

  a++
}

    //const CustoM = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
    //onst Ganho = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    //const CustoE = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const Mov = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const Velocidade = ["","Imediata", "Rápida", "Lenta"]
    const CriarVelocidade = ["Imediata", "Rápida", "Lenta"]
    const Direcoes = ["Seta1", "Seta2", "Seta3"]
    //const Vida = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
    //const Dano = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
    var KEY = [
        "", 
        'Destruir',
        'Obliterar',
        'Temporaria',
        'Imediato',
        'Rápido',
        'Aterrar', 
        "Nascer",
        "Morrer",
        "Invocar",
        "Voar",
        "Comprar",
        "Manutenção",
        "Atroz", 
        "Inicial",
        "Meta",
        "Ameaçador",
        "Celeridade", 
        "Pronto", 
        "Puro"];
    var KEYY = [
          "quebra de texto",
          'virar',
          'tempo', 
          "mineral", 
          "quadrado", 
          "resistencia", 
          "alcance",
          'Destruir',
          'Obliterar',
          'Temporaria',
          'Imediato',
          'Rápido',
          'Aterrar', 
          "Nascer",
          "Morrer",
          "Invocar",
          "Voar",
          "Comprar",
          "Manutenção",
          "Atroz", 
          "Inicial",
          "Meta",
          "Ameaçador",
          "Celeridade", 
          "Pronto", 
          "Puro"];
    var KEI  = [
      ":p:",
      ":v:",
      ":t:", 
      ":m:", 
      ":q:", 
       ":r:", 
     ":alc:",
        ":Dest:",
        ":Obli:",
        ":Temp:",
        ":Ime:",
        ":Rap:",
        ":Ate:", 
        ":Nas:",
        ":Mor:",
       ":Inv:",
        ":Voa:",
         ":Com:",
        ":Man:",
        ":Atr:", 
        ":Ini:",
       ":Met:",
       ":Ame:", 
      ":Cel:", 
      ":Prt:", 
      ":Pur:",
    ]

  return (
    <ArrayContext.Provider value={{
      CriarVelocidade,
      ArquétipoEfeitos,
      Velocidade,
        tiposDeCartas,
        Sets,
        Arquétipo,
        CustoM,
        Ganho,
        CustoE,
        Mov,
        Direcoes,
        Vida,
        Dano,
        KEY,
        KEYY,
        KEI
    }}>
      {props.children}
    </ArrayContext.Provider>
  );
}
export function useArray() {
    const value = useContext(ArrayContext)
  
    return value;
}