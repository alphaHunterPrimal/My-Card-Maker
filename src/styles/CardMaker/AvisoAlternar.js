import styled from 'styled-components';

    const AvisoAlternar = styled.div`
    height: 6vh;
    width: 12.9vw;
    background-color: blueviolet;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 2px 2px black;
    margin: 0 2vw 0 0;
    p{
        display: flex;
        width: 10vw;
        height: 6vh;
        align-items: center;
        justify-content: center;
        font-size: 1vw;
        
    }
    button {
    //background-color: blueviolet;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    //bottom: 1vh;
    border-radius: 20%;
    height: 3vw;
    width: 3vw;
    font-size: 1.5vw;
    cursor: pointer;
}
    `;    


export default AvisoAlternar;