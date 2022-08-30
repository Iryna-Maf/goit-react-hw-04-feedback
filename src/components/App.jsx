import React from 'react';

import FeedbackSection from './Feedback/FeedbackSection/FeedbackSection';
import FeedbackStatistics from './Feedback/FeedbackStatistics/FeedbackStatistics';
import Notification from './Feedback/Notification/Notification';
import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPersentage = () => {
    const { good, neutral, bad } = this.state;
    const positiveFeedbackPersentage = (good / (good + neutral + bad)) * 100;
    return Math.round(positiveFeedbackPersentage);
  };

  totalFeedback = () => {
    const { good, bad, neutral } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  show = () => {
    this.visible = true;
  };

  increment = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + bad + neutral;
    return (
      <div>
        <FeedbackSection title="Plese lieve feedback">
          <FeedbackOptions
            setFeedback={this.increment}
            options={Object.keys(this.state)}
          />
          {total > 0 ? (
            <FeedbackStatistics
              setTotal={this.totalFeedback}
              setPersentage={this.countPositiveFeedbackPersentage}
              good={good}
              bad={bad}
              neutral={neutral}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </FeedbackSection>
      </div>
    );
  }
}
export default App;
