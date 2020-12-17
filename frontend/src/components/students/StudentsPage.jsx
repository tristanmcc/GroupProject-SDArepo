import React from 'react';
import ChartPlots from '../chartplots/ChartPlots';

export default function StudentsPage() {
  return (
    <>
      <div className="student-banner">Question Sentiment</div>
      <hr />
      <div style={{ textAlign: 'center' }}>
        <ChartPlots />
      </div>
    </>
  );
}
