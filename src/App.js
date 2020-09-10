import * as React from 'react';
import { Provider } from 'react-redux';
import Landing from './landing';
import store from './store/store';
const App = () => {
    return (React.createElement(Provider, { store: store },
        React.createElement(Landing, null)));
};
export default App;
