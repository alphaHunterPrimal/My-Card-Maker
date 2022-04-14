import styled from 'styled-components';

const Status = styled.div `
display: flex;
justify-content: space-between;
margin-top: 21em;
width: 20.4em;
height: 2em;
//padding: 0 0.5vw;
align-items: center;
font-weight: 600;

z-index: 4;
/*padding: 20px 90px;*/

`;
Status.dano = styled.span `
margin: 0 0 0 0.2em;
width: 11%;
height: 100%;
display: flex;
text-align: center;
justify-content: center;
`;
Status.vida = styled.span `
margin: 0 0.25em 0 0;
width: 11%;
height: 100%;
display: flex;
text-align: center;
justify-content: center;

`;
export default Status;
