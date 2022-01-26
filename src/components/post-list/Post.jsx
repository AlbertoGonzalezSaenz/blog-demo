import React, { useEffect }  from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../actions';

const Post = ({post, user , fetchUser}) => {

    useEffect(() => {
        fetchUser(post.userId)
    },[])

    return (
        <div className="item">
            <i className="large middle aligned icon user"/>
            <div className="content">
                <div className="description">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <div className="header">{user ? user.name : null}</div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state, { post }) => {
    return {user: state.users.find(user => user.id === post.userId)}
}

export default connect(mapStateToProps, { fetchUser })(Post);