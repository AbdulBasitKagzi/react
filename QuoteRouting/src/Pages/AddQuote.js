import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import Card from "../components/UI/Card";
import { useHistory } from "react-router-dom";

function AddQuote() {
  const history = useHistory();
  const newQuote = (quoteData) => {
    console.log(quoteData);

    history.push("/quotes");
  };

  return (
    <div>
      <h1>Add Quote</h1>
      <Card>
        <QuoteForm onAddQuote={newQuote} />
      </Card>
    </div>
  );
}

export default AddQuote;
