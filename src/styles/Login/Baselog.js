import styled from 'styled-components';

const Baselog = styled.div `
position: absolute;
left: 65%;
width: 35%;
height: 35%;
background-color: blueviolet;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding: 17.2% 0;
header {
    display: flex;
flex-direction: column;
    align-items: center;
    font-size: 2.2vw;
    font-weight: 800;
    p {
    font-size: 1vw;
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
 
.sair{
    height: 3.4vw;
width: 7vw;
display: flex;
cursor: pointer;
background-color: rgba(138, 43, 226, 0.99);
text-align: center;
justify-items: center;
justify-content: center;
align-content: center;
padding: 10% 0 0 0;
&:hover {
transform: scale(1.1);
transition: 0.2s;
};
}
}
`;

export default Baselog;