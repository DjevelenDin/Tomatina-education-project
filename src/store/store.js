class Store{
    constructor(updateState ,state){
        this._updateState = updateState;
        this.state = state;
    }

    get state(){
        return this._state;
    }

    update(action){
        this._state = this._updateState(this._state, action)
    }
}

const store = new Store(updateState, 0);

export default store;