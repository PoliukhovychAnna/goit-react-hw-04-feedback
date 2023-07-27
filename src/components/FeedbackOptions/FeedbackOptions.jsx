import PropTypes from 'prop-types';
import { FeedbackButton } from './Styled.FeedbackOptions';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => {
      return (
        <FeedbackButton
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </FeedbackButton>
      );
    })}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func
};