import css from "./ErrorMessage.module.css";
export default function ErrorMessage() {
  return (
    <>{<p className={css.error}>Lost Connection, Please Reload the Page</p>}</>
  );
}