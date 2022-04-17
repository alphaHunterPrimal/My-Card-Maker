import styled from 'styled-components';

const DeckBody = styled.div`
display: flex;
width: 100%;
height: 43em;//90vh;//

position: absolute;
top: 4.54em;//9.5vh;


flex-direction: column;
.selecionarFormato{
    width: 75%;
    display: flex;
    align-items: center;
    margin: 0 0 0.1em;
    

    button{
        width: 12.95em;//12vw;//
        height: 2.59em;//2.4vw;
        border-radius: 5px 5px 0 0;
        margin: 0 0.5em 0 0;
        cursor: pointer;
    }
    .salvarDeck{
        
        width: 27em;//30vw;//
        display: flex;
        align-items: center;
        margin-left: 1.8em;
        //margin: 0 0.5vw 0 0;
        input{
            width: 11.5em;//16vw;//
        }
        button{
        width: 8.6em;//8vw;//
        height: 2.58em;//2.4vw;
        border-radius: 5px 5px 0 0;
        margin: 0 0.5em 0 0;
        cursor: pointer;
    }
    }
    .botaoProcura{
        
        width: 18.9em;//21vw;//
        display: flex;
        align-items: center;
        margin-left: 1.8em;
        margin: 0 0.5em 0 0;
    }

}
.areaDasCartasNormal{
    
    
    width: 81.93em;//91%;//
    
    height: 46.45em;;//108%;//??? 80em é bom?
    
    display: grid;
    grid-template-columns: repeat(5, 16.34em);// repeat(5, 18.145vw);//
    grid-template-rows: repeat(2, 23.2em);//repeat(2, 48.517vh);//
    grid-column-gap: 0.09em;
    grid-row-gap: 0.095em;
    //justify-content: center;
    img{
    width: 100%; //163 -> 0,704
    height: 100%;
    :hover{
        cursor: pointer;
    }
    }
}

.areaDasCartasTransicao{
    width: 84.4em;//91%;//
    
    height: 47.8em;//108%;//
    position: absolute;
    top: -4.6em;
    left: 1vw;
    z-index: 5;
    

    display: grid;
    grid-template-columns: repeat(5, 16.82em);;//18.689vw 18.689vw 18.689vw 18.689vw 18.689vw;//
    grid-template-rows: repeat(2, 23.9em);//repeat(2, 49.97vh);//
    grid-column-gap: 0.09em;
    grid-row-gap: 0.095em;
    
    img{
    width: 100%;
    height: 100%;
    :hover{
        cursor: pointer;
    }
    }

}

`;
export default DeckBody