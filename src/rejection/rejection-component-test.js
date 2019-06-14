import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';

import RejectionComponent from './rejection-component.js';

describe('RejectionComponent', async assert => {
  const $ = render(<RejectionComponent />);

  assert({
    given: 'no props',
    should: 'Render add-question button',
    actual: $('.add-question-button').length,
    expected: 1
  });
});
