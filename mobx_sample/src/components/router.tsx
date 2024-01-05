/* eslint-disable @typescript-eslint/no-non-null-assertion */
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App.tsx';
// import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));

// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(
//   <React.StrictMode>
//     <main />
//   </React.StrictMode>,
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../index.css';
import React from 'react';
import Root from '../routes/root';
import ErrorPage from './error-page';
import Contact from '../routes/contact';
import App from './App';
import Grid_Sample from '../routes/Grid_Sample';
import Mobx_Sample from '../routes/Mobx_Sample';

const realGrid2Lic =
  'upVcPE+wPOmtLjqyBIh9RkM/nBOseBrflwxYpzGZyYm9cY8amGDkiMnVeQKUHJDjW2y71jtk+wte7L7C4dZzvFRtu9Bz90f9w1ScDYRVGVc=';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
      {
        path: 'GridSample',
        element: <Grid_Sample />,
      },
      {
        path: 'MobxSample',
        element: <Mobx_Sample />,
      },
      {
        path: 'App',
        element: <App />,
      },
    ],
  },
]);

const rootEl = document.getElementById('root');
if (rootEl !== null || rootEl !== undefined) {
  const root = ReactDOM.createRoot(rootEl!);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />;
    </React.StrictMode>,
  );
}
