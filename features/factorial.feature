Feature: Factorial

    Scenario: Compute factorial
        When I ask for factorial 6
        Then I should get the result 720

    Scenario: Compute factorials
        When I ask for factorials
        Then I should get the results
            | argument | result |
            | 1        | 1      |
            | 2        | 2      |
            | 3        | 6      |
            | 4        | 24     |
