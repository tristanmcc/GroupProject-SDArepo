import React, {useState, useEffect} from "react";
import QuestionsApi from "../../api/QuestionsApi";
import QuestionForm from "./QuestionForm";
import ShowQuestions from "./ShowQuestions";
import Style from "../../css/chat.css";


function Forum() {
    const [questions, setQuestions] = useState([]);

    const viewQuestions = () => {
        QuestionsApi.getAllQuestions()
            .then(response => {
                setQuestions(response.data);
            })
    }
    useEffect(() => {
        viewQuestions();
    }, []);

    const createQuestion = (question) => {
        
        QuestionsApi.createQuestion(question)
            .then(res => setQuestions([...questions, res.data]));
    }
    


    return (
        <div>
        <div className="forumbox">
            {questions.map(item => (<ShowQuestions  key={item.id} questions={item}/>))}
            </div>
            <div>
            <QuestionForm onSubmit={createQuestion}/>
            </div>
            
        </div>
    );
}

export default Forum;