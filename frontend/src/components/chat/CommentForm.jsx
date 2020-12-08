import React, {useState} from 'react';

function CommentForm({onSubmit, postNum}) {


    const [body, setBody] = useState("");
console.log('This is postId' + postNum)
const [postId, setPostId] = useState(postNum);
console.log("this is postnum" + postNum)



    return (
        <div className="card mt-4">
            <div className="card-body">
                <h6 className="card-title" >Add Comment:</h6>
                <div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={body}
                            onChange={e => setBody(e.target.value)} />
                    </div>



                    <div className="form-group">
                        <button
                            className="btn btn-danger"
                            onClick={() => onSubmit({body, postId})}>
                            Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentForm;