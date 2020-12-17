import React, { useState, useEffect } from "react";
import QuestionsApi from "../../api/QuestionsApi";
import Sentiment from "../sentiment/Sentiment";

export default function ChartPlots() {
  const [questions, setQuestions] = useState([]);

  const viewQuestions = () => {
    QuestionsApi.getAllQuestions()
      .then((response) => {
        console.log("response", response.data);
        setQuestions(response.data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    viewQuestions();
  }, []);

  const newArray = questions.map((items) => items.textBody);


  return (
    <>
      <Sentiment sentence={questions} />
    </>
  );
}
