import styled from 'styled-components';

import { MDBCard, MDBCardText } from "mdbreact";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;

`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const HeaderDash = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 3rem;
  max-width: 100%;
  
  @media(max-width: 1280px) {
    flex-direction: column;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  @media(max-width: 1280px) {
    width: 100%;
  }
  @media(max-width: 600px) {
    flex-direction: column;
  }
`;

export const MidDash = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const BottomDash = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const Card = styled(MDBCard)`
    margin: 1rem;
    width: 50%;

    @media(max-width: 600px) {
      width: 95%;
  }

    @media (max-width: 1280px){
      position: relative;
    }
`;

export const CardTitle = styled(MDBCard)`
    background: var(--card-title-background);
    width: 150px;
    color: #fff;
    top: -40px;
    max-height: 45px;
    padding: 10px 10px 10px 10px;
`;

export const CardText = styled(MDBCardText)`
    padding: 0px;
    top: -40px;
    position: relative;
    text-align: top;
    align-items: center;
    text-align: top;
    font-size: 48px;
`;
