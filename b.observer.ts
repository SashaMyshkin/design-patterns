// Define an interface for Observers
interface Observer {
    update(data: any): void;
}

// Define an interface for Observables (Subjects)
interface Observable {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(data: any): void;
}

// Concrete Observable class
class ConcreteObservable implements Observable {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(data: any): void {
        this.observers.forEach(observer => observer.update(data));
    }

    // Method to simulate state change
    changeState(newState: any): void {
        console.log('Subject: State changed to', newState);
        this.notifyObservers(newState);
    }
}

// Concrete Observer class
class ConcreteObserver implements Observer {
    update(data: any): void {
        console.log('Observer: Received update with data', data);
        // React to state changes here
    }
}

// Example usage
const observable = new ConcreteObservable();
const observer1 = new ConcreteObserver();
const observer2 = new ConcreteObserver();

observable.addObserver(observer1);
observable.addObserver(observer2);

// Simulate state change
observable.changeState('new state');

// Remove observer1
observable.removeObserver(observer1);

// Simulate another state change
observable.changeState('another new state');
