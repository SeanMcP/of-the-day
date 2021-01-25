# `of-the-day`

[![npm](https://img.shields.io/npm/v/of-the-day.svg)](https://npmjs.com/package/of-the-day) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/of-the-day.svg)](https://npmjs.com/package/of-the-day) [![npm](https://img.shields.io/npm/dt/of-the-day.svg)](https://npmjs.com/package/of-the-day)

🍜 A utility to return items from a shuffled list based on the ISO day

## Install

```sh
npm install of-the-day
```

## Usage

```js
import ofTheDay from 'of-the-day';

const color = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const colorOfTheDay = ofTheDay(colors)
const colorsOfTheDay = ofTheDay(colors, 3)

console.log(colorOfTheDay, colorsOfTheDay)
// -> ['orange'], ['orange', 'red', 'blue']
```

And then again tomorrow:

```js
console.log(colorOfTheDay, colorsOfTheDay)
// -> ['green'], ['green', 'purple', 'orange']
```

## Why?

If you want an "item of the day" for your shop, or "today's featured article" on your blog, you can use this utility to reliably return a random item from your list.

## Credit

This library is a simple wrapper around [`knuth-shuffle-seeded`](https://npm.im/knuth-shuffle-seeded) by [Timothy Gu](https://github.com/TimothyGu).

## License

MIT © [Sean McPherson](https://seanmcp.com)