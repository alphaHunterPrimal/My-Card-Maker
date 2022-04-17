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
top: 4.1em;
right: 0;
z-index: 2;
width: 30em;
height: 50em;
background-color: rgba(180, 82, 209, 0.95);//#b452ff;
border-radius: 10px 0 0 0;
//overflow: auto;

.principal{
    height: 10vh;
    width: 100%;
    display: flex;
    padding: 0vh 0 1.8em 0vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    .principal-p{
        display: flex;
        width:15em;
        height: 2em;
        //background-color: red;
        //justify-content: space-around;
        align-content: center;
        align-items: center;
        margin: 1em 6em 0 0;
        p{
        width: 5em;//10vw;
        font-size: 1.8em;
        margin: 0 4em 0.2em 0;
    }
}
.principal-area{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3em;
        width: 93%;
        select{
        width: 6.15em;//8vw;//
        font-size: 1.2em;
        margin: 0vh 1.15em 0.4em 1.15em;
        height: 2em;
    }
    .submitar{
    background-color: red;
 font-size: 1.2em;//1.2em;
 cursor: pointer;
 border-radius: 8px;
 width: 4.7em;
 height: 2.4em;
background-color: white;
justify-items: center;
margin: 0 0.5em 0 0.5em;
}

    }
}

.searchName{
    position: relative;
    height: 3em;
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
    }/*
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
    }*/

}

.divCartas{
    margin-top: 5em;
        width: 100%;
        height: 35.5em;
        display: flex;
        flex-direction: column;
        //overflow: auto;
        align-items: center;
        justify-content: center;
        .repetirCartas{
            width: 95%;
            height: 100%;
            display: flex;
            //align-items: center;
            overflow: auto;
            flex-direction: column;

            //justify-content: center;
            //border: 1px solid;
            div{

                width: 100%;
                height: 3.8em;// 8vh;//
                border: 1px  0px solid;
                display: flex;
                

                span{
                width: 10em;//10vw;//
                height: 8em;
                overflow: hidden;
                margin: 0 9em 0 0;
            }
            button{
                width: 3.05em;//10%;//
                height: 2em;//50%;//
                font-size: 1em;
                margin: 0 0.7em 0 0;
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