
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
const Modal = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = React.useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);
  
    const handleCloseClick = (e) => {
      e.preventDefault();
      onClose();
    };
  
    const modalContent = show ? (
        <A href="#" onClick={handleCloseClick}>
      <StyledModalOverlay>
          
        <StyledModal>
        {/*
          <StyledModalHeader>
          </StyledModalHeader>*/}
          {title && <StyledModalTitle>{title}</StyledModalTitle>}
          <StyledModalBody>    
          {children}
              </StyledModalBody>
              
        </StyledModal>
        
      </StyledModalOverlay>
      </A>
    ) : null;
  
    if (isBrowser) {
      return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
      );
    } else {
      return null;
    }
  };
  
  const A = styled.a`
  cursor: pointer;
      
  @keyframes appear {
    from {
        opacity:0;
        //transform: translateY(-15px);
    }

    to {
        opacity: 1;
        //transform: translateY(0);
    }
 }
  
  `;
  const StyledModalBody = styled.div`
    //padding-top: 3vh;
    display: flex;
    justify-content: center;
    //padding: 0;
    width: 90%;
    height: 90%;
    img{
        width: 100%;
        height: 100%;
    }


  `;
  
  const StyledModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 3vw;
    
    width: 95%;

  `;
  
  const StyledModal = styled.div`
  display: flex;
    background: white;
    border: none;
    width: 27em;//30vw;//500px;
    height: 36em;//40vw;//600px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    animation: appear 0.15s 0.1s both;
    //padding: 5px;
  `;
  const StyledModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.5);

    
    `;


  
  export default Modal;