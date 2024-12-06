import styled from 'styled-components';
import { verde } from '../constants/constants';



export const StyledMenuMobile = styled.div`
  position: fixed; 
  top: 100px; 
  width: 100%;
  /* height: calc(50vh - 100px); */
  background-color: #000000;
  z-index: 999; 
 
  pointer-events: none;
  transition: 0.5s;
  color: #ffffff;
  
    opacity: ${(props) => (props.mobile === 'true' ? 1 : 0)};
    pointer-events: auto;
    transition: 0.7s;
    transform: translateX(0);
    
  .nav-lista {
    text-align: center;
    color: #ffffff;
  }

  nav {
    width: 100%;
    height: 100%;
    color: #ffffff;
    flex-direction: column;
    transform: scale(1);
    transition: 1s;
    
    gap: 1rem;

    display: flex;
    align-items: start;
    justify-content: center;
  }

  a {
    font-weight: 200;
    text-decoration: none;
    list-style: none;
    display: block;
    padding: 20px 30px;
    font-size: 16px;
    color: #ffffff;

    &:hover {
      background-color: ${verde};
      width: 100%;
      transition: 1s;
    }
  }

  #cxicones{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .circuloIcone{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ffffff;

    display: flex; 
    align-items: center;
    justify-content: center;
  }
  .icone{
    font-size: 1.5rem;
    color: #000000;
  }

`;
