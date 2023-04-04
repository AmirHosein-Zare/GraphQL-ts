import methods from "./Product.method";

export default {
    Query:{
        products: () => {
            return methods.getAllProducts();
        }
    }
}