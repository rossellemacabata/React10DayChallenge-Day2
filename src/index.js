import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ScotchInfoBar from "./ScotchInfoBar";

import users from "./users-data";

function App() {
  return (
    <div className="App">
      <div className="page-deets">
        <h2>Loop Over an Array of Data</h2>
      </div>
      
      <div className="users">
        {users.map((user, index) => (
          <div key={index}>
            <h3>{user.name}</h3>
            <p>{user.location}</p>
            <p>{user.car}</p>
          </div>
        ))}
      </div>
      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
