import { ln } from "../../../helpers/getLineNumber.js"
import { lns1 , lns2, ps, ns} from "../../../helpers/styles.js"
import { s1, s4, s2 } from "../../../helpers/separators.js"



/**
 * 
 * In this file, we are going to demonstrate how the visibility and/or accessibility of a property
 * changes according to its definition in the class.
 * 
 * So far, we have been dealing with properties that are accessible outside the class (public)
 * and/or proper to each instance of the class (object). That means, for each instance (object),
 * the same property is created but with a different value.
 * 
 */


// ======= PUBLIC PROPERTIES / METHODS =======

/**
 * 
 * The fact to be "PUBLIC" defines the visibility, for the accessibility, we have property that
 * are only accessible on instances of the class and other properties that are only accessible
 * on the class itself.
 * 
 */

// ------- 1. Instance properties -------

/**
 * 
 * Instance properties helps us to define the identity/behavoir of each instance.
 * 
 */


class Car1 {

    // Public property (accessible in an instance object)
    color = 'black'

    constructor(make){

         // Public property (accessible in an instance object)
        this.make = make
    }

    startEngine(degre){
        // Instruction
    }
}

const car1 = new Car1('TOYOTA')

console.log(`${s1} ${lns1(` => Line ${ln()} PUBLIC PROPERTIES / METHODS : `)}${s1}
- We created the 'Car1' class and defined two instance properties (color, make). (Only accessible in an instance object)

- Trying to access the 'color' in the 'Car' class will fail. 

  (Car.color, Car.make) -----> ${ns(`${Car1.color}, ${Car1.make}`)}

- When instantiating new objects, those properties will be created; thus accessible in those instance objects.

  (car1.color, Car.make) -----> ${ps(`${car1.color}, ${car1.make}`)}${s2}`)



// ------- 2. Class properties -------

/**
 * 
 * Class or Static properties are useful when you want to:
 * 
 * - Define properties that are shared among all instances.
 * - Define utility functions. E.g: For a 'Car' class, having a function that compare two instances
 *   based on a property.
 * - Define constant variables. E.g : For a 'Math' class, defining the value of PI; for a 'Database' class
 *   defining the PORT.
 * - etc.
 * 
 */

class Car2 {

    // Static property (only accessible on the class level)
    static totalCars  = 0

    // Public property (accessible in an instance object)
    color = 'black'

    constructor(make){

         // Public property (accessible in an instance object)
        this.make = make

        Car2.totalCars++
    }

    startEngine(degre){
        // Instruction
    }

    /**
     * This getter give read access to instance objects. 
     * */
    // get totalCars(){
    //     return Car2.totalCars
    // }

}

const car2 = new Car2('Royce')
const car21 = new Car2('TOYOTA')

console.log(` ${lns2(`Line ${ln()} : `)} ${s1}
- We created the 'Car2' class and added a static property 'totalCars' that store the amount of car created.

- We also create two instances (car2, car21). (Car2.totalCars) -----> ${ps(Car2.totalCars)}

- Trying to access 'totalCars' from an instance object will fail. (car2.totalCars) -----> ${ns(car2.totalCars)}

- We have already seen how we can expose properties with accessors in case you want to give access to instances 😎. ${s4}`)










// ======= PROTECTED PROPERTIES / METHODS =======

/**
 * 
 * The concept of protected properties is not natively implemented in JavaScript.
 * Protected properties have a higher level of encapsulation (protection) than
 * class or static properties. They are only accessible within the class scope.
 * 
 * Later, after learning the concept of inheritance (subclasses), we will see that
 * protected properties are accessible inside subclasses; their value can be 
 * overridden in subclasses.
 * 
 * Since JavaScript does not support the 'protected' identifier, I will implement it
 * in TypeScript, which is just a superset of JavaScript.
 * 
 */










// ======= PRIVATE PROPERTIES / METHODS =======

/**
 * 
 * As protected, JavaScript does not have a 'private' identifier, but since ECMAScript2022,
 * the '#' symbol has been introduced to implement the 'private' properties.
 * 
 * Here, we have the highest level of encapsulation (protection). Private properties are accessible
 * only within the class scope; even subclasses do not have access to private properties.
 * 
 * It will also be implemented in Typescript. After grasping the concept of inheritance,.
 * 
 */
 