import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './reducers/rootReducer'

// import express from 'express';
// import ReactDOMServer from 'react-dom/server';
// import { StaticRouter } from 'react-router-dom';

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// app.get('/*', (req, res) => {
//   const context = {};
//   const app = ReactDOMServer.renderToString(
//     <StaticRouter location={req.url} context={context}>
//       <App />
//     </StaticRouter>
//   );

//   const indexFile = path.resolve('./build/index.html');
//   fs.readFile(indexFile, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Something went wrong:', err);
//       return res.status(500).send('Oops, better luck next time!');
//     }

//     return res.send(
//       data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
//     );
//   });
// });

// app.listen(PORT, () => {
//   console.log(`😎 Server is listening on port ${PORT}`);
// });