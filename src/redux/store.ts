import {configureStore} from '@reduxjs/toolkit';
import {Action, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import mainReducer from './sagas/main/slice';

const appReducer = combineReducers({
  main: mainReducer,
});

const rootReducer = (state: any, action: Action) => {
  if (action.type === 'RESET') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
