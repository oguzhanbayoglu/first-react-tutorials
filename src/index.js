import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import logo from "./logo.png";
import memesData from "./memesData";
import Form from "./Form";
import Boxes from "./Boxes";
import Jokes from "./Jokes";

// header section w/ time
function Header() {
  let date = new Date();
  let greetDate = date.getHours();
  return (
    <header>
      <div className="logo-cont">
        <img src={logo} alt="logo" className="header-logo" />
        <h1>Meme Generator</h1>
      </div>
      <h4>Saat {greetDate % 12} suları!</h4>
    </header>
  );
}

// form kısmı ve memes
function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/28j0te.jpg",
  });

  function getMemeImg() {
    const randomNum = Math.floor(Math.random() * allMemes.length);
    const memeImageUrl = allMemes[randomNum].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: memeImageUrl,
    }));
  }

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <section>
      <div className="form">
        <input
          type="text"
          placeholder="Shut Up"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="And Take My Money"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImg} type="submit">
          Generator
        </button>
        <div className="meme wide-grid">
          <img src={meme.randomImg} className="meme--img" alt="meme" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </section>
  );
}

// clean app component
function App() {
  return (
    <>
      <Header />
      <Meme />
      <Boxes />
      <Jokes />
      <Form />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
