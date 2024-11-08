class Shape {
    area() {
        throw new Error("Method 'area()' must be implemented.");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

let shape1 = new Circle(2);
console.log(`Circle area: ${shape1.area()}`);

let shape2 = new Rectangle(4, 5);
console.log(`Rectangle area: ${shape2.area()}`);
