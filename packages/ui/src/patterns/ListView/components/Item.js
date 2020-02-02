import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Layout = styled.li`
  display: flex;
  justify-content: stretch;
  align-items: center;
  background-color: #ffffff;
  margin-bottom: 1px;
  padding: 0.75em 1em;
  line-height: 1.25em;
  color: #9d9db1;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};

  svg + section {
    margin-left: 0.5em;
  }

  section + svg {
    margin-left: 0.5em;
  }
`;

const Content = styled.section`
  display: flex;
  flex: 1;
  flex-direction: ${(props) => (props.inline ? 'row' : 'column')};
  justify-content: ${(props) =>
    props.inline ? 'space-between' : 'normal'};
`;

const Title = styled.span`
  color: #272730;
`;

const Subtitle = styled.small`
  font-size: ${(props) => (props.inline ? '1em' : 'unset')};
`;

function Item(props) {
  const Icon = props.icon;
  const ActionIcon = props.actionIcon;
  const inline = Boolean(props.inline);

  return (
    <Layout {...props}>
      {Icon}
      <Content inline={inline}>
        <Title children={props.title} />
        {props.subtitle && (
          <Subtitle inline={inline} children={props.subtitle} />
        )}
      </Content>
      {ActionIcon}
    </Layout>
  );
}

Item.propTypes = {
  inline: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.element,
  actionIcon: PropTypes.element,
  onClick: PropTypes.func,
  children: PropTypes.element,
};

Item.displayName = 'ListViewItem';

export default Item;
