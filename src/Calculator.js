import React from "react";
import "./Calculator.css";
import { useState } from "react";

function Calculator() {
  const [results, setResults] = useState("");

  const calculate = () => {
    setResults(eval(results));
  };

  const plusMinus = () => {
    setResults(-1 * results);
  };

  const zeroHandle = (e) => {
    if (results == "") {
      setResults("");
    } else {
      setResults(results.concat(e.target.value));
    }
  };

  return (
    <div>
      <h1 id="heading">Calculator</h1>
      <div className="calculator">
        <input placeholder="0" id="display" value={results} />

        <div className="columns">
          <button className="greyButtons" onClick={() => setResults("")}>
            AC
          </button>
          <button className="greyButtons" onClick={plusMinus}>
            +/-
          </button>
          <button
            value="%"
            className="greyButtons"
            onClick={(e) => setResults(results + e.target.value)}
          >
            %
          </button>
          <button
            value="&divide;"
            className="orangeButtons"
            onClick={(e) => setResults(results + e.target.value)}
          >
            &divide;
          </button>
        </div>
        <div className="columns">
          <button
            value="7"
            className="blackButtons"
            onClick={(e) => setResults(results + e.target.value)}
          >
            7
          </button>
          <button
            value="8"
            className="blackButtons"
            onClick={(e) => setResults(results + e.target.value)}
          >
            8
          </button>
          <button
            value="9"
            className="blackButtons"
            onClick={(e) => setResults(results + e.target.value)}
          >
            9
          </button>
          <button
            value="*"
            className="orangeButtons"
            onClick={(e) => setResults(results + e.target.value)}
          >
            &times;
          </button>
        </div>
        <div class="columns">
          <button
            value="4"
            className="blackButtons"
            onClick={(e) => setResults(results + e.target.value)}
          >
            4
          </button>
          <button
            value="5"
            className="blackButtons"
            onClick={(e) => setResults(results + e.target.value)}
          >
            5
          </button>
          <button
            value="6"
            className="blackButtons"
            onClick={(e) => setResults(results + e.target.value)}
          >
            6
          </button>
          <button
            value="-"
            className="orangeButtons"
            onClick={(e) => setResults(results + e.target.value)}
          >
            -
          </button>
        </div>
        <div className="columns">
          <button
            value="1"
            className="blackButtons"
            onClick={(e) => setResults(results + e.target.value)}
          >
            1
          </button>
          <button
            value="2"
            className="blackButtons"
            onClick={(e) => setResults(results + e.target.value)}
          >
            2
          </button>
          <button
            value="3"
            className="blackButtons"
            onClick={(e) => setResults(results + e.target.value)}
          >
            3
          </button>
          <button
            value="+"
            className="orangeButtons"
            onClick={(e) => setResults(results + e.target.value)}
          >
            +
          </button>
        </div>
        <div className="columns">
          <button
            id="zero"
            value="0"
            className="blackButtons"
            onClick={zeroHandle}
          >
            0
          </button>
          <button
            value="."
            className="blackButtons"
            onClick={(e) => setResults(results + e.target.value)}
          >
            .
          </button>
          <button className="orangeButtons" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
