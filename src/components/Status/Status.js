import styled from 'styled-components';

const Status = styled.div `
display: flex;
justify-content: space-between;
/*padding: 20px 90px;*/

`;
Status.dano = styled.span `
background-color: red;
width: 50%;
text-align: center;
`;
Status.vida = styled.span `
background-color: green;
width: 50%;
text-align: center;
`;
export default Status;
