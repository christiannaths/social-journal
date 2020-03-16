import React from 'react';
import { Helmet } from 'react-helmet';
import logo from './logo.svg';
import { Layout, Header, Logo } from './style';
import StyleReset from './styleReset';
import StyleTypography from './styleTypography';
import { Patterns } from '@orca/ui';
import theme from '@orca/ui/theme';
import * as Elements from '@orca/ui/elements';
import { View, Button, Title } from '@orca/ui/elements';

console.log({ Patterns });
console.log({ Elements });
console.log({ Button });

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <link href={theme.fontUrl} rel="stylesheet" />
      </Helmet>
      <StyleReset />
      <StyleTypography />
      <View>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Hello World</Title>
        </Header>

        <section>
          <Patterns.ListMenu
            items={[
              { label: 'Option 1', action: console.log },
              { label: 'Option 2', action: console.log },
              { label: 'Option 3', action: console.log },
              { label: 'Option 4', action: console.log },
            ]}
          />
        </section>
      </View>
    </React.Fragment>
  );
}

export default App;
