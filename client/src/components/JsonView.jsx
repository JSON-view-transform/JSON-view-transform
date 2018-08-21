import React, {Component} from 'react';


class JsonView extends Component {
  constructor(props){
    super(props)
    this.state = {clicked: false,
    arr: null}

  }
  componentDidMount() {
    let arr = Object.keys(this.props.json);
    let mapped = arr.map((e,i) => {
      return (<li>
          <button key={i} > {e} </button>
        </li>)
    })
    this.setState({arr: mapped})
  }
  // checkForChildren = ()
  expand = () => {
    this.setState({clicked: !this.state.clicked})
    console.log(this.state.clicked)
  }
  render() {
    let bool = this.state.clicked ? this.state.arr : null;
    return (
      <div className="parent">
      <button onClick={this.expand}> Click to Expand </button>
        {bool}
      </div>
    )
  }

}
export default JsonView