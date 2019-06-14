const createQuestion = ({
  question = '',
  askee = '',
  status = 'Unanswered'
} = {}) => ({
  type: 'rejection/createQuestion',
  payload: {
    question,
    askee,
    status
  }
});

const reducer = (
  state = [],
  { type, payload } = {}
) => {
  switch (type) {
    case createQuestion().type: return [...state, payload];
    default: return state;
  }
};

export default reducer;
export { reducer, createQuestion };
