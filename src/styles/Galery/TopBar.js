import styled from 'styled-components';

const TopBar = styled.div`
display: flex;
flex-direction: column;
background-color: blueviolet;

width: 100vw;
height: 25vh;
z-index: 1;
justify-content: flex-end;
.submitar{
 font-size: 2vh;
 position: absolute;
 border-radius: 8px;
 width: 6vw;//80px;
 height: 5.5vh;//40px
background-color: white;
justify-items: center;
left: 3vw;
top: 22vh;  

}

`;
export default TopBar