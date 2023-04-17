import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import Layout from "./layout/Layout";
import {setUpStore} from "./Store/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setUpStore()
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <App/>
                </Layout>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
