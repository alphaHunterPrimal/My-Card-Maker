import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`

width: 70%;
height: 1vh;
padding: 15px;
font-size: 14px;

`

const InputDiv = styled.div`
//position: relative;
display: flex;
width: 100%;
//height: 3vh;
//padding: 5px;
//justify-self: center;
//align-self: center;
//justify-content: center;
`
export default function Input({onChange, placeholder, ...props}){
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
    
    Input.defaultProps = { 
        value: '',
    };