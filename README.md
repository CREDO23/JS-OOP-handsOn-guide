# JS OOP hands-on guide

<img src="./assets/images/poo.png">

## Introduction

This repository is designed to provide hands-on demonstrations and clear examples in Javascript to help you understand and implement OOP concepts effectively.

## Authors:

- @CREDO23 <bakerathierry@gmail.com>

## Table of contents

- [Oriented Object Programming paradigm](<Oriented Object Programming paradigm>)
- [History](History)
- [Terminologies with examples](<Terminologies & examples>)
  - Object
  - Class
  - Constructor
  - Class-based vs prototype-based
  - Encapsulation
  - Method
  - Instance Variable
  - Class Variable
  - Inheritance
  - Polymorphism
    - Compile-time polymorphism (Method Overloading)
    - Runtime polymorphism (Method Overriding)
  - Abstraction
  - Abstract Class
  - Destructor
  - Composition
  - Delegation
  - Open recursion
  - Mixins

# Oriented Object Programming paradigm

Object-oriented object programming is a programming paradigm that is based on objects. In general, such objects are models of real-world entities in the program (e.g.: a person, a vehicle, a home, etc.); each entity has its own characteristics (properties/attributes) and actions (methods/procedures) that are organized in a single unit called object.

[[ILlustration]]

# Genesis of oriented object programming

Simula, developed between 1962 and 1967 by Kristen Nygaard and Ole-Johan Dahl, was the first language that supports the object oriented programming. Simula introduced key concepts such as objects, classes, inheritance, subclasses, and virtual methods that are today an essential part of object-oriented programming.

## Key features of Simula's approach to OOP:

- **Class and Object Concept**: Simula introduced the concept of classes and objects, allowing programmers to model entities with state and behavior.

- **Inheritance**: Simula supported inheritance, enabling the creation of new classes by extending existing ones. This concept is crucial for code reuse and creating hierarchical relationships between classes.

- **Virtual Procedures**: Simula introduced the idea of virtual procedures (later known as virtual methods or polymorphic methods), which could be overridden in subclasses. This contributes to polymorphism, allowing different classes to respond to the same method call in a way that is appropriate for each class.

In 1966, [Alan Kay](https://en.wikipedia.org/wiki/Alan_Kay),considered as the father of the **Oriented Object Programming** coined the term **object oriented programming** at grad school. The idea was to use encapsulated mini-computers in software which communicated via message passing rather than direct data sharing — to stop breaking down programs into separate **data structures** and **procedures**.

Then, come SmallTalk in the game by Alan Kay, Dan Ingalls, Adele Goldberg, and others at Xerox PARC, based on Simula, the first that implemented purely the oriented object approach (more OO than Simula); you could not even create a "Hello Word" program without creating a class. Simula was the first recognized object programming language but did not implement it purely, it is ALGOL 60 extended with classes and objects.

## Key features of Smalltalk's approach to OOP:

- **Everything is an Object**: In Smalltalk, the language is built around the idea that everything is an object. This includes not only user-defined classes and objects but also basic data types and even the code itself.

- **Message Passing**: Smalltalk relies heavily on message passing between objects. Objects communicate by sending messages to each other, and method invocation is achieved through this mechanism.

- **Dynamic Typing**: Smalltalk is dynamically typed, meaning that the type of a variable is determined at runtime. This flexibility allows for a high degree of dynamism in the language.
