import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
    let eventWrapper;
    beforeAll(() => {
        eventWrapper = shallow(<Event event={mockData[0]} />);
    });


    test('show details button is rendered', () => {
        expect(eventWrapper.find('.btn-wrapper button')).toHaveLength(1);
    });

    //Show details
    test('details are shown on click', () => {
        eventWrapper.find('.btn-wrapper button').simulate('click');
        expect(eventWrapper.find('.show-more')).toHaveLength(1);    
    });

    // Hide details
    test('details are hidden on click', () => {
        eventWrapper.find('.btn-wrapper button').simulate('click');
        expect(eventWrapper.find('.show-more')).toHaveLength(0);
    });

    // Button text
    test('Button text', () => {
        eventWrapper.setState({showMore: true});
        expect(eventWrapper.find('.btn-wrapper button').text()).toBe('Show less');
    });
})