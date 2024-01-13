import { ln } from "../../../helpers/getLineNumber.js"
import { lns1 , ps, ns} from "../../../helpers/styles.js"
import { s1, s4 } from "../../../helpers/separators.js"



// ======= USING OBJECT IN ARITHMETIC OPERATION =======

/**
 * 
 * In javascript, if we try to add or subtract two objects or even print them to the console,
 * the javascript engine will convert them to appropriate types to perform the operation.
 * 
 * Let assume that we have a class that represents 'Banknote' in our program and give the possibility
 * to add, substract, divide and multiply instances (objects).
 * 
 * So, what happens when we add or substract two objects ? Let us experiment!
 * 
 */

const banknote1 = {
    amount : 5,
    currency : 'USD',
}

const banknote2 = {
    amount : 10,
    currency : 'USD',
}

console.log(`${s1} ${lns1(` => Line ${ln()} USING OBJECT IN ARITHMETIC OPERATION : `)}${s1}
- We created two objects that reprensent banknotes. Normally, we should be able to add or substract them but:
  (banknote1 - banknote2) -----> ${ns(banknote1 - banknote2)}

- Their strings representation should give a relevant output but : (banknote1) -----> ${ns(banknote1)}
  
- Here comes the need to have a number representation of them so that we can perform mathematical operations and string
  representation to dislpay them.

- The Javascript engine wasn't able to autoconvert them like it does with string ("12" * "2") -----> ${ps("12" * "2")},
  we need to teach it how to convert our banknotes objects in form of numbers ${s4}`)











// ======= HINTS =======

/**
 * 
 * We will be using what we call "hints" to personalize how the Javascript engines should convert our objects according to
 * a type of conversion (number, string)
 * 
 * There is also a default hint that the engine uses when it is confused with which hint (number or string) it should apply. Generally,
 * when we are using the binary "+" operator, that can mean concatenation for string or addition for numbers or the "==" operator.
 * 
 * There are three special methods that helps us to personalize the conversion:
 * 
 * - [Symbol.toPrimitive](hint)
 * - toString()
 * - valueOf()
 * 
 * When the engine want to convert objects, it calls one of them according the need:
 * 
 * - [Symbole.toPrimitive](hint) if it exists OR
 * - toString() or valueOf() for the hint -> "string" : (E.g: String(Object))
 * - valueOf() or toString() for the hint -> "number" or "default" (E.g: Number(Object))
 * 
 * The engine looks first for the symbolic methode 'toPrimitive' and if it does not exist,
 * then look for 'toString' or 'valueOf'
 * 
 */

const banknote3 = {
    amount: 10,
    currency: 'EURO',

    [Symbol.toPrimitive](hint){
        if(hint =="string"){
            return `${this.amount} ${this.currency}`
        }else if(hint =="number"){
            return this.amount
        }else if(hint =="default"){
            return this.amount
        }
    }
}

// OR

const banknote4 = {
    amount: 50,
    currency: 'EURO',

    toString(){
        return `${this.amount} ${this.currency}`
    },

    valueOf(){
        return this.amount
    }
}

console.log(`${s1} ${lns1(` => Line ${ln()} HINTS : `)}${s1}
- We created new banknote objects 'banknote3' and 'banknote4' and customized the way they should be converted.

- Number conversion: (banknote3 + banknote4) -----> ${ps(banknote3 + banknote4)}

- String conversion: (banknote4, banknote3) -----> ${ps(String(banknote4))}, ${ps(String(banknote3))} ${s4}`)
