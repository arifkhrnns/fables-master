import React from 'react';
import {hydrateRoot} from 'react-dom/client';
import App from './App.jsx';
import './styles/react.css';

const pages=import.meta.glob('./pages/**/*.jsx');
const page=JSON.parse(document.getElementById('page-data').textContent);
const {default: Page}=await pages[`./pages/${page.component}.jsx`]();
hydrateRoot(document.getElementById('root'), <App Page={Page} page={page} />);
