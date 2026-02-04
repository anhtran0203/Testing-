/**
 * Finds the position of the first occurrence of a substring (needle) within a string (haystack),
 * starting the search at a specified offset (optional).
 *
 * @param {string} haystack The string to search within.
 * @param {string} needle The substring to search for.
 * @param {number} [offset=0] The zero-based index indicating where to begin the search (optional).
 * @returns {number|boolean} The position (index) of the first occurrence of the substring within the string,
 *                           or `false` if the substring is not found.
*/
function strpos(haystack, needle, offset) {
  const i = (`${haystack}`).indexOf(needle, (offset || 0));
  return i === -1 ? false : i;
}

/**
 * Extracts substrings from a given string that are enclosed between specified start and end delimiters.
 *
 * @param {string} str The input string from which substrings will be extracted.
 * @param {string} startDelimiter The starting delimiter marking the beginning of the substrings to extract.
 * @param {string} endDelimiter The ending delimiter marking the end of the substrings to extract.
 * @returns {Array<string>} An array of substrings extracted from `str` that are enclosed between `startDelimiter` and `endDelimiter`.
 */
function getSubstringsBetween(str, startDelimiter, endDelimiter) {
  const contents = [];
  const startDelimiterLength = startDelimiter.length;
  const endDelimiterLength = endDelimiter.length;
  let startFrom = 0;
  let contentStart = 0;
  let contentEnd = 0;

  // Loop to find and extract substrings between delimiters
  while ((contentStart = strpos(str, startDelimiter, startFrom)) !== false) {
    contentStart += startDelimiterLength;
    contentEnd = strpos(str, endDelimiter, contentStart);
    if (contentEnd === false) {
      break;
    }
    // Extract substring between delimiters and add to contents array
    contents.push(str.substr(contentStart, contentEnd - contentStart));
    startFrom = contentEnd + endDelimiterLength;
  }

  return contents;
}

/**
 * Replaces placeholders in a string with corresponding values from the context object.
 * Placeholders are identified by the format '${placeholder}'.
 *
 * @param {string|object} str The input string containing placeholders to replace.
 *                            If an object is provided, it will be stringified before processing.
 * @returns {string} The string with placeholders replaced by corresponding values.
 */
function replacePlaceholders(str) {
  let string = str;

  // Convert non-string inputs to string
  if (typeof string === 'object') {
    string = JSON.stringify(string);
  } else if (typeof str !== 'string') {
    string = String(string);
  }

  // Replace placeholders if found in the string
  if (string.includes('${') && string.includes('}')) {
    const placeholders = getSubstringsBetween(string, '${', '}');
    for (let i = 0; i < placeholders.length; i++) {
      const placeholder = placeholders[i];
      const value = eval(`this.${placeholder}`);
      string = string.replace(`\${${placeholder}}`, value);
    }
  }
  return string;
}

module.exports = replacePlaceholders;
