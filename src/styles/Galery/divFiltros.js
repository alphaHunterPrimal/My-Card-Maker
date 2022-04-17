import styled from 'styled-components';

const DivFiltros = styled.div `
border: 0;
margin: 0;
padding: 0;
z-index: 2;
.divExteriorDoMotion{
position: absolute;
display: flex;
flex-direction: column;
top: 9em;
right: 0;
z-index: 2;
width: 30%;
height: 38.5em;
background-color: rgba(180, 82, 209, 0.95);//#b452ff;
border-radius: 10px 0 0 0;
//animation: left 1s 0.1s both;
overflow: auto;
.principal{
    height: 10vh;
    width: 100%;
    display: flex;
    margin: 0vh 0 2em 0vw;
    flex-direction: column;
    justify-content: center;
    div{
        display: flex;
    }
    p{
        font-size: 1.8em;
        margin: 0vh 0.77em 0.5em 0.77em;
    }
    select{
        height: 2.3em;
        width: 4.5em;
        font-size: 1.2em;
    }
}
.submitar{
 font-size: 1.2em;
 cursor: pointer;
 border-radius: 8px;
 width: 4.5em;//6vw;
 height: 2.3em;//5.5vh;
background-color: white;
justify-items: center;
margin: 0 1vw 0 1vw;
}
.resetar{
cursor: pointer;
font-size: 1.2em;
 border-radius: 8px;
 width: 4.5em;//6vw;
 height: 2.3em;//5.5vh;
background-color: white;
justify-items: center;

}

.searchName{
    position: relative;
    height: 5em;
    width: 99%;
    display: flex;
    flex-direction: column;
    div{
        display: flex;
        width: 100%;
    }
    input{
        height: 0.5em;
        width: 90%;
        font-size: 1.2em;
        margin: none;
    }

}

.custos{
    position: relative;
    margin: 1em 0 0 0vw;
    height: 6.5em;//14vh;//
    width: 100%;
    //isplay: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div{
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
    p{
        
        justify-content: center;
        width: 25%;
        font-size: 1.75em;
        //margin: 0vh 0.3vw 1vh 0vw;
    }
    select{
        width: 25%;
        height: 2em;
        font-size: 1.25em;//1.3vw;
    }
    form{
        width: 25%;
    }


    .Gvariante{
    display: flex;
    flex-direction: column;
    
    justify-content:space-around;
    width: 25%;
    height: 2.4em;//5vh;//
    input{
        cursor: pointer;
        width: 1.8em;
    }
    div{
        //display: flex;
        width: 80%;
        justify-content: center;
        span{
            font-size: 1.3em;
        }
    }
} 
}

.movimentacao{
    position: relative;
    margin: 3em 0 5vh 0.25vw;
    height: 8vh;
    width: 45%;
    //display: flex;
    flex-direction: column;
    justify-content: center;
    div{
        display: flex;
        justify-content: space-around;
    }
    p{
        font-size: 1.8em;//2vw;
        //margin: 0vh 1.1vw 1vh 1.5vw;
    }
    select{
        height: 2.25em;
        margin: -1vh 0 0 0;
        font-size: 1.2em;
    }
}

.statusBase{
    position: relative;
    margin: 0vh 0 0 0.25em;
    height: 8em;
    
    width: 45%;
    display: flex;
    flex-direction: column;
    div{
        display: flex;
        justify-content: space-around;
    }
    p{
        font-size: 1.8em;//2vw;
        //margin: 0vh 1.5vw 1vh 1.5vw;
    }
    select{
        height: 2.25em;
        margin: -1vh 0 0 0;
        font-size: 1.2em;
    }
}

.palavrasChaveDiv{
    position: relative;
    margin: 3em 10vw 0 1.5%;
    width: 90%;
    display: flex;
    justify-content: space-around;
    p{
        height: 3em;//3vw;
        font-size: 1.8em;
    }
    .selectKey{
        margin: 0.5em 0 0 0;
        font-size: 1.3em;
    }
}

.arquetipoDiv{
    position: relative;
    margin: 2.5em 10vw 0 1.5%;
    height: 7em;
    width: 90%;
    display: flex;
    p{
        height: 3em;//3vw;
        font-size: 1.8em;
        //margin: 0vh 35% 1vh;
    }
    .selectArc{
        margin: 0.5em 0 0 0;
        font-size: 1.3em;
    }
}

.velocidadeDiv{
    position: relative;
    margin: 2em 10vw 0 0;
    height: 7em;
    width: 90%;
    display: flex;
    p{
        height: 3em;//3vw;
        font-size: 1.8em;
        margin: 0vh 0.25em 1vh;
        /*height: 3vw;
        font-size: 2vw;
        margin: 0vh 0.5vw 1vh;*/
    }
    select{
        margin: 0.5em 60% 0 0.25em;
        font-size: 1.3em;
    }
}}
`;
export default DivFiltros;