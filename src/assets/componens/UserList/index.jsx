import React from "react";
import "./index.css";
import User from "../User";
function UserList(props) {
  const { data } = props;
  return (
    <div className="user-list-w">
      <h1>salom</h1>
      <div className="users">
        {data.length &&
          data.map(function (user, index) {
            return <User key={index} user ={user} />;
          })}
      </div>
    </div>
  );
}
export default UserList;
