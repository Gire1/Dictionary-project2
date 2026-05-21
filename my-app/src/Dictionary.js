import React, { useState, useRef } from "react";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const timeoutRef = useRef(null);

  function handleResponse(data) {
    setResult(data[0]);
    setError(null);
  }

  async function search(event) {
    event.preventDefault();
    if (!keyword.trim()) return;

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Word not found");
      const data = await response.json();
      handleResponse(data);
    } catch {
      setError("Word not found. Please try another search.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeywordChange(event) {
    const val = event.target.value;
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setKeyword(val), 350);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="Search for a word..."
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {result && <Results results={result} />}
    </div>
  );
}
