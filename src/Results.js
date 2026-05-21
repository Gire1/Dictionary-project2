import React from "react";
import Meaning from "./Meanings";

export default function Results(props) {
  if (!props.results) return null;

  return (
    <div className="Results">
      <h2>{props.results.word}</h2>
      {props.results.phonetics && props.results.phonetics[0]?.text && (
        <p className="phonetic">{props.results.phonetics[0].text}</p>
      )}
      {props.results.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        );
      })}
    </div>
  );
}
