import PropTypes from 'prop-types';

import s from '../FeedbackOptions/FeedbackOptions.module.css';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ setFeedback, options }) => {
  const buttons = options.map(item => (
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
