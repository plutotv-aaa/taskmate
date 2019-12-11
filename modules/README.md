# Modules - Using Typescript with React

Similar to ECMAScript 2015(ES6) modules

![import-export](https://i.imgur.com/QdpRNkf.png)

A module is a file which contains at least one top level import or export a module.
Is Executred in its own scope.


So if I define a variable in this module and there exists a variable with the same name in another module

I won't get a name in collision declarations like variables functions etc that are not exported won't be visible outside of a module.

For example I defined a variable somewhere but I did not export it.

If I try to import this variable in some module I will get undefined.

![module-scope](https://i.imgur.com/eXvBxr8.png)


-----

OK.

This is how we import it multiply.

Let's add another export to our module

let's export a function called multiply by 2.

This function takes a number and multiplies it by 2.

Let's use the original multiply function for this

OK.

Now we can import this function as well in indexed yes let's type comma multiply by 2.

So this is how we import multiple named exports a module can have a single default export.

So let's export the multiply function by the fold.

For this we type export default.

Now let's import this function in index yes multiply is no longer supported as a named export.

So let's remove it from here and imported as default export.

We can name the default export and may be like let's name it multiply it.

Now we have a default export and the named export.

Also we can import everything a module exports into a single namespace for this we type asterisk s and

then the name of the namespace we can choose any name let's name it multiply.

Module now alter exports of the multiply module are available as properties of the multiply module namespace

since the multiply function is exported by default we can access it using the default property like

this multiply module dot default we can access other named exports as properties as well like this multiply

by 2 we can create aliases for named exports for this let's travel back in time

and let's create an alias for the multiplied by 2 function for this we type multiply by 2 as let's call

it m by 2.

And now we can access this function using the M by to areas it's important to note that in typescript

we can export not only the GM stuff we can export types as well let's export an interface from our module

hello world interface and imported in the index yes.

So since it's a named export we can import it like this.

Hello world.

Here we go.

That's it for this lecture.

Thanks for watching.