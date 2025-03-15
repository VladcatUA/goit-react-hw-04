import css from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ onClick }) {
  return (
    <>
      <button className={css.btnMore} onClick={onClick}>
        Load more
      </button>
    </>
  );
}