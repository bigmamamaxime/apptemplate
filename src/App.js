import React from "react";
import { MyFirstComponent } from "./components/myfirstcomponent/MyFirstComponent";
import { Routing } from "./routes/Routing"

function App() {
  return (
    <Routing>
      <h1>React Tutorial!</h1>
      < MyFirstComponent name="Max" age="33" />
    </Routing>
  );
}

export default App;
