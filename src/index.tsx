import React from 'react';
import ReactDOM from 'react-dom';
import { config } from 'dotenv';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
//@ts-ignore
import ReactNotification from 'react-notifications-component';
config();
console.log('process', process.env);
ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <ReactNotification />
            <App />
         </PersistGate>
      </Provider>
   </React.StrictMode>,
   document.getElementById('root'),
);
