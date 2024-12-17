# Javascript + Operator with Null or Undefined

This repository demonstrates an unexpected behavior of the `+` operator in JavaScript when one of the operands is `null` or `undefined`.

## Bug Description

When using the `+` operator with `null` or `undefined`, JavaScript may not behave as expected.  This is due to type coercion.  `undefined` coerces to `NaN` and `null` coerces to `0`, leading to different results compared to strict addition with numbers.

## Bug Reproduction

1. Clone this repository.
2. Open `bug.js` and run the code.
3. Observe the output.  You will see that `foo(undefined, 2)` returns `NaN` while `foo(null, 2)` returns `2`.

## Solution

The solution involves explicitly checking for `null` or `undefined` and handling these cases appropriately.  You can use the nullish coalescing operator (`??`) or other methods to provide default values.

See `bugSolution.js` for a possible solution. 