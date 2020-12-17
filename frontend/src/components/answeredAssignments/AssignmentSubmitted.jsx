import React, { useState, useEffect } from "react";
import AnsweredAssignmentsApi from "../../api/AnsweredAssignmentsApi";
import AssignmentsApi from "../../api/AssignmentsApi";
import AccordianForAssignment from "../accordian/AccordianForAssignment";
import StarRating from "../star/StarRating";

import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";

import "../../css/styles.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#25274D",
    cursor: "pointer",
    outline: "none",
    border: "none",
    borderRadius: 15,
    transform: "translateY(4)",
    marginBottom: "40px",
    boxShadow: [[0, 5, "#999"]],
  },
}));

function AssignmentSubmitted({ match }) {
  const history = useHistory();
  const classes = useStyles();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const goBack = () => {
    history.goBack();
  };
  const getAnsweredAssignmentById = (id) => {
    AnsweredAssignmentsApi.getAnsweredAssignmenttByAssignmentId(id).then(
      (response) => {
        response.data.forEach((item) => {
          if (item.user.name === match.params.name) {
            setAnswers(item);
          }
        });
      }
    );
  };

  const getQuestionsAssignmentById = (id) => {
    AssignmentsApi.getAssignmentById(id).then((response) => {
      setQuestions(response.data);
    });
  };

  useEffect(() => {
    getQuestionsAssignmentById(match.params.assignId);
    getAnsweredAssignmentById(match.params.assignId);
  }, []);

  return (
    <>
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
    </>
  );
}
export default AssignmentSubmitted;
