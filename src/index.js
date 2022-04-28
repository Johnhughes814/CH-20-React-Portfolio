import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { ThemeProvider } from './context';

ReactDom.render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById(root)
);