import { ln } from "../../helpers/getLineNumber.js"
import { lns1 , lns2, ps,nt, ns} from "../../helpers/styles.js"
import { s1, s4, s2 } from "../../helpers/separators.js"

/**
 * 
 * Inheritance is the concept of extending an existing class (the base class) and 
 * creating a new one (the subclass) that inherits the properties and methods of 
 * that existing class (the base class).
 * 
 * Here, inheritance helps us reuse code, create an "is-a" relationship between
 * classes, and organize our code in a hierarchy of classes.
 * 
 * Let us see how:
 * 
 * In JavaScript and many other languages, we use the keyword 'extends' to extend a class.
 * 
 * e.g:
 * 
 * class Rabbit extends Animal {};
 * 
 */


// ======= SINGLE INHERITANCE =======

class Person {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    sayHi(){
        return 'Hi all'
    }
}

class Student extends Person {
    score = [12,34,54,23,65]
}

const std = new Student('John', 34, 'male')

console.log(`${s1} ${lns1(` => Line ${ln()} SINGLE INHERITANCE : `)}${s1}
- We created a Person class and used it as a parent class to create another class (Student)

- Here, Student is a child class that inherits from the Person class (its parent/base class)

- We added a new property (scores) to the child class (Student).

- The Student class inherits all of his parent's properties and methods.

- After instantiating a new Student object [std], we can see that it has properties / methods from the parent class (inherited) and
  its own properties / methods:

  (std) ----->`, std, `
  
- (std.sayHi()) -----> ${ps(std.sayHi())}

- When instantiating a new subclass object, the parent class constructor must be called first and then the child
  class constructor can execute:

  ${nt('=>')} Since we are inheriting the parent properties, knowing that their initialization is done in the parent class constructor, we have 
     to wait for the parent constructor execution before starting to implement the child constructor. Otherwise, we will have an incomplete
     initialization which is an error in Javascript ${s2}`)

class Student1 extends Person {
    constructor(studentClass){
        this.studentClass = studentClass // 👎 Starting the implementation of the child constructor before calling the parent constructor ==> ERROR!!!
    }
}

try {
    const std1 = new Student1('thierry');
} catch (error) {
    console.log(` ${lns2(`From line ${ln() - 15} to line ${ln() - 2} : `)} ${s1}
- We created a class named Student1 that inherits from the Person class and added a constructor to the Student1 class.

- We started implementing the subclass constructor without calling the parent constructor

- We tried to instantiate a new Student1 object, unfortunately we got an error:
  => ${ns(error.message)}
  
- The [super] keyword is used to call the constructor of the parent class.`)
}










// ======= USING super IN CLASSES =======

class Student2 extends Person {
    constructor(studentClass){
        super() // 👍 First call the parent constructor!
        this.studentClass = studentClass
    }
}

const std2 = new Student2('Class A')

console.log(`${s1} ${lns1(` => Line ${ln()} USING super IN CLASSES : `)}${s1}
- We created a class named Student1 that inherits from the Person class and added a constructor to it.

- But, this time, we called the parent constructor with 'super()' before starting the implemetation of the 
  subclass constructor.
  
- Now, everything seems to work without throwing an error.

- (std2) ----->`, std2, `

${nt('=>')} As you can notice, we have another problem. The parent constructor signature has been overridden
            by the subclass constructor signature!
            
            ${ns('We can no longer pass the name, age, and gender parameters to the subclass constructor!!!')}
            
            - When extending classes, it is like creating a layer of constructors, each having the ability to
              call its predecessor.
            
            - Each layer contributes to the construction of new instances.
            
            - So, we can just pass all the required parameters to the constructor that is on top and then forward
              them to throughout the layers so that each layer can use relevant parameter to accomplish its job in
              the construction of new instances`)




// ======= OVERRIDING constructor =======

// ======= OVERRIDING class attributes =======