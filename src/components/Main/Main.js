import styled from 'styled-components';

const Main = styled.div `
display: flex;
flex-direction: column;
position: absolute;
top: auto;
z-index: 3;
.img1{
z-index: 5;
width: 308px;
height: 179px;
position: absolute;
left: 9px;
bottom: -9px;

};

.imgQueen{
z-index: 5;
width: 308px;
height: 178px;
position: absolute;
left: 9px;
bottom: -7px;
};
.desc{
    position: absolute;
    width: 298px;
    height: 17px;
    left: 9px;
    top: -6.5px;
    padding-left: 5px;
    overflow: hidden;
};
.effect{
    position: absolute;
    width: 302px;
    height: 138px;
    left: 9px;
    top: 35px;
    line-height: 18.5px;
    padding-left: 5px;
    overflow: hidden;


};
.effect > p{
    font-size: 10px;
};
.effectTrue{
    position: absolute;
    width: 302px;
    height: 188px;
    left: 9px;
    top: 35px;
    line-height: 18.5px;
    padding-left: 5px;
    overflow: hidden;

};
.effectTrue > p{
    font-size: 10px;
};

.Destruir{
    color: red;
};
.Obliterar{
    color: black;
};
.Temporaria{
    color: blue;
};
.Aterrar{
    color: rgb(139,69,19);
};
.virar{
    width: 20px;
    height: 20px;
};
.time{
    width: 20px;
    height: 20px;
};
`;
export default Main;