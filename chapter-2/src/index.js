function squareOf(n) {
    return n * n;
}
var a = {
    x: "uknown"
};
var b = {
    c: {
        x: "unknown"
    },
    name: {
        first: "Kenny"
    }
};
var d = {
    k: 12,
    d: "hey"
};
var X = {
    firstName: "Kenny",
    lastName: "Igbechi"
};
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
X = new Person("Sully", "John");
console.log(X.firstName);
console.log(squareOf(0.55));
console.log(a.x);
console.log(b.name);
console.log(d.d);
var j;
j = { b: 20, 30: true, 50: false, c: undefined };
console.log(j);
var airplaneSeats = {
    "34C": "Kenny",
    "34D": "Mike"
};
var user = {
    firstuser: "Ifeoma"
};
var Students = {
    name: "Sully Mark",
    age: 29
};
console.log(Students);
console.log(airplaneSeats);
var a1 = [1, 2, 4];
var c = ['a'];
var d1 = [1, "a"];
d1.map(function (_) {
    if (typeof _ === 'number') {
        return _ * 3;
    }
    return _.toUpperCase;
});
