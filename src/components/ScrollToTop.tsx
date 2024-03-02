import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ScrollUpButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: block;
  background-color: rgb(241, 250, 218, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  transition: opacity 0.3s;
  z-index: 9999;

  &:hover {
    background-color: rgb(154, 208, 194);
  }
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const scrollY = window.scrollY;
    console.log('Scroll Position: ', scrollY);
    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && <ScrollUpButton onClick={scrollToTop}>🔝</ScrollUpButton>}
    </>
  );
};

export default ScrollToTop;
