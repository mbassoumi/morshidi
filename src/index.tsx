import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import AppClass from './AppClass';

// @ts-ignore
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


import 'animate.css/animate.min.css'

import {client} from './graphql/client';

import { ApolloProvider } from '@apollo/react-hooks';


const Index: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <ReactNotification/>
            <App/>
        </ApolloProvider>
    );
};

ReactDOM.render(<Index/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
