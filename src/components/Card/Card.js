import styled from 'styled-components';
import React from 'react';
/*const {Background} = require('../../../Back.js'); */
const {Bg} = require('../../../Back.js') ;
var {Bgatual} = require('../../../Back.js') 
/*var {BgAtual} = require('../../../pages/index')*/

/*function Cardy(){
    const [carta, setCarta] = React.useState('');
    setCarta(Bgatual);
return carta} */

    const Card = styled.div`
    width: 326.625px;
    height: 463.875px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /*background-image: url(${Bgatual}) url(${db.bg.spell});
    background-size: 326.625px 463.875px;*/
    `;    


export default Card;