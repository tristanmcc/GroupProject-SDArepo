import React from "react";
import Sentiment from "../sentiment/Sentiment";

export default function StudentsPage() {
  return (
    <>
      <div className="student-banner">Question Sentiment</div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <Sentiment />
      </div>
    </>
  );
}
