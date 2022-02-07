import { createContext, useState } from "react";

const NameContext = createContext();

export function NameProvider({ children }) {
  const persistedName = JSON.parse(localStorage.getItem("name"));
  const [name, setName] = useState(persistedName);

  function nameChanger(nameData) {
    setName(nameData);
    localStorage.setItem("name", JSON.stringify(nameData));
  }

  return (
    <NameContext.Provider value={{ name, nameChanger }}>
      {children}
    </NameContext.Provider>
  );
}

export default NameContext;
