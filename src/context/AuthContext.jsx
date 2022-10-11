import * as React from "react";

const AuthContext = React.createContext();
AuthContext.displayName = "AuthContext";

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const value = React.useMemo(() => {
    const login = () => {
      setIsAuthenticated(true);
    };
    const logout = () => {
      setIsAuthenticated(false);
    };
    return { isAuthenticated, login, logout };
  }, [isAuthenticated]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuthCtx() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthCtx must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuthCtx };
