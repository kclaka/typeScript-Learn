function add(a:number, b:number){
    return a + b
}


let greet = function(name:string) {
    return 'hello' + name
}


let greet1 = (name:string) => {
    return 'hello' + name
}

function logger(message:string, userId?:string){
    let time = new Date().toLocaleTimeString()
    console.log(time, message, userId || 'Not signed in')
}

logger("Send message to friend")


type Context = {
    appId?: string,
    userId?: string
}

function loggger(message: string, context: Context = {}){
    let time = new Date().toISOString()
    console.log(time, message, context.appId)
}

logger("User log in")


function sum(...numbers: number[]) : number {
    return numbers.reduce((total, n) => total + n, 0)
}



console.log(sum.apply(null, [90, 556, 45, 78, 34, 223]))



console.log(add(10, 20));
console.log(add.apply(null, [10, 20]))


// // function* generateDate(time:number, interval:number){
// //     let increment = 0;
// //     while(true){
// //         increment += 1
// //         const timeIncrement = increment  * interval
// //         yield new Date(time + timeIncrement)
// //     } 

// // }

// // function* createFib() {
// //     let a = 0
// //     let b = 1

// //     while (true) {
// //         yield a;
// //         [a, b] = [b, a + b]
// //     }
// // }

// // function* infiniteSequence() {
// //     var i = 0;
// //     while(true) {
// //         yield i++;
// //     }
// // }

// // let iterator = infiniteSequence();
// // iterator.next()

// // const generator = generateDate(new Date('2020-11-29T00:00:.000Z').getTime(), 60000)
// // console.log(generator.next())
// function* createFibonacciGenerator() { 
//     let a = 0
//     let b = 1
//     while (true) { 
//       yield a; 
//       [a, b] = [b, a + b] 
//     }
//   }
  
// let fibonacciGenerator = createFibonacciGenerator() // IterableIterator<number>
// fibonacciGenerator.next()   // evaluates to {value: 0, done: false}
// //   fibonacciGenerator.next()   // evaluates to {value: 1, done: false}
// //   fibonacciGenerator.next()   // evaluates to {value: 1, done: false}
// //   fibonacciGenerator.next()   // evaluates to {value: 2, done: false}
// //   fibonacciGenerator.next()   // evaluates to {value: 3, done: false}
// //   fibonacciGenerator.next()   // evaluates to {value: 5, done: false}

let someArray = [1, "string", false]

for(let entry of someArray){
    console.log(entry)
}


let list = [4, 5, 6]

for(let i in list){
    console.log(i, list[i])
}


function* generateFunctions() {
    console.log("Generator Started")
    yield 'pause'
    console.log('Generator Function Completed')
}

const gfunctions = generateFunctions();
console.log(gfunctions.next())
console.log(gfunctions.next())
console.log(gfunctions.next())


function*createNumbers() {
    let n = 0
    while(1) {
        yield n++
    }
}

let numbers = createNumbers()
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())


let some_numbers = {
    *[Symbol.iterator]() {
        for (let n = 1; n <= 10; n++){
            yield n
        }
    }
}


function func_sum(a:number, b:number) : number{
    return a + b
}


const list1 = ["one", "two", "three"]


const set = new Set(list)


const newSet:any = new Set(["cat", "Dog", "mouse"])

newSet["Maga"] = "Trump"


for(let l in list1){
    console.log(l)
}



for(let l of list1){
    console.log(l)
}


for(let i in newSet){
    console.log(i)
}