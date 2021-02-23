[![Coverage Status](https://coveralls.io/repos/github/ak2378/OOP-principles-using-JavaScript/badge.svg?branch=main)](https://coveralls.io/github/ak2378/OOP-principles-using-JavaScript?branch=main)
[![Build Status](https://travis-ci.com/ak2378/OOP-principles-using-JavaScript.svg?branch=main)](https://travis-ci.com/ak2378/OOP-principles-using-JavaScript)

SOLID

S. Single Responsibility Principle == every function should do one thing. For example, a function called getNameAndBirthdate is not abiding this rule. But there could be a singular function getName and another function called getBirthdate, both of those functions can be grouped within a bigger function called getInformation. So when creating a function keep an eye out for ways to break down your goals into smaller pieces.

O. Open-Closed Principle == "JavaScript modules should be open to extension but closed to modifications." the reading gave an exmaple of a variable holding an array that did not allow for any new items to be added in without having to open the JavaScript file. This can be fixed by creating an addItem function.

L. Liskov Substitution Principle == Liskov said "Derived classes should extend without replacing the functionality of old classes" this basically means that your code needs to be backwards compatible. A way to make this possible is to have a parent class and child class that can be interchangeable.

I. Interface Segregation Principle == This one basically means to avoid having not needed code, so only the bare essentials are required.

D. Dependency Inversion Principle == Handing over control from the function itself to the caller of the function. similar to only using essential code, when creating an event we do not need to use object implementation in every function.

THE FOUR PRINCIPLES OF OOP

Encapsulation helps with properly organizing logic. A class can have multiple methods that help define it. Encapsulation reminds me of the Single Responsibility Principle which breaks down your goals into smaller pieces. Encapsulation helps organize those pieces from top to bottom.

Abstraction basically means to make your package your code neatly by high level so it can be applied. instead of showing your fatty source code, abstraction will gather the purpose of your program so it can be easily used. Like a smart phone with multiple functions, if you want to see the weather, you just click on the weather app, instead of having to rummage through lower level detailed source code.

Inheritance helps to reduce code by using parent and child classes . The child class reuses all the items and methods of the parent and uses them in it's own individual way. So when big codebase is getting too abstract it's best to structure the code efficiently

Polymorphism defines a parent interface to be reused, then similar to inheritance the child reuses the parent's methods but uses the methods to create different outcomes. So having a parent that has a method purposed to shape its children is the key to polymorphism. While inheritance is more of a direct one to one value but purposed for a different outcome.

To Sum up OOP concepts: Encapsulation == reduced complexity + increase useability; Abstraction == reduce complexity + isolates impact of changes; Inheritance == eliminate redundant code; Polymorphism == refractor statements and use cases.