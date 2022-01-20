import styled from 'styled-components';

const Logar = styled.a`
height: 3.4vw;
width: 7vw;
margin: 10px 0 0 0;
display: flex;
cursor: pointer;
background-color: red;
text-align: center;
justify-content: center;
align-content: center;
transform: rotate(180deg);
&:hover {
transform: scale(1.1) rotate(180deg);
transition: 0.2s;
};
`;
export default Logar;