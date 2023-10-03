import React from 'react';
import {
  StatList,
  StatItem,
  StatTitle,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <StatTitle>Statistics</StatTitle>
      {total !== 0 && (
        <StatList>
          <StatItem>
            Good: <span>{good}</span>
          </StatItem>
          <StatItem>
            Neutral: <span>{neutral}</span>
          </StatItem>
          <StatItem>
            Bad: <span>{bad}</span>
          </StatItem>
          <StatItem>
            Total: <span>{total}</span>
          </StatItem>
          <StatItem>
            Positive feedback: <span>{Math.round(positivePercentage)}%</span>
          </StatItem>
        </StatList>
      )}
    </div>
  );
};

export default Statistics;
