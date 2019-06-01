import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './views/Home';
import Search from './views/Search';
import Details from './views/Details';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App() {
  const basename = process.env.NODE_ENV === 'development' ? '/' : '/karte'
  return (
    <BrowserRouter basename={basename} >
      <div className="App">
        <Route path="/(|tag)/" exact component={Home} />
        <Route path="/tag/:tag" component={Search} />
        <Route path="/inv/:uri" component={Details} />
      </div>
    </BrowserRouter>
  );
}

export default App;
