# Rejection

A student project for [Learn JavaScript with Eric Elliott](https://ericelliottjs.com).

Want to work as a team?

You gotta lose to win.

Train yourself to:

* Get a raise
* Sell more
* Develop more business
* Negotiate better deals

The game has one rule:

**You must be rejected by a human being at least once per day.**

Ask for things outside your comfort zone, and you'll find yourself winning a lot more.

Win = 1 point.
Rejection = 10 points.

How long can you make your rejection streak last?


## Basic Level

Build a UI that lets you keep track of your score. Include a text input for the ask, who you asked, and two buttons: "Accepted" or "Rejected". For asynchronous requests such as emails or messages, record the score at the time you get the answer, not at the time you ask.

Your data structure can be a simple array of ask objects:

```js
interface Question {
  question: String,    // the ask
  askee: String,       // person asked
  status: String       // 'Accepted', 'Rejected', 'Unanswered'
}
```

You can calculate everything else you need to know by reducing over the list of asks.

It may be useful to display a running tally of the user's current score. Just remember that the current day's subtotal needs to be recalculated each time an ask is accepted or rejected, so it will be useful to keep the list in an array that you can [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) with each new ask added by the user.

## Remember TDD

1. Write a failing test
2. Write some code to make it pass
3. Refactor
4. Repeat

