import * as React from "react";
import useApi from "../hooks/useApi";
import useMonsters from "../hooks/useMonsters";
import { myAPI01 } from "../utils/endpoint";

const MonstersContext = React.createContext();
MonstersContext.displayName = "MonstersContext";

function MonstersProvider({ children }) {
  const { response, error, isLoading } = useApi(myAPI01);
  const { monsters } = useMonsters({ data: response });

  const value = React.useMemo(() => ({ monsters, error, isLoading }), [
    monsters,
    error,
    isLoading
  ]);
  return (
    <MonstersContext.Provider value={value}>
      {children}
    </MonstersContext.Provider>
  );
}

function useMonster() {
  const context = React.useContext(MonstersContext);
  if (context === undefined) {
    throw new Error("useMonster must be used within a MonstersProvider");
  }
  return context;
}

export { MonstersProvider, useMonster };
