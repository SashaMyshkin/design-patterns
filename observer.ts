// Define the Subject interface
interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

// Define the Observer interface
interface Observer {
  update(data: any): void;
}

// Concrete implementation of the Subject interface
class ConcreteSubject implements Subject {
  private observers: Observer[] = [];

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  // Example method to trigger an update
  setData(data: any): void {
    // Update internal state
    // ...

    // Notify observers
    this.notifyObservers();
  }
}

// Concrete implementation of the Observer interface
class ConcreteObserver implements Observer {
  update(subject: Subject): void {
    // Respond to changes in the subject's state
    console.log('Observer updated:', subject);
  }
}

// Example usage
const subject = new ConcreteSubject();
const observer1 = new ConcreteObserver();
const observer2 = new ConcreteObserver();

// Register observers with the subject
subject.registerObserver(observer1);
subject.registerObserver(observer2);

// Trigger a state change in the subject
subject.setData({ exampleData: 'updated' });

// Output:
// Observer updated: ConcreteSubject { observers: [ ConcreteObserver {}, ConcreteObserver {} ] }
// Observer updated: ConcreteSubject { observers: [ ConcreteObserver {}, ConcreteObserver {} ] }
