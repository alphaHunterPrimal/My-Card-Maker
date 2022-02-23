import styled from 'styled-components';

const Maker = styled.div `
width: 30%;
height: 90vh;
padding-top: 10vh;
background-color: blueviolet;
overflow: auto;
.selects1{
    display: block;
}
.selects2{
    
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    
    justify-content: space-around;
    margin: 0 0 8px;
}
.movimentos{
    margin: 0 3px 0;
}
.tipo{
    cursor: pointer;
    display: block;
}; 
.statusDesc{
    display: flex;
    justify-content: space-around;
};
.statusConstruct{
    display: flex;
    justify-content: center;
};
.statusM {
    display: flex;
    padding-left: 10px;
};
.statusMconstruct {
    display: flex;
    padding-left: 10%;
    
    justify-content: center;
    
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
    margin: 0 3px 0;
};
p{
    height: 2.5vh;
    font-size: 2.5vh;
    margin: 1vh 3px 1vh;
};
.direcoes{
    height: 2.5vh;
    font-size: 2.5vh;
    margin: 1vh 3px 1vh;
}
textarea{
    width: 22.7vw;
    margin: 0 3px 0;
}
.fonte-div{
    display: flex;
    align-items: center;
    height: 0.1vh;
    padding: 13px 0;
    margin: 5px 0;
    //width: 10vw;
    button{
        margin: 0 5px 0;
        cursor: pointer;
    }
    span{
        width: 9vw;
    }
    .palavraschave{
        /*position: absolute;
        right: 15vw;
        top: 43.3vh;*/
        z-index: 2;
        margin-left: 3vw;
        width: 10.3vw;
        align-items: center;
        justify-content: center;
        button{
            width: 10vw;
        }

    }
    .gridchaves{
        width: 5vw;
        
       /* position: absolute;
        right: -0.2vw;
        top: 3.3vh;*/
        margin: 0;
        /*display: grid;
        grid-template-columns: 5vw;
        grid-template-rows: auto;*/
        select{
            cursor: pointer;
            width: 10.1vw;
            margin: 0 0 0 0.32vw;
        }
    }
}
.fonte{
    width: 5vw;
    margin: 0 1.9vw 0 0;
}
.salvar{
    width: 100px;
    cursor: pointer;
    height: 40px;
    justify-self: flex-end;
    font-weight: 600;
    margin-right: 4px;
};
.galeria{
    cursor: pointer;
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
    cursor: pointer;
    width: 100px;
    height: 40px;
    margin-left: 5px;
    font-weight: 600;
}

.palinhado{
    display: flex;
    justify-content: center;
}
`;
export default Maker;