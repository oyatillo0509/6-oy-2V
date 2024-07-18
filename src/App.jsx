import React from "react";

import "./App.css";
import data from "./assets/data.json";
import UserList from "./assets/componens/UserList";

function App() {
  return (
    <div>
      <UserList data={data} />
    </div>
  );
}
export default App;
