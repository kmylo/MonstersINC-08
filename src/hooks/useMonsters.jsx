import { useEffect, useState } from "react";

// import { myAPI01 } from "../utils/endpoint";
// import useApi from "./useApi";

const useMonsters = ({ data }) => {
  // const { response, error, isLoading } = useApi(myAPI01);
  const [monsters, setMonsters] = useState([]);
  const [openSnackBar, setOpenSnackbar] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState("");

  useEffect(() => {
    // console.log({ response, error, isLoading });
    setMonsters(data);
    setOpenSnackbar(true);
    setSnackBarMsg("Loaded");
  }, [data]);
  return { monsters, openSnackBar, snackBarMsg };
};

export default useMonsters;
