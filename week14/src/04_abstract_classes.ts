/*
1. Can an Abstract Class Have a Constructor?

Yes, an abstract class can have a constructor in many programming languages like Java, C#, and Python. The constructor of an abstract class is primarily used to initialize fields or perform common setup tasks for its subclasses.
2. Can You Use the super Keyword to Assign Values in Abstract Classes?

Yes, the super keyword can be used in a subclass to invoke the constructor of its abstract parent class. This allows a subclass to pass specific values to the abstract class's constructor and initialize its fields.
3. Can the Constructor Be Used to Create an Object of the Abstract Class?

No, you cannot directly instantiate an abstract class, even if it has a constructor. However, the constructor is called indirectly when a concrete subclass is instantiated. The subclass must use the abstract class's constructor (via super) to perform initialization.


# Difference between abstract classes and interfaces-:

-interfaces: can only have abstract methonds unlike abstract classes having both abstract and concrete methods. Also, they allow multiple inheritance, which is not allowed by classes

-abstract classes: can contain both abstract as well concrete methods, unlike interfaces. Java and TS, do not allow them to implement multiple inheritance

*/