import React, { useReducer } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

const feedbackState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const addFeedback = (state, action) => {
  switch (action.type) {
    case 'good':
      return {
        ...state,
        good: state.good + 1,
      };
     
    case 'neutral':
       return {
         ...state,
         neutral: state.neutral + 1,
       };
      
    case 'bad':
        return {
          ...state,
          bad: state.bad + 1,
        };

    default:
      break;
  }
};



export const App = () => {
  const [state, dispatch] = useReducer(addFeedback, feedbackState);

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return Number(good) + Number(neutral) + Number(bad);
  };

   const countPositiveFeedbackPercentage = () => {
     const { good, neutral, bad } = state;
     const total = Number(good) + Number(neutral) + Number(bad);
     const goodFeedback = Math.round((Number(good) / total) * 100);
     return goodFeedback ? goodFeedback : 0;
   };
  
  return (
    <>
      <Section title="Please leave feedback">
         <FeedbackOptions onClick={dispatch}/></Section>

        <Section title="Statistics">
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
    </>
  );
}

