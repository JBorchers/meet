import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';


describe('<CitySearch /> component', () => {
  let locations, CitySearchWrapper;
  beforeAll(() => {
    locations = extractLocations(mockData);
   CitySearchWrapper = shallow(<CitySearch locations={locations} updateEvents={() => {}} />);
  });

  test('render text input', () => {
    expect(CitySearchWrapper.find('.city')).toHaveLength(1);
  });
  
  test('renders a list of suggestions', () => {
    expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
  });
  
  test('renders text input correctly', () => {
    const query = CitySearchWrapper.state('query');
    expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
  });
  
  test('change state when text input changes', () => {
    CitySearchWrapper.setState({
      query: 'Munich'
    });
    // changes its value to Berlin once the change event is called
    const eventObject = { target: { value: 'Berlin' }};
    CitySearchWrapper.find('.city').simulate('change', eventObject);
    expect(CitySearchWrapper.state('query')).toBe('Berlin');
  });

  test('render list of suggestions correctly', () => {
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1);
    // loops through all the suggestions and compares the items in suggestions one by one
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i]);
    }
  });

  test('suggestion list match the query when changed', () => {
  CitySearchWrapper.setState({ query: '', suggestions: [] });
  CitySearchWrapper.find(".city").simulate("change", {
    target: { value: "Berlin" },
  });
  const query = CitySearchWrapper.state("query");
  const filteredLocations = locations.filter((location) => {
    return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
  });
  expect(CitySearchWrapper.state("suggestions")).toEqual(filteredLocations);
  });  

  // checks whether the value of query’s state changes when the user clicks on a suggestion
  test('selecting a suggestion should change query state', () => {
        CitySearchWrapper.setState({ query: 'Berlin'});
        const suggestions = CitySearchWrapper.state('suggestions');
        CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
        expect(CitySearchWrapper.state('query')).toBe(suggestions[0]);
    });

  test('selecting CitySearch input reveals the suggestions list', () => {
        CitySearchWrapper.find('.city').simulate('focus');
        expect(CitySearchWrapper.state('showSuggestions')).toBe(true);
        expect(CitySearchWrapper.find('.suggestions').prop('style')).not.toEqual({display: 'none'});
    });

    test('selecting a suggestion should hide the suggestions list', () => {
        CitySearchWrapper.setState({
            query: 'Berlin',
            showSuggestions: undefined
        });
        CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
        expect(CitySearchWrapper.state('showSuggestions')).toBe(undefined);
        expect(CitySearchWrapper.find('.suggestions').prop('style')).toEqual({ display: 'none' });
    });

    test('when input is empty, the suggestion list should not be displayed', () => {
        const eventObject = {target: {value: ''}};
        CitySearchWrapper.find('.city').simulate('change', eventObject);
        expect(CitySearchWrapper.state('showSuggestions')).toBe(undefined);
        expect(CitySearchWrapper.find('.suggestions').prop('style')).toEqual({ display: 'none' });

    });

    test('when input is not empty, the suggestion list should be displayed', () => {
        const eventObject = {target: {value: 'b'}};
        CitySearchWrapper.find('.city').simulate('change', eventObject);
        expect(CitySearchWrapper.state('showSuggestions')).toBe(true);
        expect(CitySearchWrapper.find('.suggestions').prop('style')).toEqual({});
    })
  
});