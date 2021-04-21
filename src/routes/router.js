import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
// import ScrollToTop from 'react-router-scroll-top';
import User from '../components/index';

class MyRoutes extends React.Component {
  render() {
    return (
      <div>
        <Router>
            <Switch>
              <Route path="/" component={User} />
              <Route path="*" render={
                  () => {
                    return (<Redirect to="/" />)
                  }
              } />
            </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRoutes;