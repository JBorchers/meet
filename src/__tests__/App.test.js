import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api'
// import { getCalendarEvents } from '../../auth-server/handler';

// unit scope
// shallow renders component without children
describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('renders the number of events', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  })

});


// integration scope
// mount renders component with children
describe('<App /> integration', () => {
  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    // tests that use the same DOM will affect each other...
    AppWrapper.unmount();
  });
  // first test will not pass until:
  // 1. events state is created in App component
  // 2. events state is passed to EventList component as a prop of events

  test('app passes "locations" state as a prop to CitySearch', () => {
  const AppWrapper = mount(<App />);
  const AppLocationsState = AppWrapper.state('locations');
  expect(AppLocationsState).not.toEqual(undefined);
  expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
  AppWrapper.unmount();
  });

  test('get list of events matching the city selected by the user', async () => {
  const AppWrapper = mount(<App />);
  const CitySearchWrapper = AppWrapper.find(CitySearch);
  const locations = extractLocations(mockData);
  CitySearchWrapper.setState({ suggestions: locations });
  const suggestions = CitySearchWrapper.state('suggestions');
  // evaluate to an integer value ranging from 0 to suggestion.length - 1
  const selectedIndex = Math.floor(Math.random() * (suggestions.length));
  // once the index is selected, it's used to return the actual suggestion
  const selectedCity = suggestions[selectedIndex];
  // calls whatever function the component has directly
  await CitySearchWrapper.instance().handleItemClicked(selectedCity);
  const allEvents = await getEvents();
  const eventsToShow = allEvents.filter(event => event.location === selectedCity);
  expect(AppWrapper.state('events')).toEqual(eventsToShow);
  AppWrapper.unmount();
});

  test('get list of all events when user selects "See all cities"', async () => {
  const AppWrapper = mount(<App />);
  const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
  await suggestionItems.at(suggestionItems.length - 1).simulate('click');
  const allEvents = await getEvents();
  expect(AppWrapper.state('events')).toEqual(allEvents);
  AppWrapper.unmount();
});

test('"numberOfEvents" state of App component is updated with the number introduced in the input of NumberOfEvents', () => {
    const AppWrapper = mount(<App />);
    const eventObject = { target: { value: 12 } };
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    NumberOfEventsWrapper.find('.numberInput').simulate('change', eventObject);

    expect(AppWrapper.state('numberOfEvents')).toBe(12);
    AppWrapper.unmount();
  });

  test("length of EventList reflects the value of the input in NumberOfEvents", async () => {
        const AppWrapper = mount(<App />);
    
        const eventObject = { target: {value: 1}};
        const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
       
        await NumberOfEventsWrapper.find(".numberInput").simulate("change", eventObject);
        
        AppWrapper.update();
        expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual(eventObject.target.value);
        expect(AppWrapper.state("events").length).toBe(eventObject.target.value); 
        expect(AppWrapper.find(EventList).prop('events').length).toEqual(eventObject.target.value);

    AppWrapper.unmount();
  });

});


