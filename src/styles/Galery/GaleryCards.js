import styled from 'styled-components';

const GaleryCards = styled.div`
display: grid;
position: absolute;
top: 9em;
width: calc(90vw + 60px);
//padding: 4vh 0 0 0;
height: 36em;
z-index: 1;
/*justify-content: flex-start;*/
padding: 5vh calc(5vw - 30px) 0 calc(5vw - 30px);
grid-template-columns: repeat(auto-fill, 18em);//repeat(auto-fill, 20vw);//
grid-column-gap: 0.65em;//0.7vw;//
grid-row-gap: 1.5em;//3vh;//
justify-content: center;
overflow: auto;
button{
    width: 21.6em;//20vw;// //163 -> 0,704
    height: 30.672em;//28.4vw;//
    justify-self: center;
    align-self: center;
    cursor: pointer;
    border: none;
    
    img{
        width: 100%;
        height: 100%;

}
}



`;
export default GaleryCards