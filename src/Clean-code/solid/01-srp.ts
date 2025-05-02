(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    //! Encargado de gestionar los servicios de productos
    class ProductService {
        // private httpAdapter: Object

        getProduct( id: number ) {
            console.log("🚀 ~ Produto:", { id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            console.log("🚀 ~ Guardando en base de datos", product);
        }
    }

    //! Encargado de gestionar los temas del email del cliente
    class Mailer {
        private masterEmail: string = "test1@gmail.com";

        sendEmail( email: string, message: string ) {
            console.log("🚀 ~ Enviando correo a: ", {
				email,
				message
			});
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor( productService: ProductService, mailer: Mailer ) {
            this.productService = productService;
            this.mailer = mailer;
        }
    
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productService.getProduct( id ); //* factorizado
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct( product ); //* factorizado
        }
    
        notifyClients() {
            this.mailer.sendEmail('fredojimenez1@gmail.com', 'Nuevo producto en stock'); //* factorizado
        }
        
        //! Este método no debería estar aquí, ya que no tiene relación con el producto
        // onAddToCart( productId: number ) {
        //     // Agregar al carrito de compras
        //     console.log('Agregando al carrito ', productId );
        // }
    }
    

    //* Separamos el cart en otra clase "Factorizar"
    class CartBloc {
        private itemsCart: Object[] = [];

        addToCart(productId: number) {
            console.log('Agregando al carrito ', productId );
        }
    }


    const productService = new ProductService();
    const mailer = new Mailer();

    //! Instancias de la clase ProductBloc
    const productBloc = new ProductBloc(  productService, mailer );
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();

    //! Cart
    cartBloc.addToCart(10); // Esto no debería estar aquí, ya que no tiene relacion con el productBloc

})();