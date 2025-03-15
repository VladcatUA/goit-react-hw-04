import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
//import { useState } from "react";
export default function ImageGallery({ items, onImageClick }) {
  if (!items || items.length === 0) {
    return;
  }
  return (
    <>
      <ul className={css.list}>
        {items.length > 0 &&
          items.map((item) => {
            return (
              <li key={item.id} onClick={() => onImageClick(item.urls.regular)}>
                <ImageCard item={item} />
              </li>
            );
          })}
      </ul>
    </>
  );
}