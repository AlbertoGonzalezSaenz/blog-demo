import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../actions';

const PostList = ({ fetchPosts, posts }) => {

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className=''>
            Post List
        </div>
    );
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostList);