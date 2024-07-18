import React from "react";
import "./index.css";
import Car from "../Car";
function User(props) {
  const { user } = props;
  return (
    <div className="card">
      <img src={user.image} alt="" />
      <p>
        {" "}
        FirstName:{user.firstName} <br />
        lastName:{user.lastName}
      </p>
      <p>
        <span>Number: {user.phone}</span>
        <span>Email: {user.email}</span>
      </p>
      <p className="adrs">
        <span>Region: {user.address.region}</span>
        <span>Zip: {user.address.zip}</span>
      </p>

      <div>
        {user.cars &&
          user.cars.map(function (car, index) {
            return <Car key={index} car={car} />;
          })}
      </div>
    </div>
  );
}
export default User;
