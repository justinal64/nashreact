import React, { useContext } from "react";

const JediContext = React.createContext();

function Display() {
  const value = useContext(JediContext);
  const test = useContext(JediContext);

  return (
    <div>
      {value}, I am your Father. {test}
    </div>
  );
}
// tomorrow research how useContext works and try to add more data!!!!!!!
export function App() {
  return (
    <JediContext.Provider value={"Luke"} test={"help"}>
      <Display />
    </JediContext.Provider>
  );
}
