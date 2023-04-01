import React from "react";
import Main from "../main/main";

function App({ countPlaces }: { countPlaces: number }): JSX.Element {
  return <Main countPlaces={countPlaces} />;
}

export default App;