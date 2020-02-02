import React from 'react';
import styled from 'styled-components/macro';
import StaggeredGrid from '../StaggeredGrid';

const Placeholder = styled.div`
  background-color: purple;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 3rem;
  border-radius: 10px;
`;

export const Simple = () => (
  <StaggeredGrid>
    <StaggeredGrid.Space>
      <Placeholder children={1} />
    </StaggeredGrid.Space>

    <StaggeredGrid.Space>
      <Placeholder children={2} />
    </StaggeredGrid.Space>

    <StaggeredGrid.Space>
      <Placeholder children={3} />
    </StaggeredGrid.Space>

    <StaggeredGrid.Space>
      <Placeholder children={4} />
    </StaggeredGrid.Space>

    <StaggeredGrid.Space>
      <Placeholder children={5} />
    </StaggeredGrid.Space>

    <StaggeredGrid.Space>
      <Placeholder children={6} />
    </StaggeredGrid.Space>
  </StaggeredGrid>
);

export default {
  title: 'Patterns/StaggeredGrid',
  component: StaggeredGrid,
  subcomponents: {
    'StaggeredGrid.Space': StaggeredGrid.Space,
  },
};
