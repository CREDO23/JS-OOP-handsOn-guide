import { ln } from "../../../helpers/getLineNumber.js"
import { lns1 , lns2, ps, ns} from "../../../helpers/styles.js"
import { s1, s4 } from "../../../helpers/separators.js"


// ======= CONSTRUCTOR =======

/**
 * 
 * As stated, constructors are functions that are called when creating new objects from a class.
 * The constructor is responsible for initializing and settinp up everything for new instances.
 * 
 * Since it is a function, it can receive arguments. For constructors, it is not convenient to add
 * an explicit return statement because there's an implicit one.
 * 
 * We have seen that, when new instances are created, a plain javascript object is created where the
 * constructor will do the initialization, if there are properties defined out of the constructor
 * (in the class's body) the constructor will start setting all of them to that plain javascript object.
 * If there are other settings defined in the constructor, they will be executed. 
 * When finished, the constructor will return that plain javascript object which will be our new instance.
 * 
 * ==> [this] keyword is used to refer to the instance that is being created.
 * 
 * We have also seen that, when the constructor finishes its job, all methods defined in the class will be added to
 * its prototype (a javascript object that can contain methods or other properties) then set it to be the 
 * prototype of the new instance created so that the instance can use all of those methods.
 * 
 * 🚫 🚫 🚫 🚫 🚫 🚫 🚫
 * 
 * Adding a return statement that returns an object type (Array,Object, Map, etc) will override the object set up
 * by the constructor.
 * 
 */

class User {
    constructor (firstname, lastname){
        this.firstname = firstname
        this.lastname = lastname

        // Adding return 5, return 'John' or return Symbol will not affect anything
        // Adding return {} or another object type will override the object that was set up
    }

    sayHi () {
        return 'Hi I am ' + this.firstname + ' ' + this.lastname
    }
}

const user1 = new User('John', 'Doe');

console.log(`${s1} ${lns1(` => Line ${ln()} CONSTRUCTOR : `)}${s1}
- We created a class 'User' with a constructor that helps us to create new users with a first name and a last name.

- The (const user1 = new User('John', 'Doe')) creates a new user 'user1' with a first (John) name and last (Doe).

- (user1) ----->`, user1, `

- (user1.sayHi()) -----> ${ps(user1.sayHi())} ${s4}`)

class Admin {
    constructor (firstname, lastname){
        this.firstname = firstname
        this.lastname = lastname

        return new Date()
    }

    sayHi () {
        return 'Hi I am ' + this.firstname + ' ' + this.lastname
    }
}

const admin1 = new Admin('Richard', 'LeGrand')

console.log(` ${lns2(`From line ${ln() - 15} to line ${ln() - 2} : `)} ${s1}
- We created a class 'Admin' with a constructor that helps us to create new users with a first name and a last name.

- We also added an EXPLICIT return STATEMENT inside the constructor ( return new Date()).

- The (const admin1 = new Admin('Richard', 'LeGrand')) should create a new admin 'admin1' with a first name (Richard)
  and a last name (LeGrand).

-  (admin1) -----> ${ns(admin1)} ${s4}`)

