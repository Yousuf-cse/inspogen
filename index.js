#!/usr/bin/env node

import chalk from "chalk";

const quotes = [
  "Believe you can and you're halfway there.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "It always seems impossible until it's done.",
  "You are never too old to set another goal or to dream a new dream.",
  "Don't watch the clock; do what it does. Keep going."
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(chalk.green.bold('💡 Random Quote: ') + chalk.blue(randomQuote));

