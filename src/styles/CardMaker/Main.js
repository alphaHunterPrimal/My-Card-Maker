import styled from 'styled-components';

const Main = styled.div `
display: flex;
flex-direction: column;
position: absolute;
top: auto;
z-index: 3;
.img1{
z-index: 5;
width: 19.25em;
height: 11.1em;//178px;
position: absolute;
left: 0.6em;
bottom: -0.5em; //5px

};

.imgRainha{
z-index: 5;
width: 19.25em;
height: 11.2em;//178px;
position: absolute;
left: 0.6em;
bottom: -0.5em;
};
.desc{
    position: absolute;
    width: 18.9em;
    height: 1em;
    left: 0.6em;
    top: -0.4em;
    padding-left: 0.1em;
    overflow: hidden;
};
.effect{
    position: absolute;
    width: 15.2em;
    height: 10em;
    left: 0.2em;
    top: 2.1em;
    
    padding-left: 0.4em;
    overflow: hidden;

};
.effect > p{
    font-size: 0.3em;
};
.effectTrue{
    position: absolute;
    width: 15.2em;
    height: 12.1em;
    left: 0.2em;
    top: 2.1em;
    
    padding-left: 0.4em;
    overflow: hidden;
    
};
.effectTrue > p{
    font-size: 0.3em;
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
.Nascer, .Ressurgir, .Enxame{
    color: green;
};
.Morrer{
 color: blueviolet;//#363636;
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
    width: 1em;
    height: 1em;
    ;};
.quebrar-cristal{
    width: 0.85em;
    height: 0.85em;
}
.resistencia{
    width: 1em;
    height: 1em;
}
.arrow1{
    width: 20px;
    height: 20px;
}

`;
export default Main;