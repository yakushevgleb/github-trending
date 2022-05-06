import React from "react";
import useStyles from "./styles";
import { BlockWrapperProps } from "./types";

const BlockWrapper: React.FC<BlockWrapperProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {props.children}
    </div>
  )
}

export default BlockWrapper;
