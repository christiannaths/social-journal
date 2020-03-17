import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../../elements';
import theme from '../../theme';

const Layout = styled.ol``;

const Item = styled.li`
  margin: ${theme.lineHeight / 4}px 1em;
  padding-left: 1em;
  line-height: ${theme.lineHeight}px;
`;

const MenuButton = styled(Button)`
  font-weight: bold;
  font-style: italic;
  color: ${theme.grey};

  &:before {
    content: '\u00A0';
    position: relative;
    left: -1em;
  }

  &:hover {
    color: ${theme.black};

    &:before {
      content: '\u203A';
      position: relative;
      left: -1em;
    }
  }
`;

/**
 * `import { ListMenu } from '@orca/ui/elements`
 */
function ListMenu(props) {
  const { items, keyboardControl, ...rest } = props;
  const labels = Object.keys(items);

  console.log('TODO:', { keyboardControl });

  return (
    <Layout {...rest}>
      {items.map((item, index) => {
        const key = item.label + index;
        return (
          <Item key={key}>
            <MenuButton children={item.label} onClick={item.action} />
          </Item>
        );
      })}
    </Layout>
  );
}

ListMenu.propTypes = {
  children: PropTypes.any,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      action: PropTypes.func,
    }),
  ),
};

ListMenu.displayName = 'ListMenu';
ListMenu.Item = Item;

export default ListMenu;
