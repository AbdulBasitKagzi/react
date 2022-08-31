import React from "react";
import { useRouteMatch } from "react-router-dom";
import QuoteList from "../components/quotes/QuoteList";

function AllQuote() {
  const dummy_quotes = [
    {
      id: "q1",
      author: "AbdulBasit",
      text: "Read Quran Regularly",
    },
    {
      id: "q2",
      author: "Rehan",
      text: "Do Namaz Regularly",
    },
  ];
  return (
    <div>
      <h1>All Quotes</h1>
      <QuoteList quotes={dummy_quotes} />
    </div>
  );
}

export default AllQuote;
