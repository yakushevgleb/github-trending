import React from "react";
import useStyles from "./styles";
import DropdownMenu from './DropdownMenu';
import { DropdownProps } from "./types";

const Dropdown: React.FC<DropdownProps> = (props) => {
  const classes = useStyles();

  return (
    <details className={classes.dropdownRoot}>
      <summary className={classes.valueRoot}>
        {props.label}
        <span className={classes.displayValue}>&nbsp;{props.value?.value}&nbsp;</span>
      </summary>
      <DropdownMenu
        value={props.value}
        options={props.options}
        onClick={props.onChange}
        searchable={props.searchable}
        inputProps={props.inputProps}
      >
        {props.children}
      </DropdownMenu>
    </details>
  )
}

export default Dropdown;
