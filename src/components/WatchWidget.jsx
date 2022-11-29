import React, { useState } from "react";

import WatchList from "./WatchList";

import WatchForm from "./WatchForm";

export default function WatchWidget() {
  const [list, setList] = useState([]);

  const [form, setForm] = useState({
    name: "",
    timeZone: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    let name = event.target.name;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: event.target.value,
    }));
  }

  function addToList(element, event) {
    event.preventDefault();

    console.log(parseInt(element.timeZone));

    if (!isFinite(parseInt(element.timeZone))) {
      setError("Временная зона должна быть числом");
      return;
    } else if (element.timeZone[0] !== "+") {
      setError("Число должно начинаться со знаком +");
      return;
    } else {
      setError("");
    }

    setList((prevList) => [...prevList, element]);
    setForm({ name: "", timeZone: "" });
  }

  function removeItem(el) {
    setList((prevList) => [...prevList.filter((item) => item.id !== el.id)]);
  }

  return (
    <div className="watch-widget">
      <WatchForm
        onSubmite={addToList}
        onChange={handleChange}
        name={form.name}
        timeZone={form.timeZone}
        error={error}
      />

      <WatchList list={list} onRemoveItem={removeItem} />
    </div>
  );
}
