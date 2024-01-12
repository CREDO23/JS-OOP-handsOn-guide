import { ln } from "../../../helpers/getLineNumber.js"
import { lns1 , lns2, ps, ns, nt, bp} from "../../../helpers/styles.js"
import { s1, s2, s4 } from "../../../helpers/separators.js"



// ======= SYNTAX =======

/**
 * In JavaScript, we use the keyword "class" followed by braces to define classes
 * and arbitrary set of properties or methods inside them.
 */

class Computer {

    // Properties
    storage = 512
    ram = 16
    battery_life = 10

    // Methods
    check_storage_space(){
        return this.storage
    }
}

const comp1 = new Computer()

console.log(`${s1} ${lns1(` => Line ${ln()} SYNTAX : `)}${s1}
- We created a class 'Computer' that can represent a computer in our program.

- Then, created a computer object 'comp1' by instantiating the class 'Computer'

- (comp1 instanceof Computer) -----> ${ps(comp1 instanceof Computer)}

- (comp1.check_storage_space() -----> ${ps(comp1.check_storage_space())}

- Here, there are not commas between properties or methods like we did with objects syntax  ${s4}`)










// ======= SYNTACTIC SUGAR =======

/**
 * 
 * Many of you may think that "Class" is a new entity introduced in Javascript (ECMAScript2015); 
 * Let us see what is exactly a class in JavaScript.
 * 
 */

console.log(`${s1} ${lns1(` => Line ${ln()} SYNTACTIC SUGAR : `)} ${s1}
- Classes in Javascript are kind of functions (Constructors):

- (typeof Computer) -----> ${ps(typeof Computer)}

- No panic ! Let us see why ${s2}`)


/**
 * 
 * We are going to reprduce something similar to Computer without the "class" keyword.
 * We are going to do it with a "function" keyword.
 * 
 */


function Cmputer () {

        // Properties
        this.storage = 512
        this.ram = 16
        this.battery_life = 10
    
        // Methods
        this.check_storage_space = function(){
           return this.storage
        }
}

const comp2 = new Cmputer()

console.log(` ${lns2(`From line ${ln() - 15} to line ${ln() - 2} : `)} ${s1}
- We declared a function 'Cmputer' and defined the same properties and methods of the class 'Computer'
  inside it referencing the current object [this].

- And used it to create an kind of Cmputer 'comp2' that works exactky as 'comp1':

- (comp2.check_storage_space() -----> ${ps(comp2.check_storage_space())}

- (comp2 instanceof Cmputer) -----> ${ps(comp2 instanceof Cmputer)} ${s2}`)

/**
 * 
 * As stated above, "class" is a kind of function ! Not exactly "a function" because there are still some differences
 * between those two declarations we have just used to create similar outputs:
 * 
 * - Methods declared inside classes are not enumerable, so we cannot access them within a for..in loon or with (Object.keys()) but with 
 *   function declaration, they are (which is not relevant since they are not considered as attributes)
 * 
 * - Classes use the "strict mode" for all code inside them in constrast to function declarations.
 * 
 * - Apart from that, class declaration brings many other features that we will see later.
 * 
 */

console.log(` ${lns2(`Line ${ln()} : `)} ${s1}
- What does exactly happen when calling (new Computer)?

- ${nt('Note: ')} Right after declaring the class, a function is created with the same
  name as the class, in our case, "Computer.". This is what we call a "constructor," 
  generally defined inside the class. If not defined (our case), a default one is created (an empty).
  The goal of the constructor is to perform initialization when creating new instances of the class.



- ${bp("[0]")} A blank, plain JavaScript object is created for the new instance.

- ${bp("[1]")} The constructor is called. If there are attributes defined in the body of our class (our case),
  the initialization begins there, setting all of them in the plain object created then the constructor
  executes
  
- ${bp("[2]")} All methods defined are added to the prototype of that function created after the class's declaration
  (the constructor): Each function in JavaScript has a "prototype" property automatically created and attached to it after
  its definition. The "prototype" property is an object in which we can add methods or properties; it is then used as the
  prototype of all instances created with it, thus all of them will share the same methods.${s2}`)










// ======= CLASS EXPRESSION =======










// ======= GETTER AND SETTER =======










// ======= MAKING BOUND METHODS WITH CLASS =======
