import PropTypes from 'prop-types';

import s from '../FeedbackOptions/FeedbackOptions.module.css';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ setFeedback, good, bad, neutral }) => {
  const objectButton = {
    good: good,
    bad: bad,
    neutral: neutral,
  };
  const arrayButtons = Object.keys(objectButton);

  const buttons = arrayButtons.map(item => (
    <button
      className={s.btn}
      key={nanoid()}
      type="button"
      name={item}
      onClick={setFeedback}
    >
      {item}
    </button>
  ));
  return <div className={s.btnList}>{buttons}</div>;
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  setFeedback: PropTypes.func.isRequired,

  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
