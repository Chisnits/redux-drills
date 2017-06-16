import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addGuest, removeGuest } from './ducks/guestList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value
    }, () => console.log(this.state))
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addGuest(this.state.text);
    // add guest function here
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div className="App">
        <h1>DevMountain Hackathon</h1>
        <h3>Guest List:</h3>
        <ul>
          {this.props.List.map( (guest, i) => {
            return (
              <div key={i} className="list-item">
                <li>{guest}</li>
                <button type="" className="" onClick={() => this.props.removeGuest(i)}>Remove</button>
              </div>
            )
          })}
        </ul>
        <form
          onSubmit={this.handleSubmit}
          className="add-guest"> Add guest: 
              <input
              value={this.state.text}
              onChange={this.handleInputChange}
              type="" className=""/>
          <button
            type=""
            className="">Add</button>
        </form>
      </div>
    );
  }
}

// mapStateToProps
function mapStateToProps( state ) {
  return{
    List: state
  }
}
// connect
export default connect(mapStateToProps, { addGuest, removeGuest })(App);