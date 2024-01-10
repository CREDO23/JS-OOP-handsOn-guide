# Object

Because the "object" is the essential building element of oriented object programming, we must ensure that we understand it.

[[Illustration]]

Objects, in contrast to other Datatypes in Javascript, are used to store keyed collections of multiple information and more complex data.

The easiest approach to create an object in javascript is using curly braces `{...}` and an optional list of properties within them separated by commas. A property is a **"key: value"** pair, where key is a string or a symbol (sometimes known as a **"property name"**) and value can be anything.

E.g:

```javascript
    const laptop = {
        processor: "AMD Ryzen 7",
        storage : 512,
        batteryLife : 10
    }
```


An object can be imagined as a cabinet containing signed files. The key saves each item of data in its own file. It is simple to locate a file by key or to add/remove a file with its key.

[[Illustration]]

So far, it is in general! But in this case, I'd like to be more explicit in the context of oriented objects programming.

In object-oriented programming, an object is viewed as a real-world entity. That object should correspond to a type, and based on that type (class), we may create multiple separate objects (instances) of the same type:

E.g:

- Type : **Computer** (*Class*)
    - Object 1 : Laptop
    - Object 2 : Desktop
    - etc.

Here, the type of Laptop and desktop is Computer.

[[Illustration]]

In this part, we will learn how to deal with objects in Javascript without using a class. I have just presented the notion of class here for clarification purposes and to let you know that in oriented object programming, objects are simply instances of a type (class, a function that helps to create objects instances), which we will discuss in the following section.

As previously stated, an object acts as a real-world entity, which implies it should have certain characteristics:

- **A state**: Reprsents the current values of each property (known as attributes in OOP jargon). It can be of two types: *Static* or *Dynamic*.
- **Behaviors**: Refer to the actions or functionalities that the object can perform (known as methods in the OOP jargon).
- **An identity**: Refers to a unique identifier or a distinguishing characteristic that sets one object apart from others. It is a way to differentiate one        instance of a class from another.
- **A responsability**: A specific function of an object within the system.

E.g:

- Type (class): Computer
    - Object: Laptop
        - Characteristics:
            - State:
                - processor: AMD Ryzen 7 (Static)
                - storage: 512 (Static)
                - powered_on: true (Dynamic)

            - Behaviors:
                - power_on
                - power_off
                - check_storage_space
                - check_status

            - Identity : Its serial number

            - Responsability : Processing tasks.


[[Illustration]]

