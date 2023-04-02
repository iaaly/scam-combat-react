import React from "react";
import ReactDOM from "react-dom";
import ScamReportForm from "./ScamReportForm";

function App() {
  return (
    <div className="container">
      <ScamReportForm />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
