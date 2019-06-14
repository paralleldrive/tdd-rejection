/*
Container component, knows about state & side-effects
Test using functional tests, rather than unit tests.
*/

import React, { useReducer, useEffect } from 'react';

import RejectionComponent from './rejection-component.js';

const Rejection = () => {
  const [state, dispatch] = useReducer(reducer, reducer());

  useEffect(loadState, []);

  return <RejectionComponent questions={ state } />;
};
