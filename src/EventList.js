// renders a list of events that take place in the city the user has selected

import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
  render() {
  const { events } = this.props;
  return (
    <ul className="EventList">
      {events.map(event =>
        // adds a key to each child in events list
        <li key={event.id}>
          <Event event={event} />
        </li>
      )}
    </ul>
  );
}
}

export default EventList;