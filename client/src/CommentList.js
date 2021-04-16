import React from 'react';

const CommentList = ({comments}) => {

    const renderedData = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    })

    return (
        <ul>{renderedData}</ul>
    );
}

export default CommentList;