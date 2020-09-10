import * as React from 'react';
import { Provider } from 'react-redux';
import Landing from './landing';
import store from './store/store';

const App = () => {
   return (
      <Provider store={store}>
         <Landing />
      </Provider>
   );
};

export default App;
