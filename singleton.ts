class Singleton {
    private static instance: Singleton;

    private constructor() {
        // Private constructor to prevent instantiation from outside
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public someMethod(): void {
        console.log("Executing some method...");
    }
}

// Example usage:
const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2); // Output: true, indicating both instances refer to the same object

singletonInstance1.someMethod(); // Output: Executing some method...
singletonInstance2.someMethod(); // Output: Executing some method...
