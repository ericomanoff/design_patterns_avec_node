A design pattern that favors composition over inheritance.

It allows you to add functionality to an object with out changing the base
code.

You can add functionality to an object at runtime.

Principle: Open Closed
code is open to extension but closed to modification

Use case:
when you want an object to perform a function in various ways based on a use case,
you can make that functionality an interface

when you are overriding a method in a parent class

Example:
Give the parent an interface with the desired functionality, then let the various
implementations of the interface dictate the behavior

