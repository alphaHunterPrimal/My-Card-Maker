import styled from 'styled-components';

const Cadastro = styled.button`
height: 3.4vw;
width: 15vw;
margin: 10px 0 0 0;
border: none;
cursor: pointer;
display: flex;
background-color: blueviolet;
text-align: center;
justify-content: center;
align-content: center;
font-size: 1.3vw;
&:hover {
    color: blue;
    transform: scale(1.1);
    text-decoration: underline;
};
`;
export default Cadastro;