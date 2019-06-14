import { describe } from 'riteway';

import { reducer, createQuestion } from './rejection-reducer.js';

describe('rejection reducer', async assert => {

  assert({
    given: 'no arguments',
    should: 'return valid default state',
    actual: reducer(),
    expected: []
  });

  {
    const question = {
      question: 'Can I have a raise?',
      askee: 'Boss',
      status: 'Rejected'
    };
    assert({
      given: 'createQuestion object',
      should: 'add the question to state',
      actual: reducer(reducer(), createQuestion(question)),
      expected: [question]
    });
  }
});
