import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import testReducer from './test/test.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authState'],
};

const appReducer = combineReducers({
  testState: testReducer,
});
const rootReducer = (state: any, action: any) => {
  // when a logout action is dispatched it will reset redux state
  //   if (action.type === 'LOG_OUT') {
  //     state = undefined;
  //     storage.removeItem('persist:root');
  //   }

  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
