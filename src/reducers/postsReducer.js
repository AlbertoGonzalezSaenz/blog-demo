export default (state = ['1'], action ) => {
    if(action.type == 'FETCH_POSTS'){
        return [action.payload]
    }
    return state
}