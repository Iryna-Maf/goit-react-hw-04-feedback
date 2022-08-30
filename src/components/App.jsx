import { useState } from 'react';

import FeedbackSection from './Feedback/FeedbackSection/FeedbackSection';
import FeedbackStatistics from './Feedback/FeedbackStatistics/FeedbackStatistics';
import Notification from './Feedback/Notification/Notification';
import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // const [state, setState] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });
  const increment = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  // const increment = propertyName => {
  //   setState(prevState => {
  //     return {
  //       ...prevState,
  //       [propertyName]: prevState[propertyName] + 1,
  //     };
  //   });
  // };

  // const { good, neutral, bad } = state;
  const total = good + neutral + bad;

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPersentage = () => {
    const positiveFeedbackPersentage = (good / (good + neutral + bad)) * 100;
    return Math.round(positiveFeedbackPersentage);
  };

  return (
    <div>
      <FeedbackSection title="Plese lieve feedback">
        <FeedbackOptions
          setFeedback={increment}
          good={good}
          bad={bad}
          neutral={neutral}
        />
        {total > 0 ? (
          <FeedbackStatistics
            setTotal={countTotalFeedback}
            setPersentage={countPositiveFeedbackPersentage}
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
};

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countPositiveFeedbackPersentage = () => {
//     const { good, neutral, bad } = this.state;
//     const positiveFeedbackPersentage = (good / (good + neutral + bad)) * 100;
//     return Math.round(positiveFeedbackPersentage);
//   };

//   totalFeedback = () => {
//     const { good, bad, neutral } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };
//   show = () => {
//     this.visible = true;
//   };

//   increment = event => {
//     const { name } = event.target;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = good + bad + neutral;
//     return (
//       <div>
//         <FeedbackSection title="Plese lieve feedback">
//           <FeedbackOptions
//             setFeedback={this.increment}
//             options={Object.keys(this.state)}
//           />
//           {total > 0 ? (
//             <FeedbackStatistics
//               setTotal={this.totalFeedback}
//               setPersentage={this.countPositiveFeedbackPersentage}
//               good={good}
//               bad={bad}
//               neutral={neutral}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </FeedbackSection>
//       </div>
//     );
//   }
// }
export default App;
