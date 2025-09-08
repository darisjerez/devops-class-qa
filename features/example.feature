Feature: Example site

  Scenario: Title contains Example
    Given I open the home page
    Then the title should contain "Example Domain"