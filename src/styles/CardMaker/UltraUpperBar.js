import styled from 'styled-components';

    const UltraUpperBar = styled.div`
    width: 100%;
    position: absolute;
    height: 9vh;
    top: 0;
    background-color: blueviolet;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    //box-shadow: 2px 2px rgb(0, 0, 0, 0.7);
    header{
        display: flex;
    align-items: center;

    }
    .botõesDePush{
        width: 20vw;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        button{
            background-color: blueviolet;
            width: 9vw;
            height: 50%;
            border-radius: 10%;
            cursor: pointer;
            margin: 0 2vw 0 0;
        }
    }
    `;    


export default UltraUpperBar;