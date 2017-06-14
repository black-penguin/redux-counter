// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

var initialState=
{
  counter:0
}

const INCREMENT="INCREMENT";
const DECREMENT="DECREMENT";
const UNDO="UNDO";

export function increment(amt)
{
  return {
    type :INCREMENT,
    payload: amt
  }
}

export function decrement(amt)
{
  return {
    type :DECREMENT,
    payload: amt
  }
}

export function undo(amt)
{
  return {
    type :UNDO,
    payload: amt
  }
}

function reducer(state=initialState, action)
{

  state=Object.assign(state, {lastAction: action})
  switch (action.type)
  {
    case INCREMENT:
      return Object.assign({}, state,
      {
        counter:state.counter+action.payload
      })
      break;
    case DECREMENT:
      return Object.assign({}, state,
        {
          counter:state.counter-action.payload
      })
      break;
    case UNDO:
  }
}

export default reducer;
