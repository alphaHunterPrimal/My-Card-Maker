import styled from 'styled-components';

const Campolog = styled.div `
display: flex;
flex-direction: column;
justify-items: space-around;
align-self: center;
z-index: 2;
.senha{
    /*position: absolute;
    top: 53vh;
    right: 9.2vw;*/
    z-index: 2;
    width: 100%;
    display: flex;
    border: none;
    justify-content: center;
    align-items: center;
    div{
        width: 68%;
        margin: 3px 0 3px 0;
        padding: 0;
        input{
            width: 110%;
            margin: 0;
        }
    }
    button{
        //background-color: transparent;
        display: flex;
        border: none;
        cursor: pointer;
        width: 2.8em;
        height: 3em;
        justify-content: center;
        align-items: center;
        img{
        background-color: transparent;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    }

}
`;

export default Campolog;