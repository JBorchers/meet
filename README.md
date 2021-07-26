# meet app

_**Objective: To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.**_

###

**Feature: Filter events by city**
*User Story: As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

Scenario 1: When a user has not searched for a city, show upcoming events from all cities.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

Scenario 2: The user should see a list of suggestions when they search for a city.
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

Scenario 3: The user can select a city from the suggested list.
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

###

**Feature: show/hide event details**
*User Story: As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

Scenario 1: An event element is collapsed by default
Given the user has not clicked on a specific event when the list of events in the city has been loaded, then the application should display the event elements collapsed 

Scenario 2: User can expand an event to see its details
Given the list of events has been loaded, when the user clicks on a specific event, then application should expand the event element to show further details.

Scenario 3: User can collapse an event to hide its details
Given the user has expanded an event to see further details, when the user clicks off of the element or clicks a “hide” button, then the application should collapse the event to hide its details.

###

**Feature: Specify number of events**
*User Story: As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

Scenario 1: When user hasn’t specified a number, 32 is the default number
Given the user has not entered a specific number of events to view when the user opens the app, then 32 events will be the default number for the application to display at once.

Scenario 2: User can change the number of events they want to see
Given the user has indicated they would like to see a specific number of events listed when he/she types in that number in the application, then the application will display the number of events the user entered.

###

**Feature: Use the app when offline**
*User Story: As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

Scenario 1: Show cached data when there’s no internet connection
Given the user has opened the app or when there is no internet connection (or lost internet connection), then the application will still be able to display data that was cached during the previous session.

Scenario 2: Show error when user changes the settings (city, time range)
Given the user tries to change city or time range settings when there is no internet connection, then the app will display an error since it is no longer working with cached data.

###

**Feature: View a chart showing the number of upcoming events by city**
*User Story: As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

Scenario 1: Show a chart with the number of upcoming events in each city
Given the user has already specified a city, when the user clicks on the chart icon at the top of the page, then a chart will display the number of upcoming events in that city
