import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background-color: rgb(154, 208, 194);
  color: rgb(38, 80, 115);
  padding: 0.5rem 2rem 2rem 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

export const ModalImg = styled.img`
  max-width: 100%;
  max-height: 70vh;
`;

export const ModalSpan = styled.span`
  align-self: flex-end;
  position: relative;
  left: 25px;
  bottom: 5px;
  cursor: pointer;
  font-size: larger;
`;
