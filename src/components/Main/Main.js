import styled from 'styled-components';

const Main = styled.div `
display: flex;
flex-direction: column;

/*align-items: center;*/
position: absolute;
top: auto;
z-index: 3;
.img1{
z-index: 5;
width: 308px;
height: 178px;
position: absolute;
left: 9px;
bottom: -9px;
/*bottom: 23.5px;*/
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
    top: 30px;
    padding-left: 5px;
    overflow: hidden;

};
.effectTrue{
    position: absolute;
    width: 302px;
    height: 188px;
    left: 9px;
    top: 30px;
    padding-left: 5px;
    overflow: hidden;
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
.virar{
    width: 18px;
    height: 18px;
}
`;
export default Main;