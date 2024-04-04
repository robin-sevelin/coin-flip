'use client';

import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { flipAtom, isFlippedAtom } from '../store/atoms';
import Answer from './Answer';

const Coin = () => {
  const [rotate, setRotate] = useState(false);
  const [result, setResult] = useAtom(flipAtom);
  const [isFlipped, setIsFlipped] = useAtom(isFlippedAtom);

  useEffect(() => {
    if (isFlipped) {
      const rotateCoin = () => {
        setRotate(true);
        setTimeout(() => {
          setRotate(false);
          checkResult();
          setIsFlipped(false);
        }, 2000);
      };

      const checkResult = () => {
        const result = Math.floor(Math.random() * 2);
        if (result % 2 === 0) {
          setResult('even');
        } else {
          setResult('odd');
        }
      };
      rotateCoin();
    }
  }, [isFlipped, setIsFlipped, setResult]);

  return (
    <>
      <div className={rotate ? 'rotate' : 'coin'}></div>
      <div className='h-[200px]'>{result && <Answer />}</div>
    </>
  );
};

export default Coin;
