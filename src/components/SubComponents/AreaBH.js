import React from "react";
import { useState } from "react";

const AreaBH = (props) => {
  const [result, setResult] = useState("Area= 1/2*base*height");
  const [valueOfB, setValueOfB] = useState("");
  const [valueOfH, setValueOfH] = useState("");

  const showResult = () => {
    if (valueOfB !== "" || valueOfH !== "") {
      setResult(0.5 * valueOfB * valueOfH);
    }
  };

  return (
    <form className="form" id="formTriangle" onSubmit={props.submit}>
      <label>
        base=
        <input
          className="inputBox"
          value={valueOfB}
          onChange={(e) => setValueOfB(e.target.value)}
          type="number"
          min="0.0001"
          step="0.00001"
          required
        />
      </label>

      <label>
        height=
        <input
          className="inputBox"
          value={valueOfH}
          onChange={(e) => setValueOfH(e.target.value)}
          type="number"
          min="0.0001"
          step="0.00001"
          required
        />
      </label>

      <button className="button" onClick={showResult}>
        calculate
      </button>
      <h2>Area will be calculated here-</h2>
      <div className="output">{result}</div>
    </form>
  );
};

export default AreaBH;
