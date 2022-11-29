import React from "react";

import shortid from "shortid";

export default function WatchForm({
  onSubmite,
  onChange,
  name,
  timeZone,
  error,
}) {
  return (
    <form
      className="watch-form mb-20"
      onSubmit={(event) =>
        onSubmite({ name, timeZone, id: shortid.generate() }, event)
      }
    >
      <div className="input-box">
        <label className="watch-label" htmlFor="id">
          Название
        </label>
        <input
          className="watch-input"
          id="id"
          type="text"
          name="name"
          value={name}
          onChange={onChange}
        />
      </div>
      <div className="input-box">
        <label className="watch-label" htmlFor="timeZone">
          Временная зона
        </label>
        <input
          className="watch-input"
          id="timeZone"
          type="text"
          name="timeZone"
          value={timeZone}
          onChange={onChange}
        />
        {error.length > 0 && <div className="error">{error}</div>}
      </div>
      <button className="watch-add">Добавить</button>
    </form>
  );
}
