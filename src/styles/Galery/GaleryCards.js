import styled from 'styled-components';

const GaleryCards = styled.div`
display: grid;

width: calc(90vw + 60px);
//padding: 4vh 0 0 0;
height: 80vh;
z-index: 2;
/*justify-content: flex-start;*/
padding: 5vh calc(5vw - 30px) 0 calc(5vw - 30px);
grid-template-columns: repeat(auto-fill, 20vw);
grid-column-gap: 0.7vw;
grid-row-gap: 3vh;
justify-content: center;
overflow: auto;
button{
    width: 20vw; //163 -> 0,704
    height: 28.4vw;
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