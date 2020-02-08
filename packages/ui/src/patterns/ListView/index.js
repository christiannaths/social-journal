import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';
import Section from './Section';
import Item from './Item';

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
