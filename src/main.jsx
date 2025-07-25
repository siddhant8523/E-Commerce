import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import App from './App'; 
import {RouterProvider} from 'react-router-dom';
import router from './router';
import 'react-multi-carousel/lib/styles.css';
import { Navigation } from './Components/Navigation/naviagtion'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}>
        {/* <App /> */}
    </RouterProvider>
</React.StrictMode>
);
