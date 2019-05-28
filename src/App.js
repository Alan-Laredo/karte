import React from 'react';
import Home from './views/Home';
import Search from './views/Search';
import { BrowserRouter, Route} from "react-router-dom";

function App() {
  const basename = process.env.NODE_ENV === 'development' ? '/' : '/karte'
  return (
    <BrowserRouter basename={basename} >
      <div className="App">
        <Route path="/(|tag)/" exact component={Home} />
        <Route path="/tag/:tag" component={Search} />
      </div>
    </BrowserRouter>
  );
}

export default App;
