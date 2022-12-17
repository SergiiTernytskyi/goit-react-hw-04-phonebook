import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormContact = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Label = styled.label`
  min-width: 175px;
  flex-basis: calc(100% / 2 - ${p => p.theme.space[4]}px);

  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.semibold};
  line-height: ${p => p.theme.lineHeights.heading};

  color: ${p => p.theme.colors.secondary};
`;

export const Input = styled(Field)`
  padding: ${p => p.theme.space[3]}px;
  width: 100%;

  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};

  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.primaryText};
  border: 1px solid ${p => p.theme.colors.primaryText};
  border-radius: ${p => p.theme.radii.normal};

  :hover,
  :focus {
    border: 1px solid ${p => p.theme.colors.secondary};
    outline-color: ${p => p.theme.colors.secondary};
  }
`;

export const AddButton = styled.button`
  align-self: center;
  width: 150px;
  height: 50px;

  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.semibold};
  line-height: ${p => p.theme.lineHeights.body};
  text-transform: capitalize;

  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.background};
  border: transparent;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.first};

  cursor: pointer;
  transition: box-shadow 250ms ease-out, color 250ms ease-out,
    background-color 250ms ease-out;

  :hover {
    color: ${p => p.theme.colors.white};
    box-shadow: ${p => p.theme.shadows.second};
    background-color: ${p => p.theme.colors.secondary};
  }
`;

export const Error = styled.div`
  width: 100%;
  height: 30px;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }

  text-align: center;
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.semibold};
  line-height: ${p => p.theme.lineHeights.body};

  color: ${p => p.theme.colors.accent};
`;
