import React from 'react';
import logo from './logo.svg';
import { Layout, Header, Title, Logo } from './style';
import StyleReset from './styleReset';
import StyleTypography from './styleTypography';
import { Patterns } from '@orca/ui';
import * as Elements from '@orca/ui/elements';
import { Button } from '@orca/ui/elements';

console.log({ Patterns });
console.log({ Elements });
console.log({ Button });

function App() {
  return (
    <React.Fragment>
      <StyleReset />
      <StyleTypography />
      <Layout>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Hello World</Title>
          <Elements.Button text="Foo" />
          <Button text="Fax" />
          <Patterns.ControlBar text="bax" />
        </Header>
      </Layout>
    </React.Fragment>
  );
}

export default App;
