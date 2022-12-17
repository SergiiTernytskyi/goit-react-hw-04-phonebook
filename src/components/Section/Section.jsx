import PropTypes from 'prop-types';
import { Card, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Card>
      {title && <Title>{title}</Title>}
      {children}
    </Card>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
