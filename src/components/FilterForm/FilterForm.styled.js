import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  margin-bottom: 4px;

  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.semibold};
  line-height: ${p => p.theme.lineHeights.heading};

  color: ${p => p.theme.colors.secondary};
`;

export const Input = styled.input`
  padding: ${props => props.theme.space[3]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  width: 100%;
  height: 45px;

  font-size: ${props => props.theme.fontSizes.l}px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.heading};

  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryText};
  border: 1px solid ${props => props.theme.colors.primaryText};
  border-radius: ${props => props.theme.radii.normal};

  :hover,
  :focus {
    border: 1px solid ${props => props.theme.colors.secondary};
    outline-color: ${props => props.theme.colors.secondary};
  }
`;
