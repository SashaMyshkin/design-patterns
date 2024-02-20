interface Car {
    model: string;
    color: string;
    price: number;
    getInfo(): string;
}

interface CarFactory {
    createCar(model: string, color: string, price: number): Car;
}

class EconomyCar implements Car {
    constructor(public model: string, public color: string, public price: number) {}

    getInfo(): string {
        return `Model: ${this.model}, Color: ${this.color}, Price: ${this.price}`;
    }
}

class LuxuryCar implements Car {
    constructor(public model: string, public color: string, public price: number) {}

    getInfo(): string {
        return `Model: ${this.model}, Color: ${this.color}, Price: ${this.price}`;
    }
}

class SportsCar implements Car {
    constructor(public model: string, public color: string, public price: number) {}

    getInfo(): string {
        return `Model: ${this.model}, Color: ${this.color}, Price: ${this.price}`;
    }
}
class EconomyCarFactory implements CarFactory {
    createCar(model: string, color: string, price: number): Car {
        return new EconomyCar(model, color, price);
    }
}

class LuxuryCarFactory implements CarFactory {
    createCar(model: string, color: string, price: number): Car {
        return new LuxuryCar(model, color, price);
    }
}

class SportsCarFactory implements CarFactory {
    createCar(model: string, color: string, price: number): Car {
        return new SportsCar(model, color, price);
    }
}

