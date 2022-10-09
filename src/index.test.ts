import { test } from "uvu";
import * as assert from "uvu/assert";
import ofTheDay from "./index";

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

test("returns the same result for the same day", () => {
  assert.equal(ofTheDay(data), ofTheDay(data));
});

test("WHEN n IS PROVIDED, returns array of length n", () => {
  assert.is(ofTheDay(data, 2).length, 2);
});

test("WHEN n IS OMITTED, returns array of length 1", () => {
  assert.is(ofTheDay(data).length, 1);
});

test.run();
