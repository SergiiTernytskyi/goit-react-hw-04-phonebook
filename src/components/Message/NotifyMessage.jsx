import PropTypes from 'prop-types';
import { Message } from './NotifyMessage.styled';

export const NotifyMessage = ({ message }) => {
  return <Message>{message}</Message>;
};

NotifyMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
