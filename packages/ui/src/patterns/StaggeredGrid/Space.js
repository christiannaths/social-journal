import React from 'react';
import styled from 'styled-components/macro';

const Layout = styled.div`
  display: flex;
`;

function Space(props) {
  return <Layout {...props} />;
}

Space.propTypes = {};

Space.displayName = 'StaggeredGrid.Space';

export default Space;
