import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Post from './Post';

import { fetchPosts } from '../../actions';

const PostList = ({ fetchPosts, posts, users }) => {

    useEffect(() => {
        fetchPosts()
        // fetchUsers()
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

export default connect(mapStateToProps, { fetchPosts })(PostList);