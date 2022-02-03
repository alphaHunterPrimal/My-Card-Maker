import styled from 'styled-components';

const DivFiltros = styled.div `
position: absolute;
//display: flex;
flex-direction: column;
top: 15vh;
right: 0;
z-index: 1;
width: 30%;
height: 85vh;
background-color: rgba(180, 82, 209, 0.95);//#b452ff;
border-radius: 10px 0 0 0;
animation: left 1s 0.1s both;
overflow: auto;
.principal{
    height: 10vh;
    width: 100%;
    display: flex;
    margin: 0vh 0 2vw 0vw;
    flex-direction: column;
    div{
        display: flex;
    }
    p{
        font-size: 2vw;
        margin: 0vh 1.5vw 1vh 1.5vw;
    }
    select{
        font-size: 1.3vw;
    }
}
.submitar{
 font-size: 2vh;
 cursor: pointer;
 border-radius: 8px;
 width: 6vw;//80px;
 height: 5.5vh;//40px
background-color: white;
justify-items: center;
margin: 0 1vw 0 1vw;
}
.resetar{
cursor: pointer;
 font-size: 2vh;
 border-radius: 8px;
 width: 6vw;//80px;
 height: 5.5vh;//40px
background-color: white;
justify-items: center;

}

.searchName{
    position: relative;
    height: 10vh;
    width: 99%;
    display: flex;
    flex-direction: column;
    div{
        display: flex;
        width: 100%;
    }
    input{
        width: 90%;
        font-size: 1.2vw;
        margin: none;
    }

}

.custos{
    position: relative;
    margin: 1vh 0 0 0vw;
    height: 14vh;
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
        font-size: 1.9vw;
        //margin: 0vh 0.3vw 1vh 0vw;
    }
    select{
        width: 25%;
        font-size: 1.3vw;
    }
    form{
        width: 25%;
    }


    .Gvariante{
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    width: 25%;//100px
    height: 5vh;//70px
    input{
        cursor: pointer;
        width: 1.5vw;
    }
    div{
        //display: flex;
        width: 80%;
        justify-content: center;
        span{
            font-size: 1.5vw;
        }
    }
} 
}

.movimentacao{
    position: relative;
    margin: 5vh 0 5vh 0.25vw;
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
        font-size: 2vw;
        //margin: 0vh 1.1vw 1vh 1.5vw;
    }
    select{
        margin: -1vh 0 0 0;
        font-size: 1.3vw;
    }
}

.statusBase{
    position: relative;
    margin: 0vh 0 0 0.25vw;
    height: 10vh;
    width: 45%;
    display: flex;
    flex-direction: column;
    div{
        display: flex;
        justify-content: space-around;
    }
    p{
        font-size: 2vw;
        //margin: 0vh 1.5vw 1vh 1.5vw;
    }
    select{
        margin: -1vh 0 0 0;
        font-size: 1.3vw;
    }
}

.palavrasChaveDiv{
    position: relative;
    margin: 5vh 10vw 0 1.5%;
    width: 90%;
    display: flex;
    justify-content: space-around;
    p{
        height: 3vw;
        font-size: 2vw;
    }
    .selectKey{
        margin: 1vh 0 0 0;
        font-size: 1.3vw;
    }
}

.arquetipoDiv{
    position: relative;
    margin: 5vh 10vw 0 1.5%;
    height: 10vh;
    width: 90%;
    display: flex;
    p{
        height: 3vw;
        font-size: 2vw;
        //margin: 0vh 35% 1vh;
    }
    .selectArc{
        margin: 1vh 0 0 0;
        font-size: 1.3vw;
    }
}

.velocidadeDiv{
    position: relative;
    margin: 5vh 10vw 0 0;
    height: 10vh;
    width: 90%;
    display: flex;
    p{
        height: 3vw;
        font-size: 2vw;
        margin: 0vh 0.5vw 1vh;
    }
    select{
        margin: 1vh 60% 0 0.5vw;
        font-size: 1.3vw;
    }
}
@keyframes left {
    from {
        opacity:0;
        transform: translateX(30vw);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
 }

`;
export default DivFiltros;