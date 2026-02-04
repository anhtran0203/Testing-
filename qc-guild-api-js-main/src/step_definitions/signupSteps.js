const { Given, Then } = require('@cucumber/cucumber');
const { assert } = require('chai');
const { generatePassword, generateUsername } = require('../utilities/stringUtilities');

Given('generate the random username', async function generateRandomUsername() {
  const username = generateUsername.call(this);
  this.username = username;
  this.lastRun = this.username;
  this.attach(JSON.stringify({ lastRun: this.lastRun }, null, 2), 'text/plain');
});

Given('generate the random password', async function generateRandomPassword() {
  const password = generatePassword.call(this);
  this.password = password;
  this.lastRun = this.password;
  this.attach(JSON.stringify({ lastRun: this.lastRun }, null, 2), 'text/plain');
});

Then('userId should be following the numeric value', async function assertUserId() {
  assert(typeof this.response.data.user.id === 'number', 'userId is not following the numeric value');
});
