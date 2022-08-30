import PropTypes from 'prop-types';

import s from '../FeedbackSection/FeedbackSection.module.css';

const FeedbackSection = ({ title, children }) => {
  return (
    <>
      <h1 className={s.title}>{title}</h1>
      <br />
      <h2 className={s.statisticsTitle}>Statistics:</h2>
      <br />
      {children}
    </>
  );
};
export default FeedbackSection;

FeedbackSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
