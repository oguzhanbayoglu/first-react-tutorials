import React from "react";
import "./styles.css";
import jokesData from "./jokesData";

// joke punchline - conditional rendering
export default function Jokes() {
  function Joke(props) {
    const [shown, setShown] = React.useState(false);
    function toggleShown() {
      setShown((prevShown) => !prevShown);
    }
    return (
      <div>
        {props.setup && <h3>{props.setup}</h3>}
        {shown && <p>{props.punchline}</p>}
        <button onClick={toggleShown}>
          {shown ? "Hide" : "Show"} Punchline
        </button>
        <hr />
      </div>
    );
  }
  const jokeElements = jokesData.map((joke) => {
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });
  return <section className="jokes">{jokeElements}</section>;
}
