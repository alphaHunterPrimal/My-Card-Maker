import styled from 'styled-components';

const Baselog1 = styled.div `
position: absolute;
left: 65%;
width: 35%;
height: 35%;
background-color: rgba(138, 43, 226, 0.97);
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding: 17.2% 0;
box-shadow: 0 0 30px black;
header {
    display: flex;
flex-direction: column;
    align-items: center;
    font-size: 2.2vw;
    font-weight: 800;
    strong{
        text-decoration-line: underline;
    }
    p {
    background-color: rgba(138, 43, 226, 0.99);
    border: 1px solid;
    border-radius: 5px;
    font-size: 1.2vw;
    font-weight: 600;
    }
    
}
footer {
position: relative;
bottom: 9vh;
height: 7vh;
width: 9vw;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
.Section{
    cursor: pointer;
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: space-evenly;
    height: 3.4vw;
    width: 15vw;
    border-radius: 10px;
    box-shadow: 0 0 5px black;
    margin: 1vh 0 1vh 0;
    &:hover {
transform: scale(1.1);
transition: 0.4s;
box-shadow: 0 0 8px black;
};
    img{
        width: 2.5vw;
        height:4.8vh;
    }
}
}
`;

export default Baselog1;