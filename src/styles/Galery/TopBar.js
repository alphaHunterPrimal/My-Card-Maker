import styled from 'styled-components';

const TopBar = styled.div`
display: flex;
flex-direction: column;
background-color: blueviolet;
justify-content: flex-end;
position: absolute;
top: 4em;
width: 100%;
height: 5em;
z-index: 2;
//padding: 0 0 3em 0;

}
.informarFiltro{
    //position: absolute;
    //top: 10vh;
    height: 100%;
    //left: 20%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .resolve-filter{
    //position: absolute;
    display: flex;
    width: 6vw;//80px;
    height: 100%;//40px
    //left: 23%;
    //top: 3vh; 
    justify-items: center;
    align-items: center;
    justify-content: space-around;
    background-color: blueviolet;
    margin: 0 0 0 2em;
    div{
        background-color: blueviolet;
    }

    .aparecer{
    padding: 0 1em;
    background-color: blueviolet;
     font-size: 1em;
     cursor: pointer;
     border-radius: 8px;
     width: 7em;//80px;
     height: 2.5em;//40px
    background-color: white;
    justify-items: center;
    }



}
    span{
        font-size: 2vw;
    }



`;
export default TopBar