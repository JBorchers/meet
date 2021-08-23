import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  
  state = {
    numberOfEvents: 32,
    errorText: ''
  }
  
  handleInputChanged = (e) => {
    const value = e.target.value;
    if (value < 1) {
      return this.setState({
        numberOfEvents: '',
        errorText: 'Enter a number between 1 and 32'
      });
    } else if (value > 32) {
      this.setState({
        numberOfEvents: '',
        errorText: 'Enter a number between 1 and 32'
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: ''
      })
      this.props.updateEventsLength(value)
    }          
    
  };
  
  // resetInput = (e) => {
  //   e.target.value = '';
  // }
  
  render() {
    
    return (
      <div className="numberOfEvents">
      <label className="events-input">See a Number of Events</label>
      <input
      type="number"
      placeholder="Enter a number of events"
      className="numberInput"
      value={this.state.numberOfEvents}
      onChange={this.handleInputChanged}
      />
      <ErrorAlert text={this.state.errorText}/>
      </div>
      )
    }
  }
  
  export default NumberOfEvents 

//   NumberOfEvents.propTypes = {
//     updateEventsLength: PropTypes.func.isRequired
// }