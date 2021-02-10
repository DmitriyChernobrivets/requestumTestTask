import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootSaga from './sagas/root';

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['history'],
};
const persistedReducer = persistReducer(persistConfig, reducer);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   persistedReducer,
   composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
let persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
