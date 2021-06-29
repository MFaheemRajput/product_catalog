// this layer is responsible to act as use-case
// where we will decide, to fullfil the use case how many repos or domain will use.

const productRepository = require('../../../domain/product_repository');

const getProducts = async () => {
    try{
        const validProducts = [];
        const validResult = await productRepository.getProductList(); 
       
        // lets convert into valid Products result
        // only results with quantity more then 0 is valid
        validResult.forEach(element => {
            if(element.hasOwnProperty('quantity') && element['quantity'] >= 0){
                validProducts.push(element);
            }
        });
        return validProducts;
    } catch (error){
        //generic error
        return error ;
    }
}

const getProduct = async (id) => {
    try{
        console.log("Get Product Id: ",id);
        const validResult = await productRepository.getProductById(id); 
        console.log("Get Product: ",validResult);
        // lets convert into valid Products result
        // only results with quantity more then 0 is valid
        if(validResult.hasOwnProperty('quantity') && validResult['quantity'] >= 0){
            return validResult;
        } else {
            throw Error("No valid record found")
        }
    } catch (error){
        //generic error
        throw error ;
    }
}

const deleteProduct = async (id) => {
    try{
        const validResult = await productRepository.getProductList(); 
        // lets convert into valid Products result
        // only results with quantity more then 0 is valid
        validResult.forEach(element => {
            if(element.hasOwnProperty('quantity') && element['quantity'] >= 0){
                validProducts.push(element);
            }
        });
        return validProducts;
    } catch (error){
        //generic error
        return error ;
    }
}


module.exports = {
    getProduct, 
    getProducts,
    deleteProduct,
}

