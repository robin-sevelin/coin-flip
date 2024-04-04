'use client';

import { useAtom } from 'jotai';
import React from 'react';
import { flipAtom } from '../store/atoms';
import { NO_ANSWERS, YES_ANSWERS } from '../constants/constants';

const Answer = () => {
  const [result] = useAtom(flipAtom);

  return (
    <div>
      {result === 'odd'
        ? NO_ANSWERS[Math.floor(Math.random() * 3)].value
        : YES_ANSWERS[Math.floor(Math.random() * 3)].value}
    </div>
  );
};

export default Answer;
