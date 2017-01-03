Feature: Sorting cards by difficulty
  As a User
  I want to be able to sort cards based on how difficult they are

  Scenario: Choosing Difficulty for a Card
    Given I am viewing a card as a User
    When I determine how difficult the card is after reviewing it
    Then I should see that card with that level of difficulty 
