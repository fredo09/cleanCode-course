// * Code Smell: Singleton
// ! Problem: Singleton pattern is a design pattern that restricts the instantiation of a class to one object.

// ! Problemas con Singleton: Es que es dificil de testear y ademas no sabemos donde se estan cambiando los datos 

const Singleton = (function () {
    
    let instance;

    function createInstance() {
        return new Object('I am the instance');
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function main() {

    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    console.log('Misma instancia? ', (instance1 === instance2));
}

main();
