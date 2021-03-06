import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

class Event extends Component {

    state = {
        showMore: false
    }

    // Toggles the state 'showMore'
    toggleShowMore = () => {
        this.setState({
            showMore: !this.state.showMore
        });
    }

    render() {

        const { event } = this.props;

        return (
            <Row>
                <Col>
            <Card className='event-wrapper'>
                <h2 className="event-title">{event.summary}</h2>

                <div className='event-time'>
                    <span>{event.start.dateTime}</span>
                    <span>{` (${event.start.timeZone}) `}</span>
                </div>

                <div>
                    <span>{event.summary} | </span>
                    <span>{event.location}</span>
                </div>

                {this.state.showMore ? (
                    <div className='show-more'>
                        <h4>About event:</h4>
                        <a href={event.htmlLink}>See details</a>
                        <p className="event-description">{event.description}</p>
                    </div>
                ) : ''}


                <div className="btn-wrapper">
                    <button onClick={this.toggleShowMore}>{this.state.showMore ? 'Show less' : 'Show more'}</button>
                </div>
            </Card>
        </Col>
      </Row>
        )
    }
}

export default Event; 