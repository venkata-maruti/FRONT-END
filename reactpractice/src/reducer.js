const intailState = {
    count:0
}

export const rootReducer =(state=intailState, action)=>{
    switch(action.type) {
        case 'INCREMENT': 
        return {count: state.count+1}
        default: return state
    }
}