import React from "react";
import "./styles.css";

//form -- useState içine object

export default function Form() {
  const [formData, setFormData] = React.useState({
    fn: "",
    ln: "",
    email: "",
    comments: "",
    isFriendly: false,
    employment: "",
    facColor: "",
  });

  console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    //submitToApı(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form input-demo">
        <h2 className="wide-grid">Input Demo</h2>
        <input type="text" placeholder="fn" onChange={handleChange} name="fn" />
        <input type="text" placeholder="ln" onChange={handleChange} name="ln" />
        <input
          type="email"
          placeholder="mail"
          onChange={handleChange}
          name="email"
        />
        <textarea
          value={formData.comments}
          name="comments"
          placeholder="Comments"
          onChange={handleChange}
        />
        <label>
          <input
            type="checkbox"
            checked={formData.isFriendly}
            name="isFriendly"
            onChange={handleChange}
          />
          {"Kutu girdisi"}
        </label>
        <fieldset className="radio-input wide-grid">
          <legend>Radio Inputs</legend>
          <label>
            <input
              type="radio"
              name="employment"
              value="unemployd"
              checked={formData.employment === "unemployd"}
              onChange={handleChange}
            />
            {"Unemployd"}
          </label>
          <label>
            <input
              type="radio"
              name="employment"
              value="part-time"
              checked={formData.employment === "part-time"}
              onChange={handleChange}
            />
            {"Part-time"}
          </label>
          <label>
            <input
              type="radio"
              name="employment"
              value="full-time"
              checked={formData.employment === "full-time"}
              onChange={handleChange}
            />
            {"Full-time"}
          </label>
        </fieldset>
        <label className="wide-grid" htmlFor="favColor">
          Dropdown Select
        </label>
        <select
          className="wide-grid"
          id="select"
          value={formData.facColor}
          onChange={handleChange}
        >
          <option value="">-- Choose --</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
        <button>Submit</button>
      </form>
      <div className="input-demo">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            className="form--input"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="password"
            placeholder="Password"
            className="form--input"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="form--input"
            name="passwordConfirm"
            onChange={handleChange}
            value={formData.passwordConfirm}
          />

          <label htmlFor="okayToEmail">
            <input
              id="okayToEmail"
              type="checkbox"
              name="joinedNewsletter"
              onChange={handleChange}
              checked={formData.joinedNewsletter}
            />
            I want to join the newsletter
          </label>
          <button className="form--submit">Sign up</button>
        </form>
      </div>
    </>
  );
}
