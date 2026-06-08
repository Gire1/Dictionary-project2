import React from "react";
import "./Synonyms.css";

export default function Synonyms(props){
    if (props.Synonyms){
        return (
            <ul className="Synonyms">
                {props.synonyms.map(function(synonym, index) {
                    return <li key={index}>{synonym}</li>;
                })}
                
            </ul>
        );
    } else {
        return null;
    }
}