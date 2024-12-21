//4. Record lets you give a cleaner type to objects

interface User5 {
    id: string;
    name: string;
}

type Users = Record<string, User5>;  
// type Users = { [key: string]: User5 };

const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

//5. Maps gives you an even fancier way to deal with objects. Very similar to Maps in C++!

// Initialize an empty Map
const usersMap = new Map<string, User5>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }

//6. In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.

type event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<event, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK

// 7. Type inferencing in zod

// const A = z.string();
// type A = z.infer<typeof A>; // string

// const u: A = 12; // TypeError
// const u: A = "asdf"; // compiles