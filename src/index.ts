import shuffle from "knuth-shuffle-seeded";

/**
 * Seed shuffles an array based on the ISO day and returns the first n items
 * @param {Object[]} array Any array
 * @param {number} [n=1] The number of entries to return
 * @returns {Object[]}
 * @example ofTheDay([1, 2, 3, 4, 5], 2)
 */
export default function ofTheDay(array: Array<any>, n: number = 1) {
  // current date instance
  const date: Date = new Date();
  // numeric integer for shuffling operation
  const seed = Math.floor((date.valueOf() - new Date(date.getFullYear(), 0, 0).valueOf()) / 1000 / 60 / 60 / 24);
  return shuffle(array.slice(0), seed).slice(0, n);
}