import styled from 'styled-components';

const Status = styled.div `
display: flex;
justify-content: space-between;
position: absolute;
left: 95px;
bottom: 100px;
width: 308px;
height: 45px;
align-items: center;
font-weight: 600;
z-index: 4;
/*padding: 20px 90px;*/

`;
Status.dano = styled.span `
position: absolute;
width: 10%;
left: 10px;
text-align: center;
`;
Status.vida = styled.span `
position: absolute;
width: 10%;
right: -13px;
text-align: center;

`;
export default Status;
