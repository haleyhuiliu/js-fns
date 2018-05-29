/** Converts the first character of string to upper case and the ***remaining to lower case***.
 * @param {string} s
 * @return {string}
 * camelCase: fooBar
 * kebabCase: foo-bar
 * snakeCase: foo_bar
 */
export const capitalize = s =>
  s
    .split("")
    .map((c, i) => (i === 0 ? c.toUpperCase() : c.toLowerCase()))
    .join("");

/** Checks if string starts with the given target string.
 * @param {string} s - string
 * @param {string} t - target
 * @param {number} p - position
 * @return {boolean}
 */
export const startsWith = (s, t, p = 0) =>
  t.split("").reduce((acc, c, i) => acc && c === s.charAt(p + i), true);

/** Checks if string ends with the given target string.
 * @param {string} s
 * @param {string} t
 * @param {string} p
 * @return {boolean}
 */
export const endsWith = (s, t, p = 0) =>
  t
    .split("")
    .reverse()
    .reduce((acc, c, i) => acc && c === s.charAt(s.length - 1 - i - p), true);

/** Repeats the given string n times.
 * @param {string} s
 * @param {number} n
 */
export const repeat = (s, n) =>
  new Array(n).fill(null).reduce(acc => acc + s, "");

/** Truncates string if it's longer than the given maximum string length. The last characters of the truncated string are replaced with the omission string which defaults to "...".
 * @param {string} s
 * @param {number} l - length
 * @param {string} o - omission
 * @return {string}
 */
export const truncate = (s, l = 10, o = "...") =>
  s.length > l ? s.slice(0, 10) + o : s;
