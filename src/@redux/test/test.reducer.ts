import { TestTypes } from './test.types';
const INITIAL_STATE = {
  data: '',
};

const testReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case TestTypes.GET_SUCCESS:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
export default testReducer;
