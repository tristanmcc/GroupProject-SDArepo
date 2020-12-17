//react core
import React, { useState, useEffect } from 'react';
//axios instance
import AnsweredAssignmentsApi from '../../api/AnsweredAssignmentsApi';
//axios instance
import AssignmentsApi from '../../api/AssignmentsApi';
//AccordianFor Assignment Component
import AccordianForAssignment from '../accordian/AccordianForAssignment';
//starRating component from star feature
import StarRating from '../star/StarRating';
//css styles
import '../../css/styles.css';
//Button from material UI
import Button from '@material-ui/core/Button';
//react router-dom modules (link and useHistory)
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
//material UI icon
import Icon from '@material-ui/core/Icon';
//material UI state styles
import { makeStyles } from '@material-ui/core/styles';

//use Material UI to make styles from state style
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#25274D',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    borderRadius: 15,
    transform: 'translateY(4)',
    marginBottom: '40px',
    boxShadow: [[0, 5, '#999']],
  },
}));

//submit assignment function used by student
function AssignmentSubmitted({ match }) {
  const history = useHistory();
  const classes = useStyles();
  console.log('Value' + match.params.assignId);
  console.log('Name' + match.params.name);

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const goBack = () => {
    history.goBack();
  };
  //GET Answered Assignment by Id
  const getAnsweredAssignmentById = (id) => {
    console.log('Calling getAssignmentById ' + id);
    AnsweredAssignmentsApi.getAnsweredAssignmenttByAssignmentId(id).then(
      (response) => {
        response.data.forEach((item) => {
          console.log(item);
          if (item.user.name === match.params.name) {
            console.log('Found' + JSON.stringify(item));
            setAnswers(item);
          }
        });
      }
    );
    console.log('Filtered Array***' + JSON.stringify(answers));
    //setAnswers(newArray);
  };

  //GET question assignment by id
  const getQuestionsAssignmentById = (id) => {
    console.log('Calling getAssignmentById ' + id);
    AssignmentsApi.getAssignmentById(id).then((response) => {
      setQuestions(response.data);

      console.log('Data from questions table ' + JSON.stringify(response.data));
    });
  };

  useEffect(() => {
    getQuestionsAssignmentById(match.params.assignId);
    getAnsweredAssignmentById(match.params.assignId);
  }, []);

  return (
    <>
      <div className="check">
        <div>
          <div className="grading">
            <div className="gradinglabel">
              <h3> Grading</h3>
            </div>
            <div>
              <StarRating answers={answers} />
            </div>
          </div>

          <AccordianForAssignment questions={questions} answers={answers} />
        </div>
        <div>
          <Button
            onClick={goBack}
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
          >
            Back
          </Button>
        </div>
      </div>
    </>
  );
}
export default AssignmentSubmitted;
