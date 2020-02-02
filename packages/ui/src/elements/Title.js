import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Style = styled.h1`
  color: red;
`;

function Title(props) {
  const { text } = props;

  return <Style>{text}</Style>;
}

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
