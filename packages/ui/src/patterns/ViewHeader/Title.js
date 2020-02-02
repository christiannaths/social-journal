import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const ViewHeaderTitle = styled.h1`
  flex: 3;
  font-size: 1.25em;
  line-height: 1.1;
  margin: 0;
`;

ViewHeaderTitle.propTypes = {
  children: PropTypes.any.isRequired,
};

ViewHeaderTitle.displayName = 'ViewHeaderTitle';

export default ViewHeaderTitle;
