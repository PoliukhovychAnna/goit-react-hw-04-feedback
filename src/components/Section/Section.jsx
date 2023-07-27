import PropTypes from 'prop-types';
import { StyledSection } from './Styled.Section';
export const Section = ({ title, children }) => (
  <StyledSection>
    <h2>{title}</h2>
    {children}
  </StyledSection>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element
};