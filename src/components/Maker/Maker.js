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

.salvar{
    width: 100px;
    height: 40px;
    justify-self: flex-end;
    font-weight: 600;
};
`;
export default Maker;