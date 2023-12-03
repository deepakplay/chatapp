import ReactDOM from 'react-dom/client';
import React from 'react';
// import Pusher from 'pusher-js';
// import Echo from 'laravel-echo';
import "./App.css";
import { store, persistor } from '@/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import AppRoues from '@/routes';

let root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={<h4>Loading...</h4>} persistor={persistor}>
                <BrowserRouter>
                    <AppRoues />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode >
);
