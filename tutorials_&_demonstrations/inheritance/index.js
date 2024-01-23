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
        this.classNam
        this.name = name
        this.age = age
        this.gender = gender
    }

    sayHi(){
        return 'Hi all'
    }
}

const prsn = new Person('Joe', 33, 'male')

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

  ${nt('=>')} When extending classes, we are creating a prototype chain. So, the prototype of the parent class
     becomes the prototype of the prototype of the subclass class 😎.

     (Student.prototype.prototype == Person.prototype) -----> ${ps(Student.prototype.__proto__ === Person.prototype)}

     In the 'constructor' chapter, we saw that all methods of a class are added to the prototype of its constructor
     so that new instances can have access to those methods.

     When we call a method on an object (an instance), the JavaScript engine looks for it first in the current object;
     if it is not found, the JavaScript engines continue looking for it in the prototype chain of that object until it
     reaches the NULL object. This justifies how we were able to access the sayHi method from an instance of the Student
     class that inherits the Person class in which the sayHi method had been defined.

     (std.__proto__.__proto__ === Person.prototype) -----> ${ps(std.__proto__.__proto__ === Person.prototype)}

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
- We created a class named Student2 that inherits from the Person class and added a constructor to it.

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
     the construction of new instances ${s2}`)

class Student3 extends Person {
    constructor(name, age, gender, studentClass){
        super(name, age, gender) // Forward the parameters to the parent constructor
        this.studentClass = studentClass
    }
}

const std3 = new Student3('Lopez', 21, 'female', 'Class B')

console.log(` ${lns2(`From line ${ln() - 15} to line ${ln() - 2} : `)} ${s1}
- We created a class named Student3 that inherits from the Person class and added a constructor to it.

- Its constructor is receiving all the required parameters to construct new instances, even if it doesn't
  deal with all of them. It's in charge of forwarding to the parent constructor what it needs.
  
- Now, we can see that the initialization of the 'std3' object has been completed successfully!

  (std3) ---->`, std3,`
  
- (std3.sayHi()) -----> ${ps(std3.sayHi())} ${s4}`)










// ======= OVERRIDING class properties / methods =======

/**
 * 
 * When extending classes, we can override properties or methods of the parent class in the child class
 * (subclasse). This allows us to resuse exesting implementations.
 * 
 * As mentioned above, A subclass is like a more specific version of the parent class. We also have the ability
 * to implement more specific verion / values of  methods / properties for the subclass.
 * 
 * E.g:
 * 
 * - The Person class has a method that says 'Hi all'
 * - We can make it more specific for the Student subclass and return 'Hi all, I am a Student'
 */

// ------- 1. Methods -------

/**
 * 
 * Here, we can either create a new implementation of the parent method in the subclass relying on the method's
 * signature or extend the implementation of the parent method with super.method()'
 * 
 */

class Student4 extends Person {
    constructor(name, age, gender, studentClass){
        super(name, age, gender)
        this.studentClass = studentClass
    }

    sayHi(){
        return "Hi everyone, I'm a student." // Create a new implementation !
    }
}

const std4 = new Student4('Lopez', 21, 'female', 'Class B')

// OR

class Student5 extends Person {
    constructor(name, age, gender, studentClass){
        super(name, age, gender)
        this.studentClass = studentClass
    }

    sayHi(){
        return super.sayHi() + ', I am a Student!' // Extending the implementation !
    }
}

const std5 = new Student5('Lopez', 21, 'female', 'Class B')


console.log(`${s1} ${lns1(` => Line ${ln()} OVERRIDING class properties / methods : `)}${s1}
- We created two classes that inherit from the Person class and demonstrate the two way to override a method in subclasses.

- The person method:

  (prsn.sayHi()) -----> ${ps(prsn.sayHi())}

- The Student4 subclasses recreated a new implementation of the method:

  (std4.sayHi()) -----> ${ps(std4.sayHi())}
  
- The Student5 subclass extended the parent method logic:

  (std5.sayHi()) -----> ${ps(std5.sayHi())}
  
- Here we must not change the signature of the method:
    - name
    - parameters
    - return type
    - type
    
  otherwise, it will result in overloading instead of overriding  ${s2}`)


  
  // ------- 1. Properties -------

  /**
   * 
   * We can also override properties in subclasses.
   * 
   * When constructing new instances, subclass can override what its predecessor did.
   *
   * 
   */

  class Student6 extends Person {
    constructor(name, age, gender, studentClass){
        super(name, age, gender)
        this.studentClass = studentClass
        this.name = `${name} (${studentClass})` // Overriding property !
    }

    sayHi(){
        return super.sayHi() + ', I am a Student!'
    }
  }

  const std6 = new Student6('Santiago', 21, 'male', 'Class B')

  console.log(` ${lns2(`Line ${ln()} : `)} ${s1}
  - We created a class named Student6 that inherits from the Person class.

  - The Student6 (subclass) class is overriding the name of new instances set by the Person class (parent class)

  - (std6) ----->`, std6)