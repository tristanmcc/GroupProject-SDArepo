import React, {useState,useEffect} from 'react';
import QuestionsApi from '../../api/QuestionsApi';
import UserApi from "../../api/UserApi";
import { RiDeleteBin7Line, RiQuestionAnswerLine } from 'react-icons/ri';

//Function
function ShowQuestions({questions}) {
 
   
    const [formState, setFormState] = useState(false);
    const [currentUser, setCurrentUser] = useState("");

   //Delete method
   const handleDelete = (questions) => {
    console.log("inside handleDelete" + questions.id)
    QuestionsApi.deleteQuestion(questions.id)
       .then(() => window.location.reload())
}

    const getEmailOfUser = () => {
        UserApi.getCurrentUser()
            .then(response => {
                setCurrentUser(response.data.email);
            })
    }

    useEffect(() => {
        getEmailOfUser();
    }, []);

    


    return (
        <div>
            <div className="question-card">
             { currentUser === questions.email ?
            <button className="question-button"
                    onClick={() => handleDelete(questions)}>
                    <RiDeleteBin7Line/>
                </button>
                : null }
                <button className="question-button"
                    onClick={() => setFormState(true)}>
                    <RiQuestionAnswerLine/>
                </button>
                
                <p>{questions.textBody}</p>
            </div>
        </div>



    );
}

export default ShowQuestions;