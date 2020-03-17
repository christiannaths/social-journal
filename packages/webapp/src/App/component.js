import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import theme from 'ui/theme';
import ResetStyles from 'ui/base/ResetStyles';
import { View, Panel, Button, Title } from 'ui/elements';
import ListMenu from 'ui/patterns/ListMenu';
import { ReactComponent as OrcaIcon } from 'ui/branding/orca-icon.svg';
import { text, content } from 'lib';

// console.log(text);
console.log({ content: content() });

// const LanguageContext = React.createContext({
//   locale: 'en',
//   content: content('en'),
// });

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <link href={theme.fontUrl} rel="stylesheet" />
      </Helmet>
      <ResetStyles />
      <View>
        <Panel>
          <header>
            <div>
              <OrcaIcon />
            </div>
          </header>

          <section>
            <p
              children={text(`
                You walk up to a wooden building, there’s a sign over the
                door…
              `)}
            />

            <Title>Welcome to Orca</Title>

            <p
              children={text(`
                You're standing at the entrance, an old man,
                seated—slender in frame, his face solumn but gentle—looks
                up at you, but says nothing. What do you say?
              `)}
            />
          </section>

          <section>
            <ListMenu
              items={[
                {
                  label: text(`"I'd like to join"`),
                  action: console.log,
                },
                {
                  label: text(`"I've been here before, let me in"`),
                  action: console.log,
                  default: true,
                },
                {
                  label: text(`"What is this place?"`),
                  action: console.log,
                },
              ]}
            />
          </section>
        </Panel>
      </View>
    </React.Fragment>
  );
}

export default App;
