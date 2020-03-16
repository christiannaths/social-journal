import styled from 'styled-components/macro';
import theme from '../theme';

const TypeScale = styled.div`
  background: linear-gradient(to bottom, #00ff00, white 1px);
  background-size: 100% ${theme.lineHeight}px;

  max-width: 30rem;
  padding: 0 2rem;
  /* Fix for runaway margins */
  padding-top: 1px;
  margin-top: -1px;
`;

const Utils = {
  TypeScale,
};

export default Utils;
