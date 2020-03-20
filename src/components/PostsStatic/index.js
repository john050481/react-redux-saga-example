import React from 'react'
import {connect} from "react-redux";

function PostsStatic(props) {
    return (
        props.postsStatic.map( (post, i) =>
                <div key={i} className="card m-3">
                    <div className="card-body">
                        {post.title}
                    </div>
                </div>
            )
    )
}

const mapStateToProps = (state) => {
    return {
        postsStatic: state.posts.postsStatic
    }
}

export default connect(mapStateToProps, null)(PostsStatic)