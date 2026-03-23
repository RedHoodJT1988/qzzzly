const questions = [
  {
    id: 1,
    question: "What is the result of `typeof null` in JavaScript?",
    choices: ["null", "object", "undefined", "boolean"],
    answer: 1,
    explanation: "Historical language quirk: `typeof null` returns 'object'."
  },
  {
    id: 2,
    question: "What is the main difference between `==` and `===`?",
    choices: ["`==` does type coercion, `===` does not", "`===` is slower", "`==` compares references only", "No difference"],
    answer: 0,
    explanation: "`==` performs type coercion before comparison; `===` requires same type and value."
  },
  {
    id: 3,
    question: "Which array method returns a new array without mutating the original?",
    choices: ["forEach", "map", "sort", "splice"],
    answer: 1,
    explanation: "`map` returns a new array; `sort` and `splice` mutate, `forEach` returns undefined."
  },
  {
    id: 4,
    question: "What is a closure in JavaScript?",
    choices: ["A function with no name", "A function that captures variables from its lexical scope", "An immediately-invoked function expression", "A private class field"],
    answer: 1,
    explanation: "A closure is a function that remembers the environment in which it was created."
  },
  {
    id: 5,
    question: "Which declarations are hoisted to the top of their scope?",
    choices: ["`let` and `const`", "`var` and function declarations", "Only `const`", "None are hoisted"],
    answer: 1,
    explanation: "`var` and function declarations are hoisted; `let`/`const` are hoisted but uninitialized (TDZ)."
  },
  {
    id: 6,
    question: "Where do resolved Promise callbacks (e.g., `.then`) run in the event loop?",
    choices: ["Macrotask queue (task)", "Microtask queue", "Render queue", "Blocking queue"],
    answer: 1,
    explanation: "Promise callbacks run in the microtask queue (higher priority than macrotasks)."
  },
  {
    id: 7,
    question: "How does `this` behave in arrow functions compared to regular functions?",
    choices: ["Arrow functions bind their own `this`", "Arrow functions have lexical `this`", "Arrow functions set `this` to `null`", "No difference"],
    answer: 1,
    explanation: "Arrow functions inherit `this` from the surrounding (lexical) scope."
  },
  {
    id: 8,
    question: "Which is a common way to create a shallow copy of an object?",
    choices: ["`Object.assign({}, obj)`", "`JSON.stringify(obj)`", "`obj.prototype`", "`Object.create(obj)`"],
    answer: 0,
    explanation: "`Object.assign` or the object spread (`{...obj}`) creates a shallow copy."
  },
  {
    id: 9,
    question: "What happens when one promise passed to `Promise.all` rejects?",
    choices: ["`Promise.all` waits for all then resolves with partial results", "`Promise.all` rejects immediately with that reason", "`Promise.all` ignores rejections", "It converts rejection to success"],
    answer: 1,
    explanation: "`Promise.all` rejects as soon as any input promise rejects."
  },
  {
    id: 10,
    question: "What's the difference between `null` and `undefined`?",
    choices: ["No difference", "`null` means no value; `undefined` means not assigned", "`undefined` is an object", "Both are boolean types"],
    answer: 1,
    explanation: "`null` is an explicit absence of value; `undefined` means a variable has not been assigned."
  },
  {
    id: 11,
    question: "What is the result of `NaN === NaN`?",
    choices: ["true", "false", "Throws an error", "undefined"],
    answer: 1,
    explanation: "`NaN` is not equal to itself; comparisons with NaN return false. Use `Number.isNaN()`."
  },
  {
    id: 12,
    question: "What is event delegation?",
    choices: ["Attaching multiple listeners to each child element", "Attaching a single listener to a parent to handle events from children", "Using `stopPropagation` to delegate events", "Using CSS to handle events"],
    answer: 1,
    explanation: "Event delegation uses a parent listener to handle events from many child elements efficiently."
  },
  {
    id: 13,
    question: "Where are shared methods typically stored for objects created by a constructor function?",
    choices: ["On each instance", "On the constructor's prototype", "In a global variable", "In a closure only"],
    answer: 1,
    explanation: "Methods shared across instances are placed on the constructor's `prototype`."
  },
  {
    id: 14,
    question: "What does an IIFE (Immediately Invoked Function Expression) look like?",
    choices: ["`function foo() {}`", "`(function(){ /*...*/ })()`", "`class Foo {}`", "`const x = () => {}`"],
    answer: 1,
    explanation: "An IIFE is a function expression that is invoked immediately, e.g., `(function(){})()`."
  },
  {
    id: 15,
    question: "What effect does `'use strict'` have in JavaScript?",
    choices: ["No effect", "Enables stricter parsing and throws more errors", "Makes code run faster always", "Disables modules"],
    answer: 1,
    explanation: "`'use strict'` opts into a stricter mode, preventing certain silent errors and unsafe features."
  },
  {
    id: 16,
    question: "What's the difference between `call` and `apply`?",
    choices: ["No difference", "`call` accepts an arguments list, `apply` accepts an array of arguments", "`apply` binds `this`, `call` does not", "Only `call` exists"],
    answer: 1,
    explanation: "`call(thisArg, arg1, arg2...)` vs `apply(thisArg, [arg1, arg2...])`."
  },
  {
    id: 17,
    question: "Which array method mutates the original array?",
    choices: ["map", "filter", "slice", "splice"],
    answer: 3,
    explanation: "`splice` modifies the original array; `map`, `filter`, and `slice` are non-mutating."
  },
  {
    id: 18,
    question: "How do you define a class in ES6?",
    choices: ["`function MyClass(){}` only", "`class MyClass { constructor() {} }`", "`var MyClass = {}`", "`createClass()`"],
    answer: 1,
    explanation: "ES6 introduced the `class` syntax as sugar over prototypes."
  },
  {
    id: 19,
    question: "What does `event.preventDefault()` do?",
    choices: ["Stops event propagation", "Prevents the default browser action for the event", "Deletes the event", "Stops all event listeners"],
    answer: 1,
    explanation: "`preventDefault()` cancels the browser's default behavior for the event."
  },
  {
    id: 20,
    question: "Which modern API provides a built-in deep clone for structured data?",
    choices: ["`Object.assign()`", "`structuredClone()`", "`JSON.parse(JSON.stringify())`", "`Object.create()`"],
    answer: 1,
    explanation: "`structuredClone()` performs deep cloning of structured data (where supported)."
  }
];

// Export for module-based usage
if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  } else {
    exports.questions = questions;
  }
}

// Browser-friendly global (non-module) access
if (typeof window !== 'undefined') {
  window.quizQuestions = questions;
}
