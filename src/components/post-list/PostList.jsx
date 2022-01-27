import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Post from './Post';

import { fetchPostsAndUsers } from '../../actions';

const PostList = ({ fetchPostsAndUsers, posts, users }) => {

    useEffect(() => {
        fetchPostsAndUsers()
    }, [])

    const renderList = () => {
        return posts.map(post => <Post key={post.id} post={post} />)
    }

    return (
        <div className='ui relaxed divided list'>
            Post List
            <br/>
            {renderList()}
        </div>
    );
}

const mapStateToProps = (state) => {
    return { posts: state.posts, users: state.users }
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);