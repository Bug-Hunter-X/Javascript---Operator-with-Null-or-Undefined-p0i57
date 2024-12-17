function foo(a, b) {
  const aVal = a ?? 0; // Use nullish coalescing operator
  const bVal = b ?? 0;
  return aVal + bVal;
}

console.log(foo(undefined, 2)); //2
console.log(foo(null, 2)); //2
console.log(foo(0, 2)); //2