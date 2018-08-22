import React, { Component } from 'react';
import {changeTitle} from '../actions/actions';

export default class DocTitle extends Component {
  constructor(props){
    super(props)
    this.state = {title: ''}
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.dispatch(changeTitle(this.state.title))
  }

  handleChange = (e) => {
    this.setState({title: e.target.value});
  }
  
  render() {
    
  
    return (
      <div>

      <form onSubmit={e => this.handleSubmit(e)}>
      Title:
      <input
        type="text"
        placeholder="Untitled"
        value={this.state.title}
        onChange={this.handleChange}
        />
      </form>
        </div>
    )
  }
}
