A design pattern that favors composition over inheritance.

It allows you to add functionality to an object with out changing the base
code.

You can add functionality to an object at runtime.

Principle: Open Closed
code is open to extension but closed to modification

Use case:
when you want to build up an object with various abilities, you can make the 'base object' an interface

when you are writing a lot of subclasses that inherit from a base class, this
design pattern could be used to simplify code and increase resusability

Example:
Create an interface of the object you want to have composable features.
Implement the interface with a base case, then implement the interface with a
decorator that takes the interface in the constructor,
each time you need new functionality,
create an extension of the decorator and pass it an instance of the implemented interface