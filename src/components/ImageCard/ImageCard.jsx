import css from "./ImageCard.module.css";
export default function ImageCard({ item }) {
  return (
    <div className={css.boxImageCard}>
      <div className={css.boxImg}>
        <img src={item.urls.small} alt={item.description || "Picture"} />
      </div>
      <div className={css.boxText}>
        <p>likes : {item.likes}</p>
      </div>
    </div>
  );
}