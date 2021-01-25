function sum(a:number, b:number){
    return a + b
}


console.log(typeof(sum))

const adder = (a: number, b: number) => a + b

console.log(typeof(adder))

console.log(adder(3, 2))


let gr: (a: string, b: string) => void

gr = (name:string, greeting:string) => console.log(`${name} says ${greeting}`)


gr("Kenny", "Hello Everyone")


let calc: (a: number, b:number, c:string) => number

calc = (numOne:number, numTwo:number, action:string) => {
    if(action == 'add'){
        return numOne + numTwo
    }else{
        return numOne - numTwo
    }
}

console.log(calc(10000, 5000, 'hahaha'))


type Log = (message:string, user:string) => void

let log: Log = (msg, user) => {
    console.log(`${user} typed ${msg}`)
}

log("Logiing in to snapchat", "k3nni")

type Reserve =  {
    (from:Date, to:Date, destination:string)  : string
    (from:Date, to:Date)  : string

}

let reserver:Reserve = (from:Date, to:Date) => {
    return ""
}


// function filterArray(array, f)  {
//     let result = []

//     for (let i = 0; i < array.length; i++) {
//         let item = array[i]
//         if(f(item)) {
//             result.push(item)
//         }
//     }

//     return result
// }

// type Filter = {
//     (array:number[], f:(item: number) => boolean) : number[]
//     (srray: string[],  f: (iteam:number) => boolean) : string[]
// }

type Filter = {
    <T> (array: T[], f: (item: T) => boolean) : T[]
}

let filter : Filter = (array, f) => {
    let result = []

    for(let i = 0; i < array.length; i++) {
        let item = array[i]
        if(f(item)){
            result.push(item)
        }
    }

    return result
}

console.log(filter([34, 67, 56, 32, 56, 78], _ => _ % 2 == 0))