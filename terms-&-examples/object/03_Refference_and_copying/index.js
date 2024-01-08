import { ln } from "../../../helpers/getLineNumber.js"
import { lns1 , lns2, ps, ns, nt} from "../../../helpers/styles.js"
import { s1, s2, s4 } from "../../../helpers/separators.js"


// ======= REFERENCE AND COPYING =======

/**
 * 
 * In JavaScript, there are primitives types (Number, String, Boolean, Undefined, Symbol, and BigInt)
 * and Object types (Array, Object, Set, Map, etc.).
 * 
 * The way to reference and store both of them are quite different.
 * 
 * /

// ------ 1. Primitives ------

/**
 * 
 * For primitive types, when declaring variables, we store into the variable the "whole value".
 * That means, if we copy a variable X (assigned to a primitive) to a variable Y,the whole value
 * of X will be copied to Y and we will have two variables with equal values (not the same).
 * Here, X can change without affecting Y.
 * 
 */
let x = 10

let y = x  // y -> 10, x -> 10 NOT x -> 10 <- y

console.log(`${s1} ${lns1(` => Line ${ln()} REFERENCE AND COPYING : `)}${s1}
- We created a variable 'x' with 10 as value and copied 'x' as value to the variable 'y'.

- Now, 'x' and 'y' are two different variables that have equal values.

- The value of 'x' can change without affecting the value of 'y' and vice versa : (x) -----> ${ps(x)} ; (y) -----> ${ps(y)} ${s2}`)

y = 20

console.log(` ${lns2(`Line ${ln()} : `)} ${s1}
- We changed the value of 'y' to 20, (x) -----> ${ps(x)} ; (y) -----> ${ps(y)} ${s2}`)



// ------ 2. Objects ------

/**
 * 
 * For objects types, when declaring a variable, in contrast to primitive types, we store into the
 * variable a reference that points to the value. That means, if we copy a variable X (assigned to an object) to a
 * variable Y, the reference stored in X will be copied to Y, hence stored in Y. Here we have two different
 * variables that point (or reference) to the same value. If X changes, Y will also change since they are 
 * pointing to the same value (they are writing and reading to the same place in memory).
 * 
 */
const a = {x : 120, y : 240}

const b = a  // a -> {x:120, y: 240} <- b NOT a -> {x:120, y: 240}, b -> {x:120, y: 240}

console.log(` ${lns2(`From line ${ln() - 4} to line ${ln() - 2} : `)} ${s1}
- We created another variable 'a' with {x:120, y: 240} as value and copied 'a' as value to the variable 'b'.

- Now, 'a' and 'b' are two different variables that point to the same value.

- If the value of 'a' changes, the value of 'y' will also change and vice versa : (a.x, a.y) -----> ${ps(`${a.x}, ${a.y}`)} ; (b.x, b.y) -----> ${ps(`${b.x}, ${b.y}`)} ${s2}`)

b.x = 200
b.y = 300

console.log(` ${lns2(`Line ${ln()} : `)} ${s1}
- We changed the value of 'b' to {x:200, y: 300}, (a.x, a.y) -----> ${ns(`${a.x}, ${a.y}`)} ; (b.x, b.y) -----> ${ps(`${a.x}, ${a.y}`)} ${s4}`)










// ======= COMPARISON BY REFERENCE =======

/**
 * 
 * In Jvascript, everything is an object, hence the comparison is done by reference. If two variable
 * reference the same value, they are equal. In our case 'a' and 'b' are equal but 
 * 'x' and 'y' are not equal.
 * 
 * To verify if a variable 'a' and 'b' are equal in javascript, we use the strict comparison (===)
 */
console.log(` ${lns1(` => Line ${ln()} COMPARISON BY REFERENCE : `)}${s1}
- (a === b) -----> ${ps(a === b)}

- (x === y) -----> ${ns(x === y)}${s2}`)

const n = {x : 1, y :1}
const m = {x : 1, y : 1}

console.log(` ${lns2(`From line ${ln() - 3} to line ${ln() - 2} : `)} ${s1}
- We created two objects 'n' and 'm', they seem alike but they are two differents variables that point
  two different places in memory holding equal values 😐

- (n === m) -----> ${ns(n === m)} ${s4}`)




// ======= CLONING AND MERGING =======

/**
 * 
 * We have seen that using the affectation sign does not copy an object but copy its reference.
 * In Javascript, there are some methods we can use to copy properties of an object A
 * to an object B.
 * 
 */

// Here, we can use a [for...in] loop or Object.assign(dest, source), existing properties are overwriten !


// ------ 1. With a [for...in] loop ------

const obj = {
    name : 'John',
    age : 23
}

const cloneObj1 = {}

for (let k in obj){
    cloneObj1[k] = obj[k]
}

console.log(` ${lns1(` => Line ${ln()} COMPARISON BY REFERENCE : `)}${s1}
- We created two objects: 'obj' and an empty object 'cloneObj1'

- After copying all obj's properites into cloneObj1, we have two differents objects that point
  two different places in memory but holding equal values [A real clone]
  
- (obj's properties) -----> ${ps(Object.keys(obj).join(', '))}

- (cloneObj1's properites) -----> ${ps(Object.keys(cloneObj1).join(', '))}

- (obj === cloneObj1) -----> ${ps(obj === cloneObj1)}${s2}`)



// ------ 2. With a Object.assign(dest, source) ------

const cloneObj2 = {}

Object.assign(cloneObj2, obj)

console.log(` ${lns2(`From line ${ln() - 3} to line ${ln() - 2} : `)} ${s1}
- We created another clone of the object 'obj' with the [Object.assign(destination object, source object)] approach

- (obj's properties) -----> ${ps(Object.keys(obj).join(', '))}

- (cloneObj1's properites) -----> ${ps(Object.keys(cloneObj1).join(', '))}

- (obj === cloneObj2) -----> ${ps(obj === cloneObj2)}${s2}


- ${nt('Notes')}: The methods listed above are used to only copy primitive values ! If there is a nested object, its reference
  will be copied instead, hence the cloning will not work as expected for nested properties.${s4}`)

