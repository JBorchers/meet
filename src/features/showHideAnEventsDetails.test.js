import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import Event from '../Event';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;    
    given('the user has not clicked on a specific event', () => {
      AppWrapper = mount(<App />)
    });
    
    when('the event list is displayed', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event-wrapper')).toHaveLength(mockData.length);
    });
    
    then('the application should display the events collapsed', () => {
      expect(AppWrapper.find('.event-wrapper .show-more')).toEqual({});
    });
  });
  
  
  let EventWrapper;
  let event = mockData[0];
  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('the list of events is displayed', () => {
      EventWrapper = shallow(<Event event={event} />)
    });
    
    when('the user clicks the Show Details button of a specific event', () => {
      EventWrapper.find('.btn-wrapper button').simulate('click');
    });
    
    then('the event element will expand to show further details', () => {
      expect(EventWrapper.find('.event-wrapper .show-more')).toBeDefined();
    });
  });
  
  
  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('the user has expanded an event to see further details', () => {
      EventWrapper = shallow(<Event event={event} />)
            EventWrapper.find('.btn-wrapper button').simulate('click');
            expect(EventWrapper.find('.event-wrapper .show-more')).toBeDefined();
        });
    
    when('the user clicks the “Hide Details” button of a specific event', () => {
      EventWrapper.find('.btn-wrapper button').simulate('click');
        });
    
    then('the application should collapse the event to hide its details', () => {
      expect(EventWrapper.find('.event-wrapper .show-more')).toEqual({});
        });
  });
});
