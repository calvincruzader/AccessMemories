Feature: Review Some or All of the Entries
  In order to solidify information gained
  As a User of my own profile
  I want to be able to review some or all of the entries I created.

  Scenario: Review Starting From Any Entry
    Given I am logged in as a User
    When I review all
    Then I can start reviewing starting from any entry in the entire database

  Scenario: Review From a Topic
    When I review by chunk
    Then I can start reviewing starting from any entry within the topic

  Scenario: Review by Tag
    When I review by tag
    Then I can start reviewing entries that have that tag in them

  Scenario: Review by Difficulty
    When I review by difficulty
    Then I can start reviewing entries based on similar difficulty

  Scenario: Review by Least Recently Viewed
    When I review by Least Recently Viewed
    Then I can start reviewing starting from the least recently reviewed
