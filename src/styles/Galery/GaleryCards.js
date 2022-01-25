import styled from 'styled-components';

const GaleryCards = styled.div`
display: grid;

width: calc(90vw + 60px);
//height: 75vh;
z-index: 2;
/*justify-content: flex-start;*/
padding: 6vh calc(5vw - 30px);
grid-template-columns: repeat(auto-fill, 20vw);
grid-column-gap: 0.7vw;
grid-row-gap: 3vh;
justify-content: center;

    img{
    width: 20vw; //163 -> 0,704
    height: 28.4vw;
    justify-self: center;
    align-self: center;
    cursor: pointer;
    border: none;
        &:hover {
        padding: 0;
        transform: scale(1.4);
        transition: 0.3s;
};
    }


`;
export default GaleryCards