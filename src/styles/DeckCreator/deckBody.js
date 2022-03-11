import styled from 'styled-components';

const DeckBody = styled.div`
display: flex;
width: 100%;
height: 90vh;
position: absolute;
top: 9.5vh;


flex-direction: column;
.selecionarFormato{
    width: 75%;
    display: flex;
    align-items: center;
    margin: 0 0 0.1vw;
    

    button{
        width: 12vw;
        height: 2.4vw;
        border-radius: 5px 5px 0 0;
        margin: 0 0.5vw 0 0;
        cursor: pointer;
    }
    .salvarDeck{
        width: 30vw;
        display: flex;
        align-items: center;
        margin-left: 2vw;
        //margin: 0 0.5vw 0 0;
        input{
            width: 16vw;
        }
        button{
        width: 8vw;
        height: 2.4vw;
        border-radius: 5px 5px 0 0;
        margin: 0 0.5vw 0 0;
        cursor: pointer;
    }
    }
    .botaoProcura{
        width: 21vw;
        display: flex;
        align-items: center;
        margin-left: 2vw;
        margin: 0 0.5vw 0 0;
    }

}
.areaDasCartasNormal{
    width: 91%;
    
    height: 108%;
    
    display: grid;
    grid-template-columns: 18.145vw 18.145vw 18.145vw 18.145vw 18.145vw;//261.3px 261.3px 261.3px 261.3px 261.3px;// 269.139px 269.139px 269.139px 269.139px 269.139px ;
    grid-template-rows: 48.517vh 48.517vh;//371.16px 371.16px;//382.2948px 382.2948px ;
    grid-column-gap: 0.1vw;
    grid-row-gap: 0.2vh;
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
    width: 91%;
    position: absolute;
    top: -9.5vh;
    left: 1vw;
    z-index: 5;
    //background-color: blue;
    height: 108%;
    

    
    display: grid;
    grid-template-columns: 18.689vw 18.689vw 18.689vw 18.689vw 18.689vw;//269.139px 269.139px 269.139px 269.139px 269.139px ;//326.625px 326.625px 326.625px 326.625px 326.625px; //repeat(auto-fill, 16vw);
    grid-template-rows: 49.97vh 49.97vh;//382.2948px 382.2948px ;
    grid-column-gap: 0.1vw;
    grid-row-gap: 0.2vh;
    //justify-content: center;
    
    img{
    width: 100%; //163 -> 0,704
    height: 100%;
    :hover{
        cursor: pointer;
    }
    }

}

`;
export default DeckBody