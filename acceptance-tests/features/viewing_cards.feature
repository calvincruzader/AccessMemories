Feature: View Flash Cards
  In order to review concepts seamlessly
  As a User
  I want to be able to view my cards

  Scenario: View Recent Chunks of Cards
    Given I the User have been very active creating card entries
    When I visit my review home
    Then I should see my 10 most recent chunks of cards in reverse order

  Scenario: Searching for Cards
    Given I visit my review home
    When I search for cards
    Then I should see chunks of cards with that value in the title 
