import _ from 'lodash'
import jsonPlaceholder from "../apis/jsonPlaceholder"

export const  fetchPosts = () => async dispatch => {

        const { data } = await jsonPlaceholder.get('/posts')

        dispatch({
            type: 'FETCH_POSTS',
            payload: data
        }) 
    }

// export const  fetchUsers = () => async dispatch => {

//     const { data } = await jsonPlaceholder.get('/users')

//     dispatch({
//         type: 'FETCH_USERS',
//         payload: data
//     }) 
// }


export const  fetchUser = (id) => dispatch => {
    // call to memoized version of fetchUser
    _fetchUser(id, dispatch);
}

const _fetchUser = _.memoize(async (id, dispatch) => {

    const { data } = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({
        type: 'FETCH_USER',
        payload: data
    }) 

})
