import styled from 'styled-components';

const DeckBody = styled.div`
display: flex;
width: 100%;
height: 90vh;
position: absolute;
top: 9.5vh;

flex-direction: column;
.selecionarFormato{
    display: flex;
    align-items: center;
    margin: 0 0 0.1vw;
    button{
        width: 10vw;
        height: 2.4vw;
        border-radius: 5px 5px 0 0;
        margin: 0 0.5vw 0 0;
        cursor: pointer;
    }

}
.areaDasCartas{
    width: 100%;
    //background-color: blue;
    height: 100%;
    display: grid;
    grid-template-columns: 16vw 16vw 16vw 16vw 16vw; //repeat(auto-fill, 16vw);
    grid-column-gap: 0.1vw;
    grid-row-gap: 1vh;
    //justify-content: center;
    
    img{
    width: 16vw; //163 -> 0,704
    height: 22.72vw;
    }

}

`;
export default DeckBody