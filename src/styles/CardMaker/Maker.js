import styled from 'styled-components';

const Maker = styled.div `
width: 30%;
height: 100%;
background-color: blueviolet;

.tipo{
    display: block;
}; 
.statusDesc{
    display: flex;
    justify-content: space-around;
};
.statusM {
    display: flex;
    padding-left: 10px;
};
.buttonSave{
    display: flex;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    
};
input{
    height: 0.1vh;
    padding: 13px;
    font-size: 14px;
}
.salvar{
    width: 100px;
    height: 40px;
    justify-self: flex-end;
    font-weight: 600;
    margin-right: 4px;
};
.galeria{
    width: 100px;
    height: 40px;
    justify-self: flex-end;
    font-weight: 600;
};
.final{
    display: flex;
    margin-top: 20px;
    justify-content: center
}
.carta{
  width: 110px;
  margin-right: 5px;
}
.enviar{
    width: 100px;
    height: 30px;
    margin-left: 5px;
    font-weight: 600;
}
`;
export default Maker;