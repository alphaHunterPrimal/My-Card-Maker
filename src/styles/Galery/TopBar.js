import styled from 'styled-components';

const TopBar = styled.div`
display: flex;
flex-direction: column;
background-color: blueviolet;

width: 100vw;
height: 20vh;
z-index: 2;
justify-content: flex-end;
padding: 0 0 5vh 0;
.resolve-filter{
    position: absolute;
    display: flex;
    width: 14vw;//80px;
    height: 11vh;//40px
    left: 0vw;
    top: 17.5vh; 
    justify-items: center;
    justify-content: space-around;
}
.submitar{
 font-size: 2vh;
 cursor: pointer;
 border-radius: 8px;
 width: 6vw;//80px;
 height: 5.5vh;//40px
background-color: white;
justify-items: center;
 

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

`;
export default TopBar