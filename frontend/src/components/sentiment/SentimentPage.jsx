import React from "react";
import Sentiment from "./Sentiment";

export default function SentimentPage() {
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
