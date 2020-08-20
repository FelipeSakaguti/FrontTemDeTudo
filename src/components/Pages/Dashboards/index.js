import React from 'react';

import { Header } from '../styles/styles.js'
import { 
  Container,
  Main,
  HeaderDash,
  MidDash,
  BottomDash,
  Card,
  CardText,
  CardTitle,
  HeaderBox
} from './styles';

function Dashboards() {
  return (
    <Container>
      <Header>
        <h1>Dashboard</h1>
      </Header>
      <Main>
        <HeaderDash>
          <HeaderBox>
            <Card className="card-body">
              <CardTitle className="card-body"><h4>Panel Title</h4></CardTitle>
              <CardText>
                Some quick example text to build on the panel title and make up the
                bulk of the panel's content.
              </CardText>
            </Card>
            <Card className="card-body">
              <CardTitle className="card-body"><h4>Panel Title</h4></CardTitle>
              <CardText>
                Some quick example text to build on the panel title and make up the
                bulk of the panel's content.
                Some quick example text to build on the panel title and make up the
                bulk of the panel's content.
                Some quick example text to build on the panel title and make up the
                bulk of the panel's content.
                Some quick example text to build on the panel title and make up the
                bulk of the panel's content.
                Some quick example text to build on the panel title and make up the
                bulk of the panel's content.
                Some quick example text to build on the panel title and make up the
                bulk of the panel's content.
                Some quick example text to build on the panel title and make up the
                bulk of the panel's content.
                Some quick example text to build on the panel title and make up the
                bulk of the panel's content.
                Some quick example text to build on the panel title and make up the
                bulk of the panel's content.
              </CardText>
            </Card>
            </HeaderBox>
            <HeaderBox>
            <Card className="card-body">
              <CardTitle className="card-body"><h4>Panel Title</h4></CardTitle>
              <CardText>
                Some quick example text to build on the panel title and make up the
                bulk of the panel's content.
              </CardText>
            </Card>
            <Card className="card-body">
              <CardTitle className="card-body"><h4>Panel Title</h4></CardTitle>
              <CardText>
                Some quick example text to build on the panel title and make up the
                bulk of the panel's content.
              </CardText>
            </Card>
          </HeaderBox>    
        </HeaderDash>

        <MidDash>

        </MidDash>
        <BottomDash>

        </BottomDash>
      </Main>
    </Container>
  );
}

export default Dashboards;