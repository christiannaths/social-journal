import { addDecorator } from '@storybook/react';
import React from 'react';
import { Helmet } from 'react-helmet';
import { ResetStyles } from '@orca/ui/base';
import { View } from '@orca/ui/elements';
import theme from '@orca/ui/theme';

addDecorator((story) => {
  return (
    <React.Fragment>
      <ResetStyles />
      <Helmet>
        <link href={theme.fontUrl} rel="stylesheet" />
      </Helmet>
      <View children={story()} />
    </React.Fragment>
  );
});
