// React core
import React, { useState } from "react";
import { useEffect } from "react";
import AnsweredAssignmentsApi from "../../api/AnsweredAssignmentsApi";

export default function AssignmentGrade({ assignmentId, userId }) {
  const [grade, setGrade] = useState("");

  const getGrade = () => {
    AnsweredAssignmentsApi.getAssignmentAnswerByUserID(
      assignmentId,
      userId
    ).then((response) => {
      setGrade(response.data.rating);
    });
  };

  const repeatStringNumTimes = (times) => {
    var repeatedString = "";
    while (times > 0) {
      repeatedString += <i class="far fa-star"></i>;
      times--;
    }
    return repeatedString;
  };

  useEffect(() => {
    getGrade();
  }, []);

  return (
    <p>
      {grade ? <p> Grade: {grade} / 5</p> : <p>Assignment not submitted </p>}
    </p>
  );
}
