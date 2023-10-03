import React from 'react';

import { Title, WrapperBtn, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <div>
        <Title>Please leave a feedback</Title>
      <WrapperBtn>
        {options.map(option => (
          <FeedbackBtn
            key={option}
            type="button"
            onClick={() =>onClick(option)}
          >
            {' '}
            {option}
          </FeedbackBtn>
        ))}
      </WrapperBtn>
    </div>
  );
};

export default FeedbackOptions;
