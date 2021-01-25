import shuffle from "knuth-shuffle-seeded";

/**
 * Seed shuffles an array based on the ISO day and returns the first n items
 * @param {Object[]} array Any array
 * @param {number} [n=1] The number of entries to return
 * @returns {Object[]}
 * @example ofTheDay([1, 2, 3, 4, 5], 2)
 */
export default function ofTheDay(array, n = 1) {
  return shuffle(array.slice(0), new Date().toISOString().split("T")[0]).slice(0, n);
}
