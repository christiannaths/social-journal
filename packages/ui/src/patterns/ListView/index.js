import React from 'react';
import PropTypes from 'prop-types';
import Layout from './components/Layout';
import Section from './components/Section';
import Item from './components/Item';

/**
 * `import { ListView } from '@orca/ui/elements`
 */
function ListView(props) {
  return <Layout {...props} />;
}

ListView.propTypes = {
  children: PropTypes.any,
};

ListView.displayName = 'ListView';
ListView.Section = Section;
ListView.Item = Item;

export default ListView;
