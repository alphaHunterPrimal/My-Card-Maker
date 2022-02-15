import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`

width: 100%;
height: 1vh;
padding: 15px;
font-size: 20px;
font-weight: 600;

`

const InputDiv = styled.div`
//position: relative;
display: flex;
flex-direction: row;
//width: 100%;
//height: 1vh;
//padding: 15px;
//justify-self: center;
//align-self: center;
align-items: center;
justify-content: flex-start;
//margin: 3px;
`
export default function InputPassword({onChange, placeholder, ...props}){
        return(
            <InputDiv>
                <InputBase
                 onChange={onChange} 
                 placeholder={placeholder}
                 {...props}
                 />
            </InputDiv>
        );
    }
    
    InputPassword.defaultProps = { 
        value: '',
    };