import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.6s ease-in-out;
`;

export const Content = styled.div`
  background-color: rgb(154, 208, 194);
  color: rgb(38, 80, 115);
  padding: 0.5rem 2rem 2rem 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.6s ease-in-out;
`;

export const ModalImg = styled.img`
  max-width: 100%;
  max-height: 70vh;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const ModalSpan = styled.span`
  align-self: flex-end;
  position: relative;
  left: 25px;
  bottom: 5px;
  cursor: pointer;
  font-size: larger;
`;
