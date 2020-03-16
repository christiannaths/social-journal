import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const RightButton = styled.button`
  text-align: right;
  flex: 1;
`;

RightButton.propTypes = {
  children: PropTypes.any.isRequired,
};

RightButton.defaultProps = {
  children: 'Save',
};

RightButton.displayName = 'ViewHeaderRightButton';

export default RightButton;
