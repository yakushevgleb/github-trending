import React from "react";
import useStyles from "./styles";
import { BlockHeaderProps } from "./types";

const BlockHeader: React.FC<BlockHeaderProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      {props.children}
    </div>
  )
}

export default BlockHeader;
