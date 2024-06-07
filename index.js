/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import { createStore } from 'redux'
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import rootreducer from './components redux/rootreducer';

const store = createStore(rootreducer)

const AppRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppRedux);