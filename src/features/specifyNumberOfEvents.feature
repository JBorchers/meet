Feature: specify number of events to be displayed

Scenario: When user hasn’t specified a number, 32 is the default number
Given the user has opened the app
And the event list has been loaded
When the user does not enter a specific number of events to view
Then 32 events will be the default number for the application to display at once

Scenario: User can change the number of events they want to see
Given the user has opened the app
And the event list has been loaded
When the user enters a specific number of events to be displayed
Then the application will display tha number of events entered by the user