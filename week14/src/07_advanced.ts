//1. Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).

interface User3 {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
}

// For a profile display, only pick `name` and `email`
type UserProfile = Pick<User3, 'name' | 'email'>;

const displayUserProfile = (user: UserProfile) => {
console.log(`Name: ${user.name}, Email: ${user.email}`);
};


//2. Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.

interface User4 {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};

type UpdateProps = Pick<User4, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database tp update the user
}
updateUser({})

//3. When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.

interface Config {
    readonly endpoint: string;
    readonly apiKey: string;
}

const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
};

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.