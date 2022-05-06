import React from "react";
import { Link } from "react-router-dom";
import { BlockHeader, BlockWrapper } from 'ui/Block';
import Toggle from "ui/Toggle";

const Developers: React.FC = () => {
  return (
    <BlockWrapper>
      <BlockHeader>
        <Toggle value={1}>
          <Link to="/trending">Repositories</Link>
          <Link to="/trending/developers">Developers</Link>
        </Toggle>
      </BlockHeader>
    </BlockWrapper>
  )
}

export default Developers;
