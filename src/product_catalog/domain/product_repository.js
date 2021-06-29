// this layer will handle communication with data source
// data source or data sources could be other DB or other HTTP request API etc 
const getProductsDS = require('../data_source/get_list_of_products_rest_api_datasource');
const getProductDS = require('../data_source/get_product_rest_api_datasource');
const deleteProductsDS = require('../data_source/delete_product_rest_api_datasource');

const link = 'https://ev5uwiczj6.execute-api.eu-central-1.amazonaws.com/test/supply-chain/';

const getProductList = async () => {
    try{
        const validResults = [];
        const result = await getProductsDS.getProductsFromServer(link);
        let response = JSON.parse(result)
            if(response !== undefined && response['bundle']){
                response['bundle'].forEach(element => {
                    if(isValidProduct(element)){
                        validResults.push(element);
                    }
                });
                
                return validResults;
            } else if(response !== undefined && response['message']) {
                console.log("message: " , response); 
                throw response; 
            } else {
                //throw error;
            }
        
    } catch (error){
        console.log(error);
        return error ;
    }
}

const getProductById = async (id , isThrowExceptionAllowed = false) => {
    try{
        const completeLink = link+id;
        const result = await getProductDS.getProductFromServer(completeLink);
        let response = JSON.parse(result);
            if(response !== undefined){
                if(isValidProduct(response)){
                    return response;
                }
            } else if(response !== undefined && response['message']) {
                throw response; 
            } else {
                //throw error;
            }
        } catch (error){
            console.log(error);
            if(isThrowExceptionAllowed){
                throw error;
            } else {
                return error;
            }
        }
}

const deleteProductById = async (id) => {
    try{
        
        await this.getProductById(id , true);
        const completeLink = link+id;
        const result = await deleteProductsDS.deleteProductFromServer(completeLink);
        //let response = JSON.parse(result);
        return result;
    } catch (error){
        console.log(error);
        return error ;
    }
}

const isValidProduct = (response) => {
    if(response.hasOwnProperty('quantity') 
    && response.hasOwnProperty('price') 
    && response.hasOwnProperty('name')
    && response.hasOwnProperty('id')){
        return true;
    } else {
        return false;
    }
}

module.exports = {
    getProductList,
    getProductById,
    deleteProductById,
}