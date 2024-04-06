import { getAllProducts, getProductById } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock('../src/database', () => {
const originalModule = jest.requireActual('../src/database')

    return {
        __esModule: true,
        ...originalModule,
        getAllProducts: jest.fn(),
        // getProductById: jest.fn()

    }
})
test.failing('mock modules getProductById', () => {
    ProductService.findById(1);
})


test ('mock modules getAllProduct', () => {
    const products= [
        {
            id: 1, 
            name: 'Product Mock'
        },
        {
            id: 2, 
            name: 'Product Mock'
        }

    ]
    getAllProducts.mockImplementation(() =>{
        return products
    })

    expect(ProductService.findAll()).toEqual(products  )
})