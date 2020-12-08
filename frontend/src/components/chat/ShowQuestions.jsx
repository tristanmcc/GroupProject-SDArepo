import React, {useState,useEffect} from 'react';
import UserApi from "../../api/UserApi";

//Function
function ShowQuestions({questions}) {
 
   console.log(questions.textBody)

   const [currentUser, setCurrentUser] = useState("");

   
    const getEmailOfUser = () => {
        UserApi.getCurrentUser()
            .then(response => {
                //console.log("Email of the logged in user" + response)
                setCurrentUser(response.email);
            })
    }

    useEffect(() => {
        getEmailOfUser();
    }, []);



    return (
        <div>
           
                <p>{questions.textBody}</p>
    
        </div>



    );
}

export default ShowQuestions;