import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { setupFirebase } from './parts/Firebase/Firebase';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// setupFirebase();
