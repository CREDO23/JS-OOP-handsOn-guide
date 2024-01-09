import { ln } from "../../../helpers/getLineNumber.js"
import { lns1 , lns2, ps, ns, nt} from "../../../helpers/styles.js"
import { s1, s2, s4 } from "../../../helpers/separators.js"


// ======= SYMBOLE TYPE =======

/**
 * 
 * In previous parts, we saw that only symbols and strings may serve as key for objects.
 * If another type of is used as key, it is automatically converted to a string (e,g: true becomes "true")
 * 
 * In JavaScript, a symbol is a primitive value (unique) with an optional description. Two symbols can have
 * the same description and still be different, so description are just treated as label.
 * 
 * Symbols are immutable, you can’t change them, no matter how much you try.
 * 
 */

const id1 = Symbol("id");
const id2 = Symbol("id")

console.log(`${s1} ${lns1(` => Line ${ln()} SYMBOLE TYPE : `)}${s1}
- We created two symbols with the same name (description) and assigned them to id1 and id2:

- (id1 === id2) -----> ${ps(id1 === id2)}

- (id1.toString()) -----> ${ps(id1.toString())}

- (id1.description) -----> ${ps(id1.description)}

- Every 'Symbol()' call is guaranteed to return a unique Symbol

- Symbol() is a function and not a constructor, reason why we don't use the 'new' keywords to create new ones  ${s4}`)










// ======= ADDING METADATA / PREVENTING PROPERTIES COLLISION =======

/**
 * 
 * Symbols are often used in Javascript for:
 * 
 * - Creating invisible properties that can't be accessed outside of a module (assuming your code
 *   will be used by multiple modules). We will see that they can also be useful when creating metadata
 *   (information not relevant to the business need) for objects. 
 * 
 * - Avoiding property name clashes: When multiple libraries or modules are used together,
 *   there is a risk of property name clashes.
 * 
 */

// ------ 1. Adding metadata (Not accessible out of this module) ------

const lastaccessAverage = Symbol('lsa');

const student = {
    name : 'John',
    scores : [23,34,45,56],
   

    getAverage () {
        const sum = this.scores.reduce((acc, val) => acc + val, 0);
        this[lastaccessAverage] = new Date(Date.now()).toISOString()
        return sum / this.scores.length
    },

    // Metadata
    [lastaccessAverage] : null,

}

console.log(` ${lns1(` => Line ${ln()} ADDING METADATA / PREVENTING PROPERTIES COLLISION : `)}${s1}
- We created the 'student' object and added a metadata property that helps us to know the last date the average
  was requested (student.getAverage()) -----> ${ps(student.getAverage())}.
  
- The property key for that metadata is a symbol, hence unique and invisible out of this file, even though
  the student object may be exported.
  
- That metadata is only accessible in this file as long as the 'lastaccessAverage' variable is not exported. That is because
  its property name is unique and stored in the 'lastaccessAverage' variable that is only accessible in this file (module):
  (student[lastaccessAverage]) -----> ${ps(student[lastaccessAverage])}
  
- It will be invisible if we try to get the student's properties with (Objec.keys(student)) -----> ${ns(Object.keys(student).join(', '))}
  or within a for..in loop
  
- To see all property names including symbols, we can use (Reflect.ownKeys(student)) ---->`, Reflect.ownKeys(student), s2)



// ------ 1. Preventing properties collision ------

const createUserLib1 = {
     description : 'A library that helps to create users',

     users : [],

     createUser (name, age) {

            const newUser = {
                id : Math.trunc(Math.random() * 100),
                name,
                age
            }

            this.users.push(newUser)

            return newUser
     }
}

const createUserLib2 = {
    description : 'Another library that helps to create users',

    users : [],

    createUniqueIdKey (id) {
       return Symbol(String(id));
    },

    createUser (name, age) {

           const newId = Math.trunc(Math.random() * 100)

           const idKey = this.createUniqueIdKey(newId)

           const newUser = {
            [idKey] : newId,
            name,
            age
           }

           this.users.push({user : newUser, idKey})

           return newUser
    }
}

const user1 = createUserLib1.createUser('John', 34)

const user2 = createUserLib2.createUser('John', 23)

console.log(` ${lns2(`From line ${ln() - 50} to line ${ln() - 2} : `)} ${s1}
- We created two objects considered libraries that help to create users. Both of them provide an 'id' for each
  new user.
  
- The 'createUserLib1' uses a normal string for the 'id' property name, whereas the 'createUserLib2' uses a symbol.

- Supposing those libraries are meant to be used by consumers from all over the world, they should protect the 'id'
  property from being overwritten because they use it as a unique identifier to track users:
  
- 'createUserLib1' was used to create the (user1) -----> ${ps(JSON.stringify(user1))}

- 'createUserLib2' was used to create the (Reflect.ownKeys(user2)) -----> `, (Reflect.ownKeys(user2)), s2)

user1.id = '345-456-566'
user2.id = '345-456-566'

console.log(` ${lns2(`Line ${ln()} : `)} ${s1}
- As consumer, we decided to add an 'id' to each user upon creation for fonctionality purposes:

- ${nt('Drawback of using "string"')} => For the library that used normal string for the 'id' key, the 'id' property
  was overwritten: -----> ${ns(JSON.stringify(user1))}
  
- ${nt('Benefit of using "symbol"')} => For the library that used symbol for 'id' key, a new property was added to
  the user object. Now the consumer has its own id that can helps to track user as wanted without colliding with
  the id for the library 🤗 -----> ${ps(JSON.stringify(user2))}, all property names (Reflect.ownKeys(user2)) -----> `, Reflect.ownKeys(user2), s4)










// ======= GLOBAL SYMBOLS REGISTRY =======

/**
 * 
 * So far, we learned how to create unique symbols that are immutable.
 * We can also create symbols and keep them in the global registry that is accessible
 * anywhere, but here, the uniqueness doesn't exist anymore.
 * 
 * It's mean if we create two symbols that have the same description(name/key), they will refer the same value.
 * 
 * Sometimes we want same-named symbols to be same entities.
 * 
 */

const id3 = Symbol.for('id3');
const iid3 = Symbol.for('id3');

console.log(`${s1} ${lns1(` => Line ${ln()} GLOBAL SYMBOLS REGISTRY : `)}${s1}
- We created two symbols with the same name (description) and assigned them to id3 and iid3:

- (id3 === iid3) -----> ${ps(id3 === iid3)}

- (id3.toString()) -----> ${ps(id3.toString())}

- (Symbol.keyFor(id3)) -----> ${ps(Symbol.keyFor(id3))}

- For each 'Symbol()' call, if a symbol with the same description exists, it returns the existing otherwise create a new symbol${s4}`)










// ======= SOME SYSTEM SYMBOLS =======

// Visit https://tc39.es/ecma262/#sec-well-known-symbols