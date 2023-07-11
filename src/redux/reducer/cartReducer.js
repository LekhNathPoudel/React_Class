const intialData={
    cartCount:0
}
const cartReducer=(state=intialData,action)=>{
    switch(action.type){
        case 'Add_To_Cart':
            return{
                cartCount:++state.cartCount
            }
            case 'REMOVE_FROM_CART':
                return{
                    cartCount:--state.cartCount
                }
default:
    return state
    }

}
export default cartReducer