import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`

width: 70%;
height: 1vh;
padding: 15px;
font-size: 20px;
font-weight: 600;

`

const InputDiv = styled.div`
//position: relative;
display: flex;
//width: 100%;
//height: 1vh;
//padding: 15px;
//justify-self: center;
//align-self: center;
justify-content: center;
margin: 3px;
`
export default function Inputlog({onChange, placeholder, ...props}){
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
    
    Inputlog.defaultProps = { 
        value: '',
    };