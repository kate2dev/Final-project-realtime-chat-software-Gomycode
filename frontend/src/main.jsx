import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store/store';
import './index.css';
// import * as serviceWorker from './serviceWorker';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

// serviceWorker.unregister();
