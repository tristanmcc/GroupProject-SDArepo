import React, {useState} from 'react';

function QuestionForm({onSubmit}) {
    
const [textBody, setTextBody] = useState();


    return (
        <div className="">
            <div className="">
                <h3 className="" >Add question</h3>
                <div>
                    <div className="">
                        <textarea
                            type="text"
                            className=""
                            placeholder="What's on your mind?"
                            value={textBody}
                            onChange={e => setTextBody(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <button
                            className="btn btn-danger"
                            onClick={() => onSubmit({textBody})}>
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default QuestionForm;
