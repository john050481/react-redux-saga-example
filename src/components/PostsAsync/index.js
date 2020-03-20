import React from 'react'
import {connect} from "react-redux";

function PostsAsync(props) {

    return (
        props.postsAsync.map( (post, i) => 
            <div key={i} className="card m-3">
                <div className="card-body">
                    {post.title}
                </div>
            </div>
        )
    )
}

const mapStateToProps = store => {
    return (
        {
            postsAsync: store.posts.postsAsync
        }
    )
}
const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsAsync)