import React, { Component } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <>
      {/* <BrowserRouter> */}
        {/* <Switch> */}
          {/* <Route exact path="/" component={ Home }/> */}
          <Home />
        {/* </Switch> */}
      {/* </BrowserRouter> */}
      </>
    )
  }
}


export default App;
