import styled from 'styled-components/macro';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: #f0f0f4;
  section + section {
    margin-top: 1.25rem;
  }

  section + section > header {
    margin-top: 0;
  }
`;

export default Layout;
