(() => {
	/**
	 * Principio de segregación de interfaces
	 * Los clientes no deben verse obligados a depender de interfaces que no utilizan.
	 * En otras palabras, es mejor tener muchas interfaces específicas en lugar de una sola interfaz general.
	 * Esto ayuda a evitar la creación de clases que implementan métodos que no necesitan y promueve una mejor organización del código.
	 * En TypeScript, podemos lograr esto utilizando interfaces específicas para cada tipo de comportamiento.
	 * En este ejemplo, crearemos una interfaz Bird y varias interfaces específicas para diferentes tipos de aves.
	 */
	interface Bird {
		eat(): void;
	}

	interface FlyingBird {
		fly(): void;
	}

	interface RunBird {
		run(): void;
	}

	interface SwimmingBird {
		swim(): void;
	}

	class Tucan implements Bird, FlyingBird{
		public eat(){}
		public fly(){}
		// public swim(){} //! -> Rompe con el principio de segregación de interfaces
	}

	class HommiBird implements Bird, FlyingBird{
		public fly(){}
		public eat(){}
	}

	class Ostrichh implements Bird, RunBird {
		public eat(){}
		public run(){}
	}

	class Pengin implements Bird , SwimmingBird{
		public eat(){}
		public swim(){}
	}
})()