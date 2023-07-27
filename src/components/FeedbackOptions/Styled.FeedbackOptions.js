import styled from "styled-components";

export const FeedbackButton = styled.button`
  margin-right: 20px;
  width: 100px;
  height: 40px;
  border-radius: 30px;
  background-color: #fff0f5;

  cursor: pointer;
  font-size: 16px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    background-color: ${({ name }) => {
      return name === 'good'
        ? '#03fc20'
        : name === 'neutral'
        ? '#fcb103'
        : '#fc2c03';
    }};
    -webkit-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
  }
`;