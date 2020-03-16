import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const LeftButton = styled.button`
  text-align: left;
  flex: 1;
`;

LeftButton.propTypes = {
  children: PropTypes.any.isRequired,
};

LeftButton.defaultProps = {
  children: 'Back',
};

LeftButton.displayName = 'ViewHeaderLeftButton';

export default LeftButton;
