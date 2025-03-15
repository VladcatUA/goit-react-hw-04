import css from "./Loader.module.css";
import { Bars} from "react-loader-spinner";
export default function Loader() {
  return (
    <div className={css.loader}>
      <Bars
        color="#0303f7"
        width={150}
        height={5}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1}
      />
    </div>
  );
}