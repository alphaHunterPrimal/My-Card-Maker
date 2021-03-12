import styled from 'styled-components';

const Top = styled.div `
display: flex;
width: 326.625px;
height: 63px;
align-items: center;
position: absolute;
top: 97px;
z-index: 3;
font-weight: 600;
.custo1{
    color: black;
    position: absolute;
    text-align:center;
    width: 10%;
    left: 10px;
    top: 10px;
    
};
.custo2{
    color: black;
    position: absolute;
    justify-self: center;
    text-align: center;
    left: 30px;
    
    /*top: 25px;*/
}
.ganho{
    color: black;
    position: absolute;
    width: 10%;
    text-align: center;
    left: 29px;
    top: 32px;
    
};
.nome1{
    
    position: absolute;
    font-size: 19px;
    max-width: 195px;
    overflow: hidden;
    text-align: center;
    justify-self: center;
    left: 70px;
};
.nome2{
    
    position: absolute;
    font-size: 15px;
    max-width: 195px;
    overflow: hidden;
    text-align: center;
    justify-self: center;
    left: 70px;
};
.nomeQueen{
    font-weight: 800;
    color: black;
    position: absolute;
    font-size: 28px;
    width: 300px;
    overflow: hidden;
    text-align: center;
    white-space: nowrap;
    left: 10px;
};
.nomeQueen2{
    font-weight: 800;
    color: Black;
    position: absolute;
    font-size: 20px;
    width: 300px;
    overflow: hidden;
    text-align: center;
    white-space: nowrap;
    left: 10px;
};
.mov{
    color: white;
    font-size: 20px;
    
    position: absolute;
    width: 10%;
    text-align: center;
    left: 281px;
    right: 0px;
    
}
`;

export default Top;