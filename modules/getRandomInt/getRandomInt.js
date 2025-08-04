
/*
  Returns a random integer between 0 (inclusive) and the specified maximum (exclusive).
  If the maximum is not a positive number, it returns 0.
 */

export function getRandomInt(max) {
  const n = Math.floor(Number(max));
  if (isNaN(n) || n <= 0) return 0;
  return Math.floor(Math.random() * n);
}