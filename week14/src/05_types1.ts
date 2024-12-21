type User2 = {
    name: string;
    age: number;
}

type Manager2 = {
    name: string;
    id: number;
}

// union --> it can basically can either all properties of User2 or all of Manager2 or both
type UserorManager = User2 | Manager2;

const a : UserorManager = {
    name : "yash",
    age: 23
}

const b : UserorManager = {
    name : "ayush",
    id : 293084
}

const c : UserorManager = {
    name : "astitva",
    age: 23,
    id : 343454
}

// intersection --> it contains all properties of both the types actually

type UserandManager = User2 & Manager2;

const d : UserandManager = {
    name: "aditya",
    age : 22,
    id: 343546
}