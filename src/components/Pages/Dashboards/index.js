import React from 'react';

import { Header } from '../styles/styles.js'
import { Container, Main, HeaderDash, MidDash, BottomDash, Card, CardText, CardTitle } from './styles';

import { MDBCard, MDBCardText } from "mdbreact";

function Dashboards() {
  return (
    <Container>
      <Header>
        <h1>Dashboard</h1>
      </Header>
      <Main>
        <HeaderDash>
            <Card className="card-body">
              <CardTitle className="card-body"><h4>Panel Title</h4></CardTitle>
              <CardText>
                Some quick example text to build on the panel title and make up the
                bulk of the panel's content.
              </CardText>
              <div className="flex-row">
                <a href="#!">Card link</a>
                <a href="#!" style={{ marginLeft: "1.25rem" }}>Another link</a>
              </div>
            </Card>
            <Card className="card-body">
              <CardTitle className="card-body"><h4>Panel Title</h4></CardTitle>
              <CardText>
                Some quick example text to build on the panel title and make up the
                bulk of the panel's content.
              </CardText>
              <div className="flex-row">
                <a href="#!">Card link</a>
                <a href="#!" style={{ marginLeft: "1.25rem" }}>Another link</a>
              </div>
            </Card>
            <Card className="card-body">
              <CardTitle className="card-body"><h4>Panel Title</h4></CardTitle>
              <CardText>
                Some quick example text to build on the panel title and make up the
                bulk of the panel's content.
              </CardText>
              <div className="flex-row">
                <a href="#!">Card link</a>
                <a href="#!" style={{ marginLeft: "1.25rem" }}>Another link</a>
              </div>
            </Card>
            <Card className="card-body">
              <CardTitle className="card-body"><h4>Panel Title</h4></CardTitle>
              <CardText>
                Some quick example text to build on the panel title and make up the
                bulk of the panel's content.
              </CardText>
              <div className="flex-row">
                <a href="#!">Card link</a>
                <a href="#!" style={{ marginLeft: "1.25rem" }}>Another link</a>
              </div>
            </Card>       
        </HeaderDash>

        <MidDash>
        <Card className="card-body">
              <CardTitle className="card-body"><h4>Panel Title</h4></CardTitle>
              <CardText>
                Some quick example text to build on the panel title and make up the
                bulk of the panel's content.
              </CardText>
              <div className="flex-row">
                <a href="#!">Card link</a>
                <a href="#!" style={{ marginLeft: "1.25rem" }}>Another link</a>
              </div>
            </Card>
            <Card className="card-body">
              <CardTitle className="card-body"><h4>Panel Title</h4></CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nulla augue, dapibus sit amet gravida ultrices, efficitur vel purus. Nullam nec mauris lacus.
                Vivamus luctus dui mattis dolor pharetra pulvinar. Praesent varius vehicula auctor. Curabitur eu quam leo.
                Phasellus feugiat, sapien in volutpat elementum, enim erat ornare elit, in dignissim mi lectus in diam. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Mauris vel nibh vitae arcu ornare eleifend. Etiam vitae nibh vel augue molestie hendrerit id a nunc.
              </CardText>
              <div className="flex-row">
                <a href="#!">Card link</a>
                <a href="#!" style={{ marginLeft: "1.25rem" }}>Another link</a>
              </div>
            </Card>
        </MidDash>
        <BottomDash>
          <Card className="card-body">
            <CardTitle className="card-body"><h4>Panel Title</h4></CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nulla augue, dapibus sit amet gravida ultrices, efficitur vel purus. Nullam nec mauris lacus.
              Vivamus luctus dui mattis dolor pharetra pulvinar. Praesent varius vehicula auctor. Curabitur eu quam leo.
              Phasellus feugiat, sapien in volutpat elementum, enim erat ornare elit, in dignissim mi lectus in diam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Mauris vel nibh vitae arcu ornare eleifend. Etiam vitae nibh vel augue molestie hendrerit id a nunc.
            </CardText>
            <div className="flex-row">
              <a href="#!">Card link</a>
              <a href="#!" style={{ marginLeft: "1.25rem" }}>Another link</a>
            </div>
          </Card>
        </BottomDash>
      </Main>
    </Container>
  );
}

export default Dashboards;