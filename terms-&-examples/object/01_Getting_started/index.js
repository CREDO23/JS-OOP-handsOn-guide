import { ln } from "../../../helpers/getLineNumber.js"
import { lns1 , lns2, ss, es} from "../../../helpers/styles.js"
import { s1, s2, s4 } from "../../../helpers/separators.js"


// ======= CREATING OBJECTS =========

// ----- 1. Using curly braces (the fatest approach) -----
const computer = {} // Also known as literal syntax



// ----- 2. Using the Object constructor -----
const person = new Object()

console.log(`${s1} ${lns1(` => Line ${ln()} (CREATING OBJECTS) : `)}${s1}
- The type of the variable 'person' is ${ss(typeof person)},
- The type of the variable 'computer' is ${ ss(typeof computer)} ${s4}`)










// ======= ADDING / SETTING PROPERTIES =========

// ------ 1. When creating the object ------
const admin = {
    name : 'John',
    age : 21,
    id : '123-232-jh',
    "is active" : true // We can also use multiwords keys
}

console.log(`${s1} ${lns1(` => Line ${ln()} ADDING / SETTING PROPERTIES : `)} ${s1}
- The object 'admin'  was created with the following properties: ${ss(`[${Object.keys(admin).join(', ')}]`)} ${s2}`)



// ------ 2. After creating the object ------

const user = {}

console.log(` ${lns2(`Line ${ln()} : `)} ${s1}
- The object 'user' was created without properties: ${ss(`[${Object.keys(user)}]`)} ${s2}`)

user.name = 'Joe',
user.gender = 'Male'
user["is active"] = true
user["age"] = 34

console.log(` ${lns2(`Line ${ln()} : `)} ${s1}
- Now the object 'user' has the following properties: ${ss(`[${Object.keys(user).join(', ')}]`)} ${s2}`)




// ------ 3. Changing existing properties ------

console.log(` ${lns2(`Line ${ln()} : `)} ${s1}
- So far, the object 'admin' has the property 'age' set to ${ss(admin.age)} ${s2}`)

admin.age = 22

console.log(` ${lns2(`Line ${ln()} : `)} ${s1}
- Now the object 'admin' has the property 'age' set to ${ss(admin.age)} ${s4}`)










// ======= GETTING / DELETING PROPERTIES =========

console.log(`${lns1(` => Line ${ln()} GETTING / DELETING PROPERTIES : `)} ${s1}
- So far, the property 'name' of the object user still exists:
(user.name) -----> ${ss(user.name)} ${s2}`)

delete user.name
delete admin.age

console.log(` ${lns2(` At line [${ln() - 3}] `)}, the property name of the object 'user' has been deleted,
 so if we try to access it, we will get 'undifined' as result:  (user.name) -----> ${es(user.name)} ${s4}`)










// ======= USE AND BENEFITS OF SQUARE BRACKETS =========

// ------ 1. Accessing multiwords property ------
console.log(`${lns1(` => Line ${ln()} USE AND BENEFITS OF SQUARE BRACKETS : `)} ${s1}
- We created the 'admin' object with a multi word property ['is active']; so far
  we are using the dot notation to access object properties; if we do the same with a 
  multi word property [e.g: admin.is active], it will result in a ${es('syntax error' )} !
 
- To access multi word properties, we can only use the brackets notation: (admin["is active"]) -----> ${ss(admin["is active"])}
 
- The bracket notation work with all kind of property name, so we can access other properties with the
  brackets notation [e.g : (admin["id"]) -----> ${ss(admin["id"])}

- The brackets notation work also when creating the object (const user = {["name"] : "John"}).
  
- Quotes are required in the brackets notation, any type of quote will work! ${s2}`)



 // ------ 2. Creating properties name as a result of an expression (COMPUTED) ------
 let student1 = "John" + "Smith"
 let student2 = "John" + "Doe"

 const studentsScore = {
    [student1] : 23
 }

 studentsScore[student2] = 59

 console.log(` ${lns2(`From line ${ln() - 9} to line ${ln() - 2} : `)} ${s1}
- We created the 'studentsScore' object with two properties as result of a concatenation
   of strings (computation) and now we can get or set those properties:
   (studentsScore[student1] or studentsScore["John" + "Smith"]) -----> ${ss(studentsScore[student1])}

- The computation can also be done at the runtime. (e.g: With user's prompts, etc)

- The dot notation cannot work in this case ${s2}`)










// ======= KEY/VALUE PAIR SHORTHAND [using existing variable name/value as property name/value of an object] =========

const owner = "John doe"

const car = {
    owner // same as owner : owner
}

console.log(`${lns1(` => Line ${ln()} KEY/VALUE PAIR SHORTHAND : `)} ${s1}
- We created the 'car' object with a property that has the name of an existing variable ['owner'] and the value
 of that variable.

- Now we can get or set that property: (car.owner) -----> ${ss(car.owner)} ${s4}`)










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

console.log(`${lns1(` => Line ${ln()} PROPERTY NAME LIMITATIONS : `)} ${s1}
- We created the 'multiKeys' object that has  some properties that have reserved name in JavaScript.

- Normally, we can either use normal string or symbols as prooerty name, other types of properties will automatically be converted into strings.

- I wanted to show you how property do not have limit in term of naming (in contrast to variables), that is just because all of them are automatically converted into string:

E.g:
    - return -----> "return"
    - 0      -----> "0" ${s4}`)







// ======= CHECKING PROPERTIES EXISTENCE =========

console.log(`${lns1(` => Line ${ln()} CHECKING PROPERTIES EXISTENCE : `)} ${s1}
- Some properties have been deleted from the 'admin' object, we can now check by using the ['in'] operator:
  ('age' in admin) -----> ${es("age" in admin)} or ('id' in admin) -----> ${ss("id" in admin)} ${s4}`)










// ======= LOOPING OVER OBJECT'S PROPERTIES =========

console.log(`${lns1(` => Line ${ln()} LOOPING OVER OBJECT'S PROPERTIES : `)} ${s1}
- There is a special form of loop that allows to walk over property keys of an object [for ... in] :

E.g: for (let key in user) {
        console.log(key)
     } -----> : ${s1}`)
    
     for (let key in user){
            console.log(ss(key))
     }

console.log(s4)
