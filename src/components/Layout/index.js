import React, { useState } from 'react';

import MenuBar from '../MenuBar'
import { Container, Wrapper, Main, Header, MenuIcon } from './styles';

import Section from '../Section';

function Layout() {
  const [toggled, setToggle] = useState(false);

  return (
      <Container>
        <Wrapper>
          <MenuBar toggled={toggled} setToggle={setToggle} />
          <Main>
            <Header>
                <button onClick={()=>setToggle(!toggled)}>
                    <MenuIcon />
                </button>
            </Header>
            <Section />
          </Main>
        </Wrapper>
      </Container>
  );
}

export default Layout;