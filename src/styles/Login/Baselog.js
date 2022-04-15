import styled from 'styled-components';

const Baselog = styled.div `
position: absolute;
right: 0;
width: 31em;
height: 35.6vh;
background-color: blueviolet;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding: 32.2vh 0;
header {
    display: flex;
flex-direction: column;
    align-items: center;
    font-size: 2.2vw;
    font-weight: 800;
    p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3vw;
    font-weight: 600;
    }
    
}
footer {
height: 7vh;
width: 9vw;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
margin: 1em 0 0 0;
 
.sair{
height: 5em;
width: 8em;
display: flex;
flex-direction: row;
padding: 10% 0 10% 0;
cursor: pointer;
background-color: rgba(138, 43, 226, 0.99);
text-align: center;
justify-content: center;

&:hover {
transform: scale(1.1);
transition: 0.2s;
};
}
}
`;

export default Baselog;