import './App.scss';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './ApolloClient/client';
import Categories from './components/Categories';

const App = () => (
    <ApolloProvider client={client}>
        <div className="App">
            <header className="header">
                <h1 className="header__title">Welcome to Eshop</h1>
                <Categories />
            </header>

        </div>
    </ApolloProvider>
);

export default App;
