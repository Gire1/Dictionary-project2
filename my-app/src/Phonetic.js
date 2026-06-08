import  React from "react";
import "./Phonetic.css";

export default function Phonetic(props){
    return (
        <div className="Phonetic">
            <p>{props.phonetic.text}</p>
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">Listen</a>
            <span className="text">{props.phonetic.text}</span>
        </div>
    );
}