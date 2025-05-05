/**
 * Liskov Substitution Principle
 */

/**
 * ! El Principio de Sustitución de Liskov (LSP) establece que los objetos de una superclase deben ser reemplazables por objetos de una subclase sin afectar la corrección del programa.
 * ! En otras palabras, si la clase B es una subclase de la clase A, entonces deberíamos poder reemplazar A con B sin alterar ninguna de las propiedades deseables del programa.
 * ! Esto significa que la subclase debe extender el comportamiento de la superclase sin cambiar su comportamiento original.
 * ! En TypeScript, podemos lograr esto utilizando clases abstractas e interfaces.
 * ! En este ejemplo, crearemos una clase abstracta Vehicle y varias subclases que extienden la clase Vehicle.
 * ! También crearemos una función que toma un arreglo de objetos Vehicle e imprime el número de asientos de cada vehículo.
 * ! La función funcionará con cualquier subclase de Vehicle, demostrando el Principio de Sustitución de Liskov.
 */

export abstract class Vehicle {
	abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle{
	
    constructor( private numberOfSeats: number ) {
		super();
	}

	getNumberOfSeats(): number {
		return this.numberOfSeats;
	}
}

export class Audi extends Vehicle {

    constructor( private numberOfSeats: number ) {
		super();
	}

	getNumberOfSeats(): number {
		return this.numberOfSeats;
	}
}

export class Toyota extends Vehicle{

    constructor( private numberOfSeats: number ) {
		super();
	}

	getNumberOfSeats(): number {
		return this.numberOfSeats;
	}
}

export class Honda extends Vehicle{

    constructor( private numberOfSeats: number ) {
		super();
	}

	getNumberOfSeats(): number {
		return this.numberOfSeats;
	}
}

export class Volkswagen extends Vehicle{

    constructor( private numberOfSeats: number ) {
		super();
	}

	getNumberOfSeats(): number {
		return this.numberOfSeats;
	}
}

export class Ford extends Vehicle {
	constructor( private numberOfSeats: number){
		super();
	}

	getNumberOfSeats(): number {
		return this.numberOfSeats
	}
}
