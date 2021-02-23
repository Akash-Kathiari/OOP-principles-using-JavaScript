[![Coverage Status](https://coveralls.io/repos/github/ak2378/OOP-principles-using-JavaScript/badge.svg?branch=main)](https://coveralls.io/github/ak2378/OOP-principles-using-JavaScript?branch=main)
[![Build Status](https://travis-ci.com/ak2378/OOP-principles-using-JavaScript.svg?branch=main)](https://travis-ci.com/ak2378/OOP-principles-using-JavaScript)

SOLID
S. Single Responsibility Principle == every function should do one thing. For example a function called getNameAndBirthdate is not abiding this rule. But there could be a singular function getName and another function called getBirthdate, both of those functions can be grouped within a bigger function called getInformation. So when creating a function keep an eye out for ways to break down your goals into smaller pieces.

O. Open-Closed Principle == "JavaScript modules should be open to extension but closed to modifications." the reading gave an exmaple of a variable holding an array that did not allow for any new items to be added in without having to open the JavaScript file. This can be fixed by creating an addItem function.

L.