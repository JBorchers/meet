// parent component to CitySearch and EventList
// receives a click event from CitySearch when user selects a new city
// then gets a list of events and passes it through EventList

import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    NumberOfEvents: 32,
    defaultEvents: 'all'
  }
  
  updateEvents = (location, eventCount) => {
		getEvents().then((events) => {
			const locationEvents = (location === 'all') ? events.slice(0, this.state.numberOfEvents) : 
			events.filter((event) => event.location === location);
			if (this.mounted) {
				this.setState({ 
					events: locationEvents.slice(0, eventCount),
					defaultEvents: location
				});
			}
		});
	}

updateEventsLength(inputValue) {
		this.setState({
			numberOfEvents: inputValue
		});
		const { defaultEvents } = this.state
		this.updateEvents(defaultEvents, inputValue);
	}

componentDidMount() {
    const { numberOfEvents } = this.state;
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, numberOfEvents),
          locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }
  
  render() {
    return (
      <div className="App">
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
      {/* pass state to EventList as prop of events */}
      <EventList events={this.state.events} />
      <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEventsLength={(value) => this.updateEventsLength(value)} />
      </div>
      );
    }
  }
  
  export default App;