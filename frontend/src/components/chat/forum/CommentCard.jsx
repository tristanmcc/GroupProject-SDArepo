import React from 'react';
import { RiDeleteBin7Line } from 'react-icons/ri';

export default function CommentCard({comment, handleDelete, user}){

    

    return (
        <div>
            {comment.body}
            { user === comment.email ?
            <button className="question-button"
                    onClick={() => handleDelete(comment)}>
                    <RiDeleteBin7Line/>
                </button>
                : null }
        </div>
       
    );
}
