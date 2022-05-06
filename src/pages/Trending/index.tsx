import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import useStyles from "./styles";

const Trending: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();

  const caption = React.useMemo(() => {
    return location.pathname === '/trending/developers' ? 
      'These are the developers building the hot tools today.' 
      : 'See what the GitHub community is most excited about today.';
  }, [location]);

  return (
    <>
      <div className={classes.header}>
        <h1 className={classes.title}>Trending</h1>
        <p className={classes.caption}>{caption}</p>
      </div>
      <div className={classes.content}>
        <Outlet />
      </div>
    </>
  );
}

export default Trending;
