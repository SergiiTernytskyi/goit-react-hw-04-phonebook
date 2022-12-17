import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;
`;

export const Item = styled.li`
  min-width: 300px;
  flex-basis: 100%;
  align-self: stretch;
  min-height: 50px;

  @media (min-width: 768px) {
    flex-basis: calc(100% / 2 - ${p => p.theme.space[4]}px);
  }

  @media (min-width: 1200px) {
    flex-basis: calc(100% / 3 - ${p => p.theme.space[4]}px);
  }
`;
