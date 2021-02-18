import React from 'react';

function Comments(props) {

    const renderComment = (comment, i) =>{

        return (
            <div className="comment" key={i}>
                <p>
                    <strong>
                        {comment.user}
                    </strong>
                </p>
            </div>

        )
    }


    return (
        <div className="comment">
            {props.postComments.map(renderComment)}

        </div>
    )
}

export default Comments;
