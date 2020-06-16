import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../routes/Home';
import Detail from '../routes/Detail';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route path="/:id" component={Detail} />
  </BrowserRouter>
);

export default App;
