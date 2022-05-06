import clsx from "clsx";
import useStyles from "./styles"

const Input: React.FC<React.HTMLProps<HTMLInputElement>> = (props) => {
  const classes = useStyles();
  return (
    <input className={clsx(classes.inputRoot, props.className)} {...props} />
  );
}

export default Input;
