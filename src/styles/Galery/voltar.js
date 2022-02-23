import styled from 'styled-components';

const Voltar = styled.a`
display: flex;
position: absolute;
top: 1vh;
left: 0;
height: 3.4vw;
width: 7vw;
background-color: blueviolet;
text-align: center;
justify-content: center;
align-content: center;
cursor: pointer;
&:hover{
        
        transform: scale(1.1);
        transition: 0.3s;
        }

`;
export default Voltar;