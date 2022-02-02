import styled from 'styled-components';

const DiVariante = styled.div` 
    //position: absolute;
    display: block;
    width: 110px;
    height: 80px;
   // left: 85vw;
   // top: 10vh;
    font-size: 1.4vw;//2.5vh

    .Gvariante{
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    width: 1vw;//100px
    height: 5vh;//70px
    input{
        cursor: pointer;
    }
    div{
        display: flex;
        width: 100%;
        justify-content: center;
        span{
            font-size: 1.5vw;
        }
    }
} 
`;
export default DiVariante;