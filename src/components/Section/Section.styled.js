import styled from 'styled-components';

export const Card = styled.section`
  padding: 30px 15px;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }

  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.third};
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;

  text-align: center;
  font-size: ${p => p.theme.fontSizes.xxl}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};

  color: ${p => p.theme.colors.secondary};
`;
