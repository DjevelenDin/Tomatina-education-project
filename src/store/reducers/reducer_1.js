let state = 0;

export function updateState(state, action){
    if(action.type ===  "INCREMENT"){
        return state + action.amount;
    } else if (action.type === "DECREMENT"){
        return state - action.amount;
    } else{
        return state;
    }
}