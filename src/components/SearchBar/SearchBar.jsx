import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");
  const toastId = "id-toast";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      if (toast.id === "id-toast") {
        return;
      }
      toast.success("Please, enter text to search ", {
        id: toastId,
        duration: 2500,
        position: "top-center",
        removeDelay: 500,
        className: "toast",
        icon: "!",
      });

      return;
    }
    onSubmit(query);

    setQuery("");
  };
  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            onChange={handleInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="text"
            value={query}
          />
          <button className={css.button} type="submit">
            Search
          </button>
          <Toaster 
          toastOptions={{
            style: {
              padding: "16px",
              color: "white",
              backgroundColor: "rgb(154, 5, 5)",
            },
          }}/>
        </form>
      </header>
    </>
  );
}