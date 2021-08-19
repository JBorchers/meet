Feature: show/hide event details

Scenario: An event element is collapsed by default
Given the user has not clicked on a specific event
When the event list is displayed
Then the application should display the events collapsed 

Scenario: User can expand an event to see its details
Given the list of events is displayed
When the user clicks the Show Details button of a specific event
Then the event element will expand to show further details

Scenario: User can collapse an event to hide its details
Given the user has expanded an event to see further details
When the user clicks the “Hide Details” button of a specific event
Then the application should collapse the event to hide its details