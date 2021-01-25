var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
function add(a, b) {
    return a + b;
}
var greet = function (name) {
    return 'hello' + name;
};
var greet1 = function (name) {
    return 'hello' + name;
};
function logger(message, userId) {
    var time = new Date().toLocaleTimeString();
    console.log(time, message, userId || 'Not signed in');
}
logger("Send message to friend");
function loggger(message, context) {
    if (context === void 0) { context = {}; }
    var time = new Date().toISOString();
    console.log(time, message, context.appId);
}
logger("User log in");
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, n) { return total + n; }, 0);
}
console.log(sum.apply(null, [90, 556, 45, 78, 34, 223]));
console.log(add(10, 20));
console.log(add.apply(null, [10, 20]));
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
var someArray = [1, "string", false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entry = someArray_1[_i];
    console.log(entry);
}
var list = [4, 5, 6];
for (var i in list) {
    console.log(i, list[i]);
}
function generateFunctions() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Generator Started");
                return [4 /*yield*/, 'pause'];
            case 1:
                _a.sent();
                console.log('Generator Function Completed');
                return [2 /*return*/];
        }
    });
}
var gfunctions = generateFunctions();
console.log(gfunctions.next());
console.log(gfunctions.next());
console.log(gfunctions.next());
function createNumbers() {
    var n;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                n = 0;
                _a.label = 1;
            case 1:
                if (!1) return [3 /*break*/, 3];
                return [4 /*yield*/, n++];
            case 2:
                _a.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
var numbers = createNumbers();
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
var some_numbers = (_a = {},
    _a[Symbol.iterator] = function () {
        var n;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    n = 1;
                    _a.label = 1;
                case 1:
                    if (!(n <= 10)) return [3 /*break*/, 4];
                    return [4 /*yield*/, n];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    n++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    },
    _a);
function func_sum(a, b) {
    return a + b;
}
var list1 = ["one", "two", "three"];
var set = new Set(list);
var newSet = new Set(["cat", "Dog", "mouse"]);
newSet["Maga"] = "Trump";
for (var l in list1) {
    console.log(l);
}
for (var _b = 0, list1_1 = list1; _b < list1_1.length; _b++) {
    var l = list1_1[_b];
    console.log(l);
}
for (var i in newSet) {
    console.log(i);
}
