import React from 'react';
import logo from './logo.svg';
import { Layout, Header, Title, Logo } from './style';
import StyleReset from './styleReset';
import StyleTypography from './styleTypography';
import { Button } from '@social-journal/ui';

function App() {
  return (
    <React.Fragment>
      <StyleReset />
      <StyleTypography />
      <Layout>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Hello World</Title>
          <Button />
        </Header>
      </Layout>
    </React.Fragment>
  );
}

export default App;
