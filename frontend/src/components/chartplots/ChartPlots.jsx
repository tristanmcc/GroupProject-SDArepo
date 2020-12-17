import React, { useState, useEffect } from 'react';

import QuestionsApi from '../../api/QuestionsApi';

import Sentiment from '../sentiment/Sentiment';

export default function ChartPlots() {
  const [questions, setQuestions] = useState([]);

  const viewQuestions = () => {
    QuestionsApi.getAllQuestions().then((response) => {
      setQuestions(response.data);
    });
  };
  useEffect(() => {
    viewQuestions();
  }, []);

  const newArray = questions.map((items) => items.textBody);
  console.log('all questions: ' + JSON.stringify(questions));
  console.log('array of questions: ' + newArray);

  return (
    <>
      <h4>Question Sentiment</h4>
      {questions.map((question) => (
        <Sentiment key={question.id} sentence={question} />
      ))}
    </>
  );
}
