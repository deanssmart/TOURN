//helper function to check the input is a power of 2 and isnt 1

export const isPowerOf2 = (n) => Math.log2(n) % 1 === 0 && n !== 1;
