require('dotenv').config({ path: 'src/configs/.env' });
const { Then, When } = require('@cucumber/cucumber');
const axios = require('axios');
const { assert } = require('chai');
const replacePlaceholders = require('../utilities/replacePlaceholders');

/*
 * The Action Common Steps section outlines the general steps to be followed when performing actions or interactions within the software application under test.
 * These steps ensure consistency and standardization across different testing scenarios.
*/

When('I send a POST request to {string} with the following payload:', async function postAPIWithBody(endpoint, payload) {
  const parsedPayload = JSON.parse(replacePlaceholders.call(this, payload));
  try {
    this.response = await axios.post(process.env.BASE_URL + endpoint, parsedPayload);
    this.attach(JSON.stringify(this.response.data, null, 2));
  } catch (error) {
    if (error.response) {
      this.response = error.response;
      this.attach(JSON.stringify(this.response.data, null, 2));
    } else {
      throw error;
    }
  }
});

When('set {string} to {string}', function setValueToVariable(variable, expectedText) {
  const txt = replacePlaceholders.call(this, expectedText);
  this[variable] = txt;
  this.lastRun = this[variable];
  this.attach(JSON.stringify({ lastRun: this.lastRun }, null, 2), 'text/plain');
});

/*
 * The Assertion Common Steps section outlines the general steps to be followed when asserting or verifying outcomes
 * and states within the software application during testing.
*/

Then('{string} is equal to {string}', function assertEql(actualValue, expectedValue) {
  const actualText = replacePlaceholders.call(this, actualValue);
  const expectedText = replacePlaceholders.call(this, expectedValue);
  this.attach(JSON.stringify(this.response.data, null, 2), 'text/plain');
  assert(actualText === expectedText, `The actual value ${actualText} was not equal to ${expectedText}`);
});

Then('{string} is not equal to {string}', function assertNotEql(actualValue, expectedValue) {
  const actualText = replacePlaceholders.call(this, actualValue);
  const expectedText = replacePlaceholders.call(this, expectedValue);
  this.attach(JSON.stringify(this.response.data, null, 2), 'text/plain');
  assert(actualText !== expectedText, `The actual value ${actualText} was equal to ${expectedText}`);
});

Then('the response status code should be {int}', function checkStatusCode(statusCode) {
  assert(this.response.status === statusCode, `The actual status code ${this.response.status} was not equal to ${statusCode}`);
  this.attach(JSON.stringify({ statusCode: statusCode.toString() }, null, 2), 'text/plain');
});
