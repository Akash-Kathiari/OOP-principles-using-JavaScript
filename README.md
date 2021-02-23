https://coveralls.io/github/ak2378/OOP-principles-using-JavaScript
https://travis-ci.com/github/ak2378/OOP-principles-using-JavaScript

SOLID
S. Single Responsibility Principle == every function should do one thing. For example a function called getNameAndBirthdate is not abiding this rule. But there could be a singular function getName and another function called getBirthdate, both of those functions can be grouped within a bigger function called getInformation. So when creating a function keep an eye out for ways to break down your goals into smaller pieces.

O. Open-Closed Principle == "JavaScript modules should be open to extension but closed to modifications." the reading gave an exmaple of a variable holding an array that did not allow for any new items to be added in without having to open the JavaScript file. This can be fixed by creating an addItem function.

L.