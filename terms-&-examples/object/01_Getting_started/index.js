import { ln } from "../../../helpers/getLineNumber.js"
import { lns1 , lns2, ss} from "../../../helpers/styles.js"
import { s1, s2, s4 } from "../../../helpers/separators.js"


// ======= CREATING OBJECTS =========

// ----- 1. Using curly braces (the fatest approach) -----
const computer = {} // Also known as literal syntax



// ----- 2. Using the Object constructor -----
const person = new Object()

console.log(`${s1} ${lns1(`=> Line ${ln()} (CREATING OBJECTS) :`)}${s1}
- The type of the variable 'person' is ${ss(`${typeof person}`)},
- The type of the variable 'computer' is ${ ss(`${typeof computer}`)} ${s4}`)










// ======= ADDING PROPERTIES / MODIFYING EXISTING ONES =========

// ------ 1. When creating the object ------
const admin = {
    name : 'John',
    age : 21,
    id : '123-232-jh',
    "is active" : true // We can also use multiwords keys
}

console.log(`${s1} ${lns1(`=> Line ${ln()} ADDING PROPERTIES / MODIFYING EXISTING ONES`)} : ${s1}
- The object 'admin'  was created with the following properties: ${ss(`[${Object.keys(admin).join(', ')}]`)} ${s2}`)



// ------ 2. After creating the object ------

const user = {}

console.log(` ${lns2(`Line ${ln()} :`)} ${s1}
- The object 'user' was created without properties: [${Object.keys(user)}] ${s2}`)

user.name = 'Joe',
user.gender = 'Male'

console.log(` ${lns2(`Line ${ln()} :`)} ${s1}
- Now the object 'user' has the following properties: [${Object.keys(user).join(', ')}] ${s2}`)




// ------ 3. Changing existing properties ------

console.log(` ${lns2(`Line ${ln()} :`)} ${s1}
- So far, the object 'admin' has the property 'age' set to ${ss(`${admin.age}`)} ${s2}`)

admin.age = 22

console.log(` ${lns2(`Line ${ln()} :`)} ${s1}
- Now the object 'admin' has the property 'age' set to ${ss(`${admin.age}`)} ${s4}`)










// ======= GETTING / DELETING PROPERTIES =========

console.log(`\nAt line [], the property 'name' of of the object user still exists:
(user.name) -----> ${user.name}`)

delete user.name
delete admin.age

console.log(`\nAt line [], the property name of the object 'user' has been deleted, so if we try to access it, we will get an error message:`)

try {
    console.log(user.name)  // It does no longer exist
} catch (error) {
    console.log(`(user.name) -----> ${error.message}`)
}










// ======= USE AND BENEFITS OF SQUARE BRACKETS =========

// ------ 1. Accessing multiwords property ------
console.log(`\n- We created the 'admin' object with a multiword property [is active], so far
 we are using the dot notation to access object properties; if we do the same with a 
 multiword property [e.g: admin.is active], it will result in a syntax error !
 
 - To access multiword properties, we can only use the brackets notation: (admin["is active"])
    -----> ${admin["is active"]}}
 
 - The bracket notation work with all kind of property name, so we access other properties with the
    brackets notation [e.g : (admin["age"]) -----> ${admin["age"]}

 - The brackets notation work when creating the object (const user = {["name"] : "John"}).
  
 - Quotes are reuired in the brackets notation, any type of quote will work!`)



 // ------ 2. Creating properties name as a result of an expression (COMPUTED) ------
 let student1 = "John" + "Smith"
 let student2 = "John" + "Doe"

 const studentsScore = {
    [student1] : 23
 }

 studentsScore[student2] = 59

 console.log(`\nFron line [] to line []:
 - We created 'studentsScore' object with two properties as result of a concatenation of strings and 
    now we can get or set those properties:
    (studentsScore[student1] or studentsScore[""John" + "Smith""]) -----> ${studentsScore[student1]}

 - The dot notation cannot work in this case`)










// ======= KEY/VALUE PAIR SHORTHAND [using existing variable name/value as property name/value of an object] =========

const owner = "John doe"

const car = {
    owner
}

console.log(`\nFrom line [] to line []:
- We created 'car' object with a property that have the name of an existing variable and the value
 of that variable

- Now we can get or set that property: (car.owner) -----> ${car.owner}`)










// ======= PROPERTY NAME [keys] LIMITATIONS =========

const multiKeys = {
    "is real" : true,
    0 : "First index",
    1 : "Second index",
    return : "Any value",
    const : "a value",
    let : "anoter value",
    break : "..."
}

console.log(`\nFrom line [] to line []:
- We created the 'multiKeys' object that have  some properties that have the same name as some reserved name in JavaScript.

- Normally, we can either use normal string or symbols as prooerty name, other types of properties name are automatically converted to strings.

- I wanted to show you how property names do not have limit in term of naming, that is just because all of them will be converted into string:
E.g:
    - return -----> "return"
    - 0      -----> "0"`)







// ======= CHECKING PROPERTIES EXISTENCE =========










// ======= LOOPING OVER OBJECT'S PROPERTIES =========










// ======= ORDER OF PROPERTIES IN AN OBJECT =========




