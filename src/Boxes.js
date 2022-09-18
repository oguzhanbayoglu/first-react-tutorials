import React from "react";
import "./styles.css";
import boxesData from "./boxesData";

// boxes -- useState & props

export default function Boxes() {
  function Box(props) {
    const [on, setOn] = React.useState(props.on);
    function toggle() {
      setOn((prevOn) => !prevOn);
    }
    const styles = {
      backgroundColor: on ? "#324AAB" : "#ffffff",
    };
    return <div style={styles} className="box" onClick={toggle}></div>;
  }
  const [squares, setSquares] = React.useState(boxesData);
  const squareDiv = squares.map((square) => {
    return <Box key={squares.id} on={square.on} />;
  });
  return (
    <div className="box-challange">
      <h2>Box Challange</h2>
      <div>{squareDiv}</div>
    </div>
  );
}
