import styled from 'styled-components';

const TopBar = styled.div`
display: flex;
flex-direction: column;
background-color: blueviolet;
justify-content: flex-end;

width: 100%;
height: 10vh;
z-index: 2;
//justify-content: flex-end;
padding: 0 0 6vh 0;

}
.informarFiltro{
    position: absolute;
    top: 10vh;
    height: 5vh;
    //left: 20%;
    width: 100%;
    display: flex;
    justify-content: center;

    .resolve-filter{
    //position: absolute;
    display: flex;
    width: 6vw;//80px;
    height: 100%;//40px
    //left: 23%;
    //top: 3vh; 
    justify-items: center;
    justify-content: space-around;
    background-color: blueviolet;
    margin: 0 0 0 2vw;
    div{
        background-color: blueviolet;
    }

    .aparecer{
    background-color: blueviolet;
     font-size: 2vh;
     cursor: pointer;
     border-radius: 8px;
     width: 8vw;//80px;
     height: 5.5vh;//40px
    background-color: white;
    justify-items: center;
    }



}
    span{
        font-size: 2vw;
    }



`;
export default TopBar