@regression_qa @signup
Feature: Testing Realworld API - Signup

  Background:
    Given generate the random username
    And set "username" to "${lastRun}"
    And generate the random password
    And set "password" to "${lastRun}"

  @smoke_qa 
  Scenario: Signup - TC01 - User can sign up with valid credentials
    When I send a POST request to "/users" with the following payload:
      """
      {
        "user": {
          "username": "${username}",
          "email": "${username}@example.com",
          "password": "${password}"
        }
      }
      """
    Then the response status code should be 201
    And userId should be following the numeric value
    And "${response.data.user.email}" is equal to "${username}@example.com"
    And "${response.data.user.username}" is equal to "${username}"
    And "${response.data.user.bio}" is equal to "null"
    And "${response.data.user.token}" is not equal to "null"

  Scenario: Signup - TC02 - User cannot sign up with username is null
    When I send a POST request to "/users" with the following payload:
      """
      {
        "user": {
          "username": null,
          "email": "${username}@example.com",
          "password": "${password}"
        }
      }
      """
    Then the response status code should be 422
    And "${response.data.errors}" is equal to "Username field is required"

