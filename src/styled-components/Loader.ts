import styled from 'styled-components';

export const Loader = styled.div`
  position: fixed;
  bottom: 1rem;
  width: 14px;
  aspect-ratio: 1;
  background: rgb(45, 149, 150);
  border-radius: 50%;
  animation: l6 1s infinite linear alternate;

  @keyframes l6 {
    0% {
      box-shadow: rgb(154, 208, 194) 15px 0, rgb(154, 208, 194)-25px 0;
    }
    50% {
      box-shadow: rgb(154, 208, 194) 15px 0, rgb(154, 208, 194) -15px 0;
    }
    100% {
      box-shadow: rgb(154, 208, 194) 25px 0, rgb(154, 208, 194) -15px 0;
    }
  }
`;
