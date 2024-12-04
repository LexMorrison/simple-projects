import { useState, useEffect } from "react";
import getImages from "../api/galleryApi";
import ImageGallery from "../components/imageGallery/ImageGallery";
import GalleryPagination from "../components/imageGallery/GalleryPagination";

function ImageGalleryPage() {
  const [images, setImages] = useState({});
  const [request, setRequest] = useState("random");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const ApiKey = import.meta.env.VITE_API_KEY_GALLERY;
  const hitsPerPage = 20;

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const data = await getImages(request, page, ApiKey);
        setImages(data);
      } catch (error) {
        console.error("Error fetching images");
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [request, page]);

  const handleSearch = (query) => {
    setRequest(query);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  console.log("Current page in state:", page);

  return (
    <section className="gallerySection">
      {isLoading ? (
        <p style={{ position: "absolute", top: "50%", left: "50%" }}>
          Loading...
        </p>
      ) : (
        <>
          <ImageGallery images={images} handleSearch={handleSearch} />
          <GalleryPagination
            currentPage={page}
            totalItems={images.total}
            itemsPerPage={hitsPerPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </section>
  );
}

export default ImageGalleryPage;
