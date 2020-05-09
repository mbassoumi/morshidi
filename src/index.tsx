import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './custom.css';
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// @ts-ignore
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';


import 'animate.css/animate.min.css';

import {client} from './graphql/client';

import {ApolloProvider} from '@apollo/react-hooks';
import {Provider} from 'react-redux';
import store from './redux/store';
// import AppClass from './AppClass';


const Index: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <ReactNotification/>
                <App/>
            </Provider>
        </ApolloProvider>
    );
};
//@ts-ignore
window.__APOLLO_CLIENT__ = client

ReactDOM.render(<Index/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
