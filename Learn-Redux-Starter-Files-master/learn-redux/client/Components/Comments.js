import React from 'react';

const Comments = React.createClass({


    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>
                        {comment.user}
                    </strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
                </p>
            </div>
        )
    },

    handleSubmit(e) {
        e.preventDefault();
        console.log("on enter clicked")
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;

        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();

    },

    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                <form className="comment-form" ref="commentForm" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment"></input>
                    <input type="submit" hidden></input>
                </form>
            </div>
        )
    },

}
)

export default Comments;
