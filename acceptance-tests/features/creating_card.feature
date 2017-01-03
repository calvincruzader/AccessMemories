Feature: Creating flash card
  In order to grasp knowledge recently learned
  As an User of my profile
  I want to be able to create a flash card

  Scenario: New flash card
    Given I am logged in as a User
    When I create a new flash card
    Then I am notified that the new flash card was created
    And the newly added card was added at the top of the deck
