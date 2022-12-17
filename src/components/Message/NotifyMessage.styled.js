import styled from 'styled-components';

export const Message = styled.div`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.xl}px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${p => p.theme.colors.secondary};
`;
