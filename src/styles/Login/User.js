import styled from 'styled-components';

const User = styled.div`
/*position: absolute;
top: 1vh;
left: 1vw;*/
height: 6vh;
width: 10vw;
background-color: blueviolet;
border-radius: 10px;
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
    height: 6vh;
    width: 100%;
    cursor: pointer;
}

button + button {
    
    background-color: blueviolet;
    position: relative;
    height: 3vh;
    //bottom: 1vh;
    width: 10vw;
    //height: 2.5vh;
    border-radius: 5px;
    cursor: pointer;
    animation: down 0.1s 0.1s both;
}
@keyframes down {
    from {
        opacity:0;
        transform: translateY(-15px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
 }
`;
export default User;