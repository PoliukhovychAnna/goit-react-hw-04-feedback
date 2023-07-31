import PropTypes from 'prop-types';
import { FeedbackButton } from './Styled.FeedbackOptions';

export const FeedbackOptions = ({ onClick }) => (
  <>
    <FeedbackButton
      type="button"
      name="good"
      onClick={() => {
        onClick({ type: 'good' });
      }}
    >
      Good
    </FeedbackButton>
    <FeedbackButton
      type="button"
      name="neutral"
      onClick={() => onClick({ type: 'neutral' })}
    >
      Neutral
    </FeedbackButton>
    <FeedbackButton
      type="button"
      name="bad"
      onClick={() => onClick({ type: 'bad' })}
    >
      Bad
    </FeedbackButton>
  </>
);

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
};
