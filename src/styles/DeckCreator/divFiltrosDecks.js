import styled from 'styled-components';

const DivFiltrosDecks = styled.div `
border: 0;
margin: 0;
padding: 0;
z-index: 1;
.divExteriorDoMotion{
position: absolute;
display: flex;
flex-direction: column;
top: 10vh;
right: 0;
z-index: 1;
width: 30%;
height: 90vh;
background-color: rgba(180, 82, 209, 0.95);//#b452ff;
border-radius: 10px 0 0 0;
//animation: left 1s 0.1s both;
overflow: auto;
/*.filtroSuperior{
    width: 100;
    display: flex;
    align-items: center;
    justify-content: space-around;
}*/
.principal{
    height: 10vh;
    width: 100%;
    display: flex;
    margin: 0vh 0 2vw 0vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
        display: flex;
    }
    p{
        width: 10vw;
        font-size: 2vw;
        margin: 0vh 1.5vw 1vh 0;
    }
    select{
        width: 8vw;
        font-size: 1.3vw;
        margin: 0vh 1.5vw 1vh 1.5vw;
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
.divCartas{
    margin-top: 5vh;
        width: 100%;
        height: 20vh;
        display: flex;
        flex-direction: column;
        //overflow: auto;
        align-items: center;
        justify-content: center;
        .repetirCartas{
            width: 95%;
            height: 45vh;
            display: flex;
            //align-items: center;
            overflow: auto;
            flex-direction: column;

            //justify-content: center;
            //border: 1px solid;
            div{
                width: 100%;
                height: 8vh;
                border: 1px  0px solid;
                display: flex;
                

                span{
                    width: 10vw;
                height: 8vh;
                overflow: hidden;
                margin: 0 10vw 0 0;
            }
            button{
                width: 10%;
                height: 50%;
                font-size: 1vw;
                margin: 0 1vw 0 0;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                width: 100%;
                height: 100%;

                }
            }
            }


        }

    }
}
`;
export default DivFiltrosDecks;