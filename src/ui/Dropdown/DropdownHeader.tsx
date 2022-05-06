import useStyles from "./styles";
import { DropdownHeaderProps } from "./types";

const DropdownHeader: React.FC<DropdownHeaderProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.menuHeader}>
      <div className={classes.menuTitle}>
        {props.children}
      </div>
    </div>
  )
}

export default DropdownHeader;
