export const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') throw new Error("Not a number");
  
  return a + b;
}

export const subtract = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') throw new Error("Not a number");
  
  return a - b;
}