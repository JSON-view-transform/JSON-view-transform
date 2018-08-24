import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchUser} from '../actions/auth.js';

import Header from './Header.js';
import Home from './Home.js';
import EditDoc from '../containers/EditDoc'
import Hello from './Hello.js';
import Protected  from './Protected.js';
import DocList from '../containers/DocList'
import RequireAuth from './RequireAuth.js';

class App extends Component {
  componentDidMount() {
    // fetch auth data
    this.props.fetchUser();
  }
  
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header data={this.props.auth.data} />
          <Switch>
            <Route exact path="/" component={() => <EditDoc saved={false} />} />
            <Route exact path="/doc/:doc_id" component={(props) => <EditDoc history={props.history} location={props.location} saved={true} />} />
            <Route exact path="/myDocs" component={DocList}/>
            <Route path="/hello" component={Hello} />
            <Route path="/protected" component={RequireAuth(Protected)} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
