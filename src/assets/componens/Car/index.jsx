import React from "react";
import "./index.css";
function Car(props) {
  const { car } = props;
  return (
    <div className="car-w">
      <span>{car}</span>
    </div>
  );
}
export default Car;
