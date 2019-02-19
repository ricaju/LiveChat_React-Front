import React from 'react';
import ReactDOM from 'react-dom';
import App from './conteiners/App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from "react-apollo";
import {SubscriptionClient} from 'subscriptions-transport-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from "apollo-boost";
//import './index.css';


ReactDOM.render(
	<App/>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
