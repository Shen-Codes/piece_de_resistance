import * as React from 'react';
import { Provider } from 'react-redux';
import Landing from './landing';
import store from './store/store';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
   return (
      <Provider store={store}>
         <DndProvider backend={HTML5Backend}>
            <Landing />
         </DndProvider>
      </Provider>
   );
};

export default App;
