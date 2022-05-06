import React from "react";
import clsx from "clsx";
import useStyles from "./styles";
import { ToggleProps } from "./types";

const Toggle: React.FC<ToggleProps> = (props) => {
  const classes = useStyles();

  return (
    <nav className={classes.toggleRoot}>
      {React.Children.map(props.children, (child, childIndex) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props,
            className: clsx(classes.toggleItem, {
              [classes.selected]: childIndex === props.value
            })
          })
        }
        return child;
      })}
    </nav>
  )
}

export default Toggle;
