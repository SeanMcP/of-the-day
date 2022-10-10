import { test } from "uvu";
import * as assert from "uvu/assert";
import ofTheDay from "./index.js";

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

test("returns the same result for the same day", () => {
  assert.equal(ofTheDay(data), ofTheDay(data));
});

test("returns a different result for a different day", () => {
  const n = data.length;
  const today = new Date();
  const anotherDay = new Date(today);
  if (today.getDate() === 1) {
    anotherDay.setDate(2);
  } else {
    anotherDay.setDate(1);
  }

  const anotherDayISO = anotherDay.toISOString();
  const todaysResult = ofTheDay(data, n);
  const originalToISOString = Date.prototype.toISOString;
  Date.prototype.toISOString = () => anotherDayISO;
  const anotherDaysResult = ofTheDay(data, n);
  Date.prototype.toISOString = originalToISOString;

  assert.not.equal(todaysResult, anotherDaysResult);
});

test("WHEN n IS PROVIDED, returns array of length n", () => {
  assert.is(ofTheDay(data, 2).length, 2);
});

test("WHEN n IS OMITTED, returns array of length 1", () => {
  assert.is(ofTheDay(data).length, 1);
});

test.run();
