import React from "react";

import { useNavigate } from "react-router-dom";

const Pallet = ({ namePallet, color, id }) => {
  const history = useNavigate();

  return (
    <div className="cursor-pointer w-80 px-3 py-2 bg-white rounded-md" onClick={() => history(`/palette/${id}`)} >
      <div className="flex flex-wrap flex-row">
        {color.map((item, index) => <div className="h-9 w-14" key={index} style={{ background: `${item.color}` }} />)}
      </div>

      <h1 className="mt-2">{namePallet}</h1>
    </div>
  );
};

export { Pallet };
