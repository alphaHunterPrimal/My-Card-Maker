import styled from 'styled-components';

const Top = styled.div `
display: flex;
width: 326.625px;
height: 63px;
/*justify-content: space-around;*/
align-items: center;
position: absolute;
/*position: inherit;*/
top: 97px;
z-index: 3;
.custo1{
    color: black;
    position: absolute;
    left: 20px;
    top: 10px;
};
.custo2{
    color: black;
    position: absolute;
    justify-self: center;
    left: 30px;
    /*top: 25px;*/
}
.ganho{
    color: blue;
    position: absolute;
    left: 40px;
    top: 30px;
};
.nome1{
    color: red;
    position: absolute;
    font-size: 19px;
    max-width: 195px;
    overflow: hidden;
    text-align: center;
    justify-self: center;
    left: 70px;
};
.nome2{
    color: red;
    position: absolute;
    font-size: 15px;
    max-width: 195px;
    overflow: hidden;
    text-align: center;
    justify-self: center;
    left: 70px;
};
.nomeQueen{
    color: blue;
    position: absolute;
    font-size: 28px;
    width: 300px;
    overflow: hidden;
    text-align: center;
    white-space: nowrap;
    left: 10px;
};
.nomeQueen2{
    color: blue;
    position: absolute;
    font-size: 20px;
    width: 300px;
    overflow: hidden;
    text-align: center;
    white-space: nowrap;
    left: 10px;
};
.mov{
    color: red;
    font-weight: 600;
    position: absolute;
    left: 293px;
    right: 0px;
}
`;

export default Top;