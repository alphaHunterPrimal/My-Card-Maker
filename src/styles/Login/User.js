import styled from 'styled-components';

const User = styled.div`

height: 3em;
width: 10vw;
background-color: blueviolet;
border-radius: 10px;
z-index: 2;
position: relative;
p {
    position: relative;
    text-decoration-line: underline;
}
button {
    background-color: blueviolet;
    position: relative;
    //bottom: 1vh;
    //width: 3vw;
    //height: 2.5vh;
    border-radius: 5px;
    font-size: 0.8em;
    height: 3.3em;
    width: 100%;
    cursor: pointer;
}

button + button {

    background-color: blueviolet;
    position: relative;
    height: 1.75em;
    font-size: 0.8em;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
}

`;
export default User;