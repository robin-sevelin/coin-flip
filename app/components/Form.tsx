'use client';

import { useAtom } from 'jotai';
import React, { ChangeEvent, FormEvent } from 'react';
import { flipAtom, isFlippedAtom, questionAtom } from '../store/atoms';

const Form = () => {
  const [question, setQuestion] = useAtom(questionAtom);
  const [, setIsFlipped] = useAtom(isFlippedAtom);
  const [, setResult] = useAtom(flipAtom);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
    if (question !== '') {
      setResult('');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsFlipped(true);
    setQuestion('');
  };

  return (
    <form className='join' onSubmit={handleSubmit}>
      <fieldset>
        <legend>Vad ska du singla om?</legend>
        <input
          className='input input-bordered join-item'
          placeholder='something'
          onChange={handleChange}
          value={question}
        />
        <button disabled={!question} className='btn join-item rounded-r-full'>
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
