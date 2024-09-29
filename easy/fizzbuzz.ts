//Given an integer n, return a string array answer (1-indexed) where:
//    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
//    answer[i] == "Fizz" if i is divisible by 3.
//    answer[i] == "Buzz" if i is divisible by 5.
//    answer[i] == i (as a string) if none of the above conditions are true.

function fizzBuzz(value: number){
    let numbers = new Map<number,any>()
    for(let i = 1; i<value+1; i++){
        numbers.set(i,i);
    }
    
    for(let i = 1; i < numbers.size + 1; i++){
        if(numbers.get(i) % 3 == 0) numbers.set(i, 'Fizz');
        if(numbers.get(i) % 5 == 0) numbers.set(i, 'Buzz');
        if(numbers.get(i) % 3 == 0 && numbers.get(i) % 5 == 0) numbers.set(i, 'FizzBuzz');
    }
    return numbers;
}

console.log(fizzBuzz(10));
