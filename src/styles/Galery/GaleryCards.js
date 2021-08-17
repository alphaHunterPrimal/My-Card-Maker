import styled from 'styled-components';

const GaleryCards = styled.div`
display: grid;

width: calc(90vw + 60px);
height: 75vh;
z-index: 2;
/*justify-content: flex-start;*/
padding: 6vh calc(5vw - 30px);
grid-template-columns: repeat(auto-fill, 18vw);
grid-column-gap: 0.7vw;
grid-row-gap: 3vh;
justify-content: center;
img{
    width: 15vw; //163 -> 0,704
    height: 21.3vw;
    justify-self: center;
    align-self: center;
}

`;
export default GaleryCards