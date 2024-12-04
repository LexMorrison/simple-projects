import ReactPaginate from "react-paginate";

function GalleryPagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (event) => {
    console.log("Selected page index (0-based):", event.selected);
    console.log("Page to be set:", event.selected + 1);
    onPageChange(event.selected + 1);
  };

  console.log("Current page received by Pagination:", currentPage);

  return (
    <ReactPaginate
      previousLabel={"← Previous"}
      nextLabel={"Next →"}
      breakLabel={"..."}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      activeClassName={"active"}
      previousClassName={"prev"}
      nextClassName={"next"}
      disabledClassName={"disabled"}
      forcePage={currentPage - 1} // Привязывает активную страницу к состоянию
    />
  );
}

export default GalleryPagination;
