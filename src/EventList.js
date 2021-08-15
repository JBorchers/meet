// renders a list of events that take place in the city the user has selected

import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
  render() {
  const { events } = this.props;
  return (
    <ul className="event-list">
      {events.map(event =>
        // adds a key to each child in events list
        <li key={event.id} className="event-list-item">
          <Event event={event} />
        </li>
      )}
    </ul>
  );
}
}

export default EventList;