const initialState={
items:{},
totalPrice:0,
totalCount:0,

};

const cart=(state-initialState,action)=>{
    switch(action.type){
        case 'SET_TOTAL_PRICE':
            return {
                ...state,
                totalPrice:action.payload,
               
            };
    }
};