import styled from 'styled-components';

import { MDBCard, MDBCardText } from "mdbreact";

export const Container = styled.div`
    display: flex;
  justify-content: center;
  flex-direction: column;
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
    width: 22rem;
    margin-top: 10rem;
    margin: 1rem
`;

export const CardTitle = styled(MDBCard)`
    background: var(--card-title-background);
    width: 150px;
    color: #fff;
    top: -40px;
    max-height: 80px;
`;

export const CardText = styled(MDBCardText)`
    position: sticky;
    top: 0;
    align-items: center;
`;
