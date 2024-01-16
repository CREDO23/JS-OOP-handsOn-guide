import { ln } from "../../../helpers/getLineNumber.js"
import { lns1 , lns2, ps, ns} from "../../../helpers/styles.js"
import { s1, s2, s4 } from "../../../helpers/separators.js"

// ======= ADDING METHODS =======

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age : 36,
    "is online" : true
}

/**
 * As mentioned in the notes, for an object, methods are viewed as behaviors.
 * 
 * For example : Saying somthing [in real-life]. Here, it could be a function that
 * executes instructions.
 * 
 * Below is an example of how we can add behavior to the 'user' object. It's a simple 
 * function that is accessible from the object like other properties. That function can
 * be anonymous since it has a key : (object.[key]()) -> function()
 */

user.sayHi = function () {
    return 'Hi all';
}

console.log(`${s1} ${lns1(` => Line ${ln()} ADDING METHODS : `)}${s1}
- We added a method 'sayHi' to the 'user' object (a behavior to greet people), now we can
  comunicate with the user and tell him/her to say hi 😊: (user.sayHi()) -----> ${ps(user.sayHi())}

- We can also use predefined functions (user.sleep = sleep -> a function) ${s2}`)

function sleep () {
    return 'Ok, give me a sec 🙄'
}

user.sleep = sleep

console.log(` ${lns2(`Line ${ln()} : `)} ${s1}
- The sleep function has been defined separately and then added to the 'user' object:
  (user.sleep() -----> ${ps(user.sleep())})

- There is also a shorthand syntax for adding methods when creating an object with the literal syntax :

  E.g:
    const user = {
        name: 'John',
        sayHi () {
            // instructions
        }
    }
    
    => We can omit the [function] keyword ${s2}`)

const rabbit = {
    run () {
        return 'No worry, i am getting ready !'
    }
}

console.log(` ${lns2(`From line ${ln() - 6} to line ${ln() - 2} : `)} ${s1}
- We created the 'rabbit' object and added the 'run' method shorthanded :
  (rabbit.run()) -----> ${ps(rabbit.run())} ${s4}`)










// ======= USING [this] KEYWORD IN METHODS =======

/**
 * Sometimes an object needs to use its own data to perform some actions [behavior -> methods],
 * thus, its methods should be able to access the object whose their belongs to.
 * 
 * To accomplish that, we can use the keyword [this] to refer to the current object.
 * We can also reference the object directly by its name. Here, the function is bound to the object.
 * Later, we will see that with the keyword [this], the function is not bound to the object. The same
 * function can be reused with other objects.
 */

const student = {
    firstName: 'John',
    lastName: 'Doe',
    score : 65,

    getfullname(){
        return this.firstName + ' ' + this.lastName
    }
}

console.log(` ${lns1(` => Line ${ln()} USING [this] KEYWORD IN METHODS : `)}${s1}
- The 'student' object has the 'getfullName' method that use properties of the current object
  to perfom the action: (student.getfullName) -----> ${ps(student.getfullname())} ${s4}`)










// ======= [this] IS NOT BOUND TO A SPECIFIC FUNCTION =======

const admin = {
    firstName : 'Julo',
    lastName : 'Orak',
}

admin.getfullname = student.getfullname

console.log(`${s1} ${lns1(` => Line ${ln()} [this] IS NOT BOUND TO A SPECIFIC FUNCTION : `)}${s1}
- We created another object 'admin' and resuse the getfullName method from the 'student' object.

- Since the function is using [this] keyword to refer the current object, now, the current object is 'admin',
  hence, (admin.getfullName) -----> ${ps(admin.getfullname())}

- It's like defining the 'getfullName' function separately and reusing it for both 'student' and 'admin'
  knowing that the context will change accordingly to where it has been called ${s4}`)

