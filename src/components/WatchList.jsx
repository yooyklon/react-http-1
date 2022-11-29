import React from "react";

import Whatch from "./Whatch";

export default function WatchList({ list, onRemoveItem }) {
  return (
    <div className="watch-list">
      {list &&
        list.map((el) => (
          <Whatch {...el} key={el.id} onRemoveItem={onRemoveItem} />
        ))}
    </div>
  );
}
