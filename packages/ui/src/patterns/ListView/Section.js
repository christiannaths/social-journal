import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Title = styled.header`
  font-size: 0.8em;
  margin: 0;
  color: #9d9daf;
  font-weight: normal;
  padding: 0.25rem 1rem;
  margin-top: 1rem;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
`;

function Section(props) {
  return (
    <section>
      {props.title && <Title children={props.title} />}
      <List children={props.children} />
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

Section.displayName = 'ListView.Section';

export default Section;
