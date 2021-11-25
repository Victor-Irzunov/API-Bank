import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CurrencyStore from "./store/СurrencyStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider
        value={
            {
                currency: new CurrencyStore(),
            }
        }>
        <App />

    </Context.Provider>,
    document.getElementById('root')
);

