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

// Over Fetching Solution #1

// export const  fetchUser = (id) => dispatch => {
//     // call to memoized version of fetchUser
//     _fetchUser(id, dispatch);
// }

// MEMOIZED FETCHUSER
const _fetchUser = _.memoize(async (id, dispatch) => {

    const { data } = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({
        type: 'FETCH_USER',
        payload: data
    }) 

})

// Over Fetching Solution #2

export const  fetchUser = (id) => async dispatch => {
    const { data } = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({
        type: 'FETCH_USER',
        payload: data
    }) 
}

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())
    const userIds = _.uniq(_.map(getState().posts, 'userId'))
    userIds.forEach(id => dispatch(fetchUser(id)))
}