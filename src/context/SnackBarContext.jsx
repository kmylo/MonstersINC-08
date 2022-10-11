import * as React from "react";

const SnackBarContext = React.createContext();
SnackBarContext.displayName = "SnackBarContext";

function SnackBarProvider({ children }) {
  const [openSnackBar, setOpenSnackbar] = React.useState(false);
  const [snackBarMsg, setSnackBarMsg] = React.useState("");

  const value = React.useMemo(
    () => ({ openSnackBar, setOpenSnackbar, snackBarMsg, setSnackBarMsg }),
    [openSnackBar, setOpenSnackbar, snackBarMsg, setSnackBarMsg]
  );
  return (
    <SnackBarContext.Provider value={value}>
      {children}
    </SnackBarContext.Provider>
  );
}

function useSnackBar() {
  const context = React.useContext(SnackBarContext);
  if (context === undefined) {
    throw new Error("useSnackBar must be used within a SnackBarProvider");
  }
  return context;
}

export { SnackBarProvider, useSnackBar };
