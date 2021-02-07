import styled from 'styled-components';
import db from '../../../db.json';
const {Bg, Bgatual, Background} = require('../../../Back.js')
//import BEg from '../../../Back.js' 

const Card = styled.div`
width: 326.625px;
height: 463.875px;
display: flex;
flex-direction: column;
justify-content: space-around;
background-image: url(${Background(Bgatual)})/*url(${db.bg.spell})*/;
background-size: 326.625px 463.875px;
/*border: 5px solid gold; */
`;
export default Card;