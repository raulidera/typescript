"use strict";
const maximoComunDivisor = (n1, n2) => {
    let i;
    while (n2 !== 0) {
        i = n2;
        n2 = n1 % n2;
        n1 = i;
    }
    return n1;
};
console.log(maximoComunDivisor(18, 24));
const minimoComunDivisor = (n1, n2) => {
    return (n1 * n2) / maximoComunDivisor(n1, n2);
};
console.log(minimoComunDivisor(18, 24));
