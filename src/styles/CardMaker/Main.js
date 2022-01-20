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
height: 178px;
position: absolute;
left: 9px;
bottom: -9px;

};

.imgRainha{
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
    height: 160px;
    left: 9px;
    top: 35px;
    
    padding-left: 5px;
    overflow: hidden;

};
.effect > p{
    font-size: 6px;
};
.effectTrue{
    position: absolute;
    width: 302px;
    height: 188px;
    left: 9px;
    top: 35px;
    
    padding-left: 5px;
    overflow: hidden;
    
};
.effectTrue > p{
    font-size: 6px;
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
.Rápido{
    color: #FFD700;
    font-weight: 800;
}
.Aterrar{
    color: rgb(139,69,19);
};
.Nascer{
    color: green;
};
.Morrer{
 color: #363636;
};
.Invocar{
    color: #00868B;
};
.Voar, .Imediato, .Celeridade, .Pronto, .Puro{
    color: #00BFFF;
};
.Comprar{
    color: #00CED1;
};
.Manutenção{
    color: #8B8B7A;
}
.Atroz{
    color: #EE0000;
};
.Inicial{
    color: #FF4500;
};
.Meta{
    color: #20B2AA;
};
.Ameaçador{
    color: #FF0000;
}
.virar, .time, .mineral, .quadrado, .tempo, .alcance{
    width: 18.5px;
    height: 18.5px;
    ;};
.resistencia{
    width: 23.5px;
    height: 18.5px;
}
.arrow1{
    width: 20px;
    height: 20px;
}

`;
export default Main;