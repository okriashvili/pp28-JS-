// bigO notation is tool to understand performance of the code
// we can use builtin function "performance.now" to undestand how fast our comand needs to execute.
// that called time time complexity, if our code is less complex, it need less time to execute
console.log(performance.now())
let sum = 0
for (let i = 0; i <= 1000000; i++) {
    sum += i
}
console.log(performance.now())
console.log(sum.toLocaleString())
// but issue in that function is that it doesn't shows how complex our comand is, in our case we are counting the sum of every inmber from 1 to million up to milion, 
// and on every iteration for loop checks: 
// i's value, 
// compares it to million, 
// increase i with 
// beside it increase sum variable value
//  in total it does 4 operation every iteration  
// and we are counting up to milion, so it means we need to do 4milion operation which it quit a lot for our computer. while we can do it with different approach
num = 1000000
totalSum = num * (num + 1) / 2
console.log(totalSum.toLocaleString())
// that aproach only does 4 operation and result is the same, even we count up to million, ten milion or less.
// for such cases we have bigO notation to calculate complexity of out code and make sure to write less complex code 

// as we mentioned, if our code is less complex, it need less time to execute
// f.e : it needs less time to calculate sum of num with second approach rather than first one.
// beside time complexity we have space complexity



// bigO notation part2
// probllem analys - devide task into small pieces and solve each
// algorithm is process, unity of commands to solves tasks
// algorithm contains 3 things: input > algorithm > output
// so input is task itself
// algorithm : it considers the aproach, how to solve the task 
// we gave give different input to algoritmh and it will return output
// output : based on input and algorithm we get output


// in order to analyze the problem we need to go through:
// 1: - can you rewrite problem in your ways, whats the terms, what they ask you 
// - unerstand the input and what sort of infromation we should give to algorithm
// - what sort of information should we receive from algorithm
// - make sure that you have enough input to calculate output

// 2: - analayze the input:
// - start from the most obvious input, and rewrite input into your words, start from the eaziest and move to the harder one
// - in other ways, can our algorithm solve the inputs or edge case, or we gonna need to write extra algorithm  
// - keep in mind what we gonnda do if the input is wrong
// f.e : if we are asked to return list of positive number into the aray, and we have wrong type of input, which returns negative ones, but we are asked for positive
// the way to solve that is to return empty aray, cause if we know the output will be aray, we gonna treat output as aray and not as object.


// 3: devide big problem into small pieces:
// analyze the problem, devide it into small eazy tasks and solve small tasks, 
// start with eaziest one and move to harder one

// 4: start solving with easiet code 

// 5: after wrtie algorithm, rewrite it and try to improve 
// - review algorithm and write refactor, in which aspects we can improve the code 
// - review code, how easily it is to read and understand what the algorithm is
// - can you improve bigO
// - search more efficient solution

let numList = [23, 17, 19, 45, 12, 56, 63, 79, 127]

let primeNumList = []

for (i = 0; i < numList.length; i++) {
    let num = numList[i]
    let isPrime = true
    if (num < 2) {
        continue;
    }
    for (x = 2; x < num / 2; x++) {
        if (num % x == 0) {
            // console.log("number nor prime")
            isPrime = false
        }
    }
    if (isPrime) {
        primeNumList[primeNumList.length] = num
    }
}
console.log(primeNumList)
 