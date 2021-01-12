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



type Cat = {}