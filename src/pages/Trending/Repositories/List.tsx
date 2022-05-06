import React from 'react';
import ListItem from './ListItem';
import { ListProps } from './types';

const List: React.FC<ListProps> = (props) => {
  return (
    <div>
      {props.data?.map((repo) => (
        <ListItem key={repo.url} data={repo} />
      ))}
    </div>
  );
}

export default List;
