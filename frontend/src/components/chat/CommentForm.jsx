import React, {useState} from 'react';

function CommentForm({onSubmit, question}) {

    const [body, setBody] = useState("");

   
    
    return (
        <div className="">
            <div className="">
                <h6 className="card-title" >Add Comment:</h6>
                <div>
                    <div className="">
                        <input
                            type="text"
                            className=""
                            placeholder="..."
                            value={body}
                            onChange={e => setBody(e.target.value)} />
                    </div>

                    <div className="">
                        <button
                            className="btn btn-danger"
                            onClick={() => onSubmit({body, question})}>
                            Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentForm;