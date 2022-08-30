import PropTypes from 'prop-types';
import s from '../Notification/Notification.module.css';

const Notification = ({ message }) => {
  return <p className={s.notification}>{message}</p>;
};
export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
