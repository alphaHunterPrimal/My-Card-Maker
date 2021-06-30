import styled from 'styled-components';

const GaleryCards = styled.div`
display: grid;

width: calc(90vw + 60px);
height: 75vh;
z-index: 2;
/*justify-content: flex-start;*/
padding: 6vh calc(5vw - 30px);
grid-template-columns: repeat(auto-fill, 163px);
grid-column-gap: 5px;
justify-content: center;
img{
    width: 163px;
    height: 231.5px;
}

`;
export default GaleryCards