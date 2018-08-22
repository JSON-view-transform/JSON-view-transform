import React, {Component} from 'react';

class Header extends Component {
  renderAuthButton() {
    if (this.props.data === null) {
      return <br/>;
    }
    else if (this.props.data) { // truthy
      return <div><a className="nav-link" href="/api/logout">Sign Out</a> <span>{this.props.data.name}</span></div>;
    }
    else { // false (exactly)
      return <div><a className="nav-link" href="/auth/google">Sign In</a></div>;
    }
  }
  
  render() {
    return (
      <div>
        <h3>JSON Viewer</h3>
        {this.renderAuthButton()}
      </div>
    );
  }
}

export default Header;

