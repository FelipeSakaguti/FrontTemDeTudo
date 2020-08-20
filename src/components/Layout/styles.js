import styled from 'styled-components';

import { Menu } from '../../styles/Icons'

export const Container = styled.div`
    background: var(--primary);
    height: 100vh;
 `;

export const Wrapper = styled.div`
   height: 100%;
   max-width: 100%;
   margin: 0 auto;

   display: flex;
   justify-content: center;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const Header = styled.div`
  z-index:6;
  position: sticky;
  top: 0;
  height: 40px;
  background: var(--menu-background);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;

  @media (min-width: 480px){
    display: none;

    > button {
      padding: 0px;
      border-radius: 10%;
      margin-top: 5px;
      width: 24px;
      outline: 0;
      cursor: pointer;

      &:hover {
          background: var(--menu-hover);
      }

      @media (min-width: 480px){
      display: none;
      }
    }
  }
`

export const MenuIcon = styled(Menu)`
  width: 24px;
  height: 24px;

  fill: var(--menu-buttom);

  
  @media (max-width: 480px){
    width: 24px;
    height: 24px;
  }


`
export const Section = styled.div`
  margin-left: 17px;
  display:flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }
`