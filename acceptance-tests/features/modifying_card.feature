Feature: Modify card
  As a User of my profile
  I want to be able to modify/enhance a card

  Scenario: Note-taking a card
    Given I am User of my profile
    When I choose a card entry
    Then I am able to write notes about the card
    And I can add tags to it
    And I can choose which chunk the card goes in
