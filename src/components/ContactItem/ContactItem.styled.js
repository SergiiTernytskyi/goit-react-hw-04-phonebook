import styled from 'styled-components';

export const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[4]}px;
  height: 100%;
  width: 100%;

  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.semibold};
  line-height: ${p => p.theme.lineHeights.body};

  background-color: ${p => p.theme.colors.background};
  border: 1px solid ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.third};
`;

export const ContactName = styled.span`
  display: inline-block;
  color: ${p => p.theme.colors.primaryText};
`;

export const ContactNumber = styled.span`
  display: inline-block;
  min-width: 150px;
  color: ${p => p.theme.colors.primaryText};
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.round};
  border: 2px solid ${p => p.theme.colors.primaryText};

  color: ${p => p.theme.colors.primaryText};
  cursor: pointer;
  transition: border-color 250ms ease-out, color 250ms ease-out;

  :hover,
  :focus {
    border-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.secondary};
  }
`;
