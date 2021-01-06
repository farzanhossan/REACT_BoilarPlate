import { TestTypes } from './test.types';
import Axios from 'axios';

export const testAction = (id: any) => async (dispatch: any) => {
  try {
    const res = await Axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    dispatch({
      type: TestTypes.GET_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TestTypes.GET_FAILED,
    });
  }
};
