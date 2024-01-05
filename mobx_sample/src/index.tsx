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
import './index.css';
import React from 'react';
import Root from './routes/root.tsx';
import ErrorPage from './error-page.tsx';
import Contact from './routes/contact.tsx';
import App from './App.tsx';
import ModalSample from './routes/ModalSample.tsx';
import MobxExample from './routes/MobxExample.tsx';
import Song from './routes/song.tsx';
import Chan from './routes/chan.tsx';

const realGrid2Lic =
  'upVcPE+wPOmtLjqyBIh9RkM/nBOseBrflwxYpzGZyYm9cY8amGDkiMnVeQKUHJDjW2y71jtk+wte7L7C4dZzvFRtu9Bz90f9w1ScDYRVGVc=';

const router = createBrowserRouter([
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
        path: 'ModalSample',
        element: <ModalSample />,
      },
      {
        path: 'MobxExample',
        element: <MobxExample />,
      },
      {
        path: 'App',
        element: <App />,
      },
      {
        path: 'song',
        element: <Song />,
      },
      {
        path: 'chan',
        element: <Chan />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
