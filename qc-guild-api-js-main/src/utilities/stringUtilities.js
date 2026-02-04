/**
 * Generates a random string of specified length using alphanumeric characters (both lowercase and uppercase).
 *
 * @param {number} length The length of the random string to generate.
 * @returns {string} A randomly generated string of the specified length.
 */
function generateRandomString(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';

  // Generate random string using specified length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

/**
 * Generates a random number string of specified length using numeric characters (0-9).
 *
 * @param {number} length The length of the random number string to generate.
 * @returns {string} A randomly generated number string of the specified length.
 */
function generateRandomNumber(length) {
  const characters = '0123456789';
  let result = '';

  // Generate random number string using specified length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

/**
 * Generates a random string of specified length using special characters.
 *
 * @param {number} length The length of the random string to generate.
 * @returns {string} A randomly generated string of the specified length containing special characters.
 */
function generateRandomSpecialCharacter(length) {
  const characters = '!@#$%^&*()*+,-./:;<=>?@[]^_`{|}~';
  let result = '';

  // Generate random string using specified length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

/**
 * Generates a unique username consisting of a prefix ('User'), followed by random string and number segments.
 *
 * @returns {string} A randomly generated username in the format 'User-XXX-NNN', where:
 *                   - 'XXX' is a random string of 3 characters (alphabetic).
 *                   - 'NNN' is a random number of 3 digits (numeric).
 */
function generateUsername() {
  const prefix = 'User';
  const HYPHEN = '-';

  // Generate random string and number segments
  const randomStringSegment = generateRandomString(3);
  const randomNumberSegment = generateRandomNumber(3);

  // Combine segments to form the username
  const username = prefix + HYPHEN + randomStringSegment + HYPHEN + randomNumberSegment;

  return username;
}

/**
 * Generates a random password combining random string, special character, and number segments.
 *
 * @returns {string} A randomly generated password in the format 'XXXXX@NNNNN', where:
 *                   - 'XXXXX' is a random string of 5 characters (alphabetic).
 *                   - '@' is a random special character.
 *                   - 'NNNNN' is a random number of 5 digits (numeric).
 */
function generatePassword() {
  // Generate random string, special character, and number segments
  const randomStringSegment = generateRandomString(5);
  const randomSpecialCharSegment = generateRandomSpecialCharacter(1);
  const randomNumberSegment = generateRandomNumber(5);

  // Combine segments to form the password
  const password = randomStringSegment + randomSpecialCharSegment + randomNumberSegment;

  return password;
}

module.exports = { generatePassword, generateUsername };
