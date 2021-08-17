import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`

width: 70%;
height: 1vh;
padding: 15px;
font-size: 14px;
`
export default function Input({onChange, placeholder, ...props}){
        return(
            <div>
                <InputBase
                 onChange={onChange} 
                 placeholder={placeholder}
                 {...props}
                 />
            </div>
        );
    }
    
    Input.defaultProps = { 
        value: '',
    };