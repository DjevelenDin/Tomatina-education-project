/*jshint esversion: 6 */
export const addProductToCart =  (productObj) =>({
    type:'ADD_PRODUCT_TO_CART',
    payload: productObj,
});
