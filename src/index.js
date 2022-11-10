

import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';


import { registerLicense } from "@syncfusion/ej2-base";

registerLicense("ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0RjXX9Wc3dURmNeUEM=")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


