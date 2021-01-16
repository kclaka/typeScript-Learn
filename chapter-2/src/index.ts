function squareOf(n: number){
    return  n * n
}


let a = {
    x : "uknown"
}


let b = {
    c : {
        x : "unknown"
    },

    name : {
        first : "Kenny"
    }
}


let d: {k : number, d:string} = {
    k: 12,
    d: "hey"
}

let X: {
    firstName:string 
    lastName:string

} = {
    firstName: "Kenny",
    lastName: "Igbechi"

}


class Person {
    constructor(
        public firstName: string,
        public lastName: string
    ) {}
}


X = new Person("Sully", "John")


console.log(X.firstName)
    

    

console.log(squareOf(0.55))
console.log(a.x)
console.log(b.name)
console.log(d.d)


let j : {
    b:number
    c?:string
    [key:number] : boolean
}

j = {b:20, 30:true, 50:false, c:undefined}

console.log(j)



let airplaneSeats : {
    [seatNumber: string] : string
} = {
    "34C" : "Kenny",
    "34D" : "Mike"
}


let user : {
    readonly firstuser: string
} = {
    firstuser : "Ifeoma"
}

type Name = string
type Age = number

let Students : {
    name : Name
    age : Age
} = {
    name : "Sully Mark",
    age: 29
}

console.log(Students)


console.log(airplaneSeats)



type Cat = {name: string, purrs:boolean}
type Dog = {name:String, barks:boolean}


type carordog = Cat | Dog
type catanddog = Cat & Dog

let a1 = [1, 2, 4]
let c : string[] = ['a']

let d1 = [1, "a"]

d1.map(_ => {
    if (typeof _ === 'number'){
        return _ * 3
    }

    return _.toUpperCase
})

let b2: [string, string, number] = ['Sully', 'Frank', 1992]

let option : [string, boolean]


option = ["dog", true]

type point3d = [number, number, number]



let t11: [number] = [1]

let trainFaires : [number, number?] [] = [
    [3.75],
    [8.25, 7.70],
    [10.50]
]

let list: [number, boolean, ...string[]] = [1, false, "phyno", "dbanj"]


let as : readonly number[] = [1, 2, 3]
let tu : readonly[number, string] = [27, "Kenny"]


const enum Flippable {
    Burger = 'Burger',
    Chair = 'Chair'
}


function flip(f: Flippable){
    return "flipped it"
}

console.log(flip(Flippable.Burger))