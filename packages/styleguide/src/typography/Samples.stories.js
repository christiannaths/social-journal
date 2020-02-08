import React from 'react';
import styled from 'styled-components/macro';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { ResetStyles, utils } from '@orca/ui/base';
import { View, Title, Text } from '@orca/ui/elements';
import { Button } from '@orca/ui/elements';
import { ListMenu } from '@orca/ui/patterns';

const Layout = styled(utils.TypeScale)`
  background: ${(p) => !p.rulers && 'white'};
`;

export function Samples() {
  return (
    <View>
      <ResetStyles />

      <Layout rulers={boolean('Show Rulers')}>
        <Title>
          This is the most common header. It's a bit bigger than the
          body text. Use it like a section title
        </Title>
        <Title>
          And this is a title
          <small>With a Subtitle</small>
        </Title>
        <Text>
          This is a regular paragraph, also known as "body text". It's
          set at a certain size and then you can adjust from there. It
          may have other elements inside of it, like{' '}
          <em>emphasis text</em>, or{' '}
          <span>
            <strong>strong (or bold) text</strong>
          </span>
          , along with a few others
        </Text>

        <section>
          <Text>
            <strong>What would you like to do?</strong>
          </Text>
          <ListMenu
            items={[
              { label: 'Option 1', action: console.log },
              { label: 'Option 2', action: console.log },
              { label: 'Option 3', action: console.log },
              { label: 'Option 4', action: console.log },
            ]}
          />
        </section>

        <Text>
          <strong>Section Header</strong>
          And this is a paragraph
          <small>Date: Today</small>
        </Text>

        <section>
          <Title>Sample Post</Title>

          <Text>
            <small>May 6, 2018 – 4:02pm</small>
            How precious the time: Hard to believe a whole month has
            passed by in the start of this brand new year .. So What's
            New - I've signed up for a new course titled Looking Ahead
            To Management, not that I'm particularly looking to become a
            manager but my manager thought it would be good for me ..
          </Text>

          <Text>
            The day started on January 16th heading up to Westminster
            and who should I meet when I arrived .. a former colleague,
            a favourite Italian who the rest of our team used to joke we
            were like an old married couple and we'd consectetur hac
            condimentum lobortis natoque praesent mollis urna vehicula
            mauris, lacus ligula nunc aliquam porttitor sociis imperdiet
            taciti, commodo scelerisque integer enim leo turpis
            habitasse fames. Praesent ante natoque primis neque nunc est
            habitant euismod sed sociis, phasellus sem eleifend lectus
            porttitor nisi auctor molestie id magna lacinia, accumsan
            habitasse aenean nullam fames
          </Text>
        </section>
      </Layout>
    </View>
  );
}

export default {
  title: 'Typography',
  component: () => null,
  decorators: [withKnobs],
};
