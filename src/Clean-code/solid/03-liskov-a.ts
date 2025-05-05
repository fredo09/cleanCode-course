import { Tesla, Audi, Toyota, Honda, Volkswagen, Vehicle, Ford } from './03-liskov-b';

(() => {
    
    const printCarSeats = ( cars: Vehicle[] ) => {
        
		cars.forEach(car => {
			console.log(`${car.constructor.name}: `, car.getNumberOfSeats())
		});

		/**
		 * Aplicando el principio de Siemptete Abierto/Cerrado
		 */
        // for (const car of cars) {
        //     if( car instanceof Tesla ) {
        //         console.log( 'Tesla', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Audi ) {
        //         console.log( 'Audi', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Toyota ) {
        //         console.log( 'Toyota', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Honda ) {
        //         console.log( 'Honda', car.getNumberOfSeats() )
        //         continue;
        //     } 
		// 	if( car instanceof Volkswagen ) {
        //         console.log( 'Volkswagen', car.getNumberOfSeats() )
        //         continue;
        //     }
        // }
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
		new Volkswagen(5),
		new Ford(4)
    ];

    printCarSeats( cars );
})();