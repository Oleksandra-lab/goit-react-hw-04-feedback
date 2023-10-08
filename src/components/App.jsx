import { useState } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

 const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const handleClick = evt => {
    switch (evt) {
      case 'good':
        setGood(prevState =>  prevState + 1)
        break;
        case 'neutral':
        setNeutral(prevState =>  prevState + 1)
        break;
        case 'bad':
        setBad(prevState =>  prevState + 1)
        break;
        default:
          return;
    }
    
  };

  
    // const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = (good / total) * 100;
    return (
      <div>
        <Section>
          <FeedbackOptions
            options={Object.keys({good, neutral, bad})}
            onClick={handleClick}
          />
        </Section>
        <Section>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
          {total === 0 && <Notification />}
        </Section>
      </div>
    );

}
 export default App