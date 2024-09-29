"use strict";
//Given an integer n, return a string array answer (1-indexed) where:
//    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
//    answer[i] == "Fizz" if i is divisible by 3.
//    answer[i] == "Buzz" if i is divisible by 5.
//    answer[i] == i (as a string) if none of the above conditions are true.
function fizzBuzz(value) {
    let numbers = new Map();
    for (let i = 1; i < value + 1; i++) {
        numbers.set(i, i);
    }
    for (let i = 1; i < numbers.size + 1; i++) {
        if (numbers.get(i) % 3 == 0) {
            if (numbers.get(i) % 5 == 0) {
                numbers.set(i, 'FizzBuzz');
            }
            else {
                numbers.set(i, 'Fizz');
            }
        }
        else if (numbers.get(i) % 5 == 0)
            numbers.set(i, 'Buzz');
    }
    return numbers;
}
console.log(fizzBuzz(100));
