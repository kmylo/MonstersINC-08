// LAYOUTS
import MainLayout from "./layouts/MainLayout";

// ROUTERS
import MainRouter from "./containers/MainRouter";

// EXTERNAL
import CustomAlert from "./components/CustomAlert";
import { Snackbar } from "@material-ui/core";
import { useSnackBar } from "./context/SnackBarContext";

// UTILS
import { APP_ROUTES } from "./utils/routes";

const App = ({ appTitle = "Title" } = {}) => {
  const { openSnackBar, setOpenSnackbar, snackBarMsg } = useSnackBar();

  return (
    <MainLayout {...{ appTitle }}>
      <main>
        <MainRouter routes={APP_ROUTES} />
      </main>
      <Snackbar
        open={openSnackBar}
        onClose={() => setOpenSnackbar(false)}
        autoHideDuration={1000}
        message={snackBarMsg}
      >
        <CustomAlert severity="success">{snackBarMsg}</CustomAlert>
      </Snackbar>
    </MainLayout>
  );
};

export default App;
