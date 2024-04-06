import { getAllProducts, getProductById } from "./database";

export class ProductService {

    static findById(id){
        return getProductById(id);
    }

    static findAll(){
        return getAllProducts();
    }
}