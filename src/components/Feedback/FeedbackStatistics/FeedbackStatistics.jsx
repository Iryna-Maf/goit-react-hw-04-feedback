import PropTypes from 'prop-types';

import s from '../FeedbackStatistics/FeedbackStatistics.module.css';

const FeedbackStatistics = ({
  good,
  neutral,
  bad,
  setTotal,
  setPersentage,
}) => {
  const persentage = setPersentage();
  const total = setTotal();
  return (
    <ul className={s.statsList}>
      <li className={s.statsItem}>Good: {good}</li>
      <li className={s.statsItem}>Neutral: {neutral}</li>
      <li className={s.statsItem}>Bad: {bad}</li>
      <li className={s.statsItem}>Total: {total}</li>
      <li className={s.statsItem}>Positive feedback: {persentage} %</li>
    </ul>
  );
};

export default FeedbackStatistics;

FeedbackStatistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  setTotal: PropTypes.func.isRequired,
  setPersentage: PropTypes.func.isRequired,
};
