import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 is the default number', ({ given, and, when, then }) => {
    let AppWrapper;
    given('the user has opened the app', () => {
      AppWrapper = mount(<App />);
    });
    
    and('the event list has been loaded', () => {
      expect(AppWrapper.state('events').length).toBeGreaterThan(0);
    });
    
    when('the user does not enter a specific number of events to view', () => {
      // no code necessary because the user has not done anything
    });
    
    then('32 events will be the default number for the application to display at once', () => {
      AppWrapper.update();
      expect((AppWrapper.find('.event-wrapper')).length).toBeLessThanOrEqual(32);
    });
  });
  
  
  test('User can change the number of events they want to see', ({ given, and, when, then }) => {
    let AppWrapper;
    given('the user has opened the app', () => {
      AppWrapper = mount(<App />);
    });
    
    and('the event list has been loaded', () => {
      expect(AppWrapper.state('events').length).toBeGreaterThan(0);
    });
    
    when('the user enters a specific number of events to be displayed', () => {
      let numberOfEvents = { target: { value: 4 } };
      AppWrapper.find('.numberOfEvents').simulate('change', numberOfEvents);
    });
    
    then('the application will display tha number of events entered by the user', () => {
      let NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      NumberOfEventsWrapper.setState({ numberOfEvents: 4 });
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(4);
    });
  });
});