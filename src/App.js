import React from 'react';
import Home from './views/Home';
import Search from './views/Search';
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/tag/:tag" component={Search} />
      </div>
    </Router>
  );
}

export default App;
