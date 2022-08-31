import React from "react";
import { useParams, NavLink, useRouteMatch } from "react-router-dom";
import { Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

function QuoteDetail() {
  const id = useParams();
  console.log(id.id);

  const match = useRouteMatch();
  console.log(match);
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
  const quote = dummy_quotes.find((quote) => quote.id === id.id);

  return (
    <div>
      <h1>Quote Detail</h1>

      {!quote && <NoQuotesFound />}

      {quote && <HighlightedQuote text={quote.text} author={quote.author} />}

      <Route path={`${match.path}`} exact>
        <div className="centered">
          <NavLink to={`${match.path}/comments`} className="btn--flat">
            Load Comment
          </NavLink>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
}

export default QuoteDetail;
