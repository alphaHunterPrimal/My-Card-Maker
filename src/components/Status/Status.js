import styled from 'styled-components';

const Status = styled.div `
display: flex;
justify-content: space-between;
position: absolute;
left: 107px;
bottom: 108px;
width: 308px;
height: 50.875px;
align-items: center;
z-index: 4;
/*padding: 20px 90px;*/

`;
Status.dano = styled.span `
width: 50%;
text-align: center;
`;
Status.vida = styled.span `
width: 50%;
text-align: center;
`;
export default Status;
