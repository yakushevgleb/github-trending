import React from "react";
import clsx from "clsx";
import BookSvg from "assets/icons/BookSvg";
import StarSvg from "assets/icons/StarSvg";
import useStyles from "./styles";
import { ListItemProps } from './types';
import ForkSvg from "assets/icons/ForkSvg";

const ListItem: React.FC<ListItemProps> = (props) => {
  const classes = useStyles();

  return (
    <article className={classes.listItemRoot}>
      <h1 className={classes.title}>
        <a href={props.data.url} className={classes.link}>
          <BookSvg />
          <span className={classes.user}>{props.data.username} / </span>
          {props.data.repositoryName}
        </a>
      </h1>
      <p className={classes.description}>
        {props.data.description}
      </p>
      <div className={classes.infoBlock}>
        {!!props.data.language && (
          <span className={classes.infoItem}>{props.data.language}</span>
        )}
        <a href={props.data.url + '/stargazers'} className={clsx(classes.infoItem, classes.infoLink)}>
          <StarSvg />
            &nbsp;{props.data.totalStars}
        </a>
        <a href={props.data.url + `/network/members.${props.data.repositoryName}`} className={clsx(classes.infoItem, classes.infoLink)}>
          <ForkSvg />
            &nbsp;{props.data.forks}
        </a>
        <span className={classes.infoItem}>
          Built by &nbsp;
          {props.data.builtBy?.map((user) => (
            <a key={user.url} href={user.url}>
              <img className={classes.avatar} src={user.avatar} alt={user.username} />
            </a>
          ))}
        </span>
        <span className={clsx(classes.infoItem, classes.floatRight)}>
          <StarSvg />
          &nbsp;{`${props.data.starsSince} stars today`}
        </span>
      </div>
    </article> 
  )
}

export default ListItem;
