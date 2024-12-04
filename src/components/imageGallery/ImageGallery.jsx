import { useState, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Button from "../../helpers/Button";

function ImageGallery({ images, handleSearch }) {
  const [pictures, setPictures] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (images && images.hits) {
      setPictures(images.hits);
    }
  }, [images]);

  const totalMatches = images ? images.total : 0;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleNewSearchValue = () => {
    handleSearch(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setInputValue("");
    }
  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div className="imageGalleryWrapper">
      <div className="imageGalleyInputWrapper">
        <span className="imageGalleryInner">
          <input
            className="imageGalleryInput"
            type="text"
            onKeyDown={handleKeyDown}
            value={inputValue}
            onChange={handleInputChange}
          />
          {inputValue && (
            <Button
              className="clearButton"
              PressMe={clearInput}
              text={"✖"}
              aria-label="Clear search input"
            />
          )}
        </span>
        <Button
          text={"Search"}
          PressMe={handleNewSearchValue}
          className="imageGallerySearchBtn"
        />
      </div>
      <p className="imageGalleryText">We have found: {totalMatches} matches</p>
      <PhotoProvider>
        <ul className="ImageGalleryList">
          {pictures.map((picture) => (
            <li key={picture.id}>
              <PhotoView src={picture.largeImageURL}>
                <img
                  src={picture.previewURL}
                  alt="Preview"
                  style={{ cursor: "pointer", maxWidth: "100%" }}
                />
              </PhotoView>
            </li>
          ))}
        </ul>
      </PhotoProvider>
    </div>
  );
}

export default ImageGallery;
