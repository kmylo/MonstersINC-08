import MuiAlert from "@material-ui/lab/Alert";

function CustomAlert(props) {
  return <MuiAlert {...{ elevation: 6, variant: "filled", ...props }} />;
}

export default CustomAlert;
