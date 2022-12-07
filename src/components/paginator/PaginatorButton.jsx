import usePagination from "../../hooks/pagination/usePagination";
import { Box, Button } from "@mui/material";

const PaginatorButton = ({ curPage, setCurPage, totalPage, divider }) => {
  const {
    isFirstPage,
    isLastPage,
    pageList,
    handlePrevPageButtonClick,
    handlePageButtonClick,
    handleNextPageButtonClick,
  } = usePagination(curPage, setCurPage, totalPage, divider);

  return (
    <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1rem",
        }}
      >
        <Button
          disabled={isFirstPage}
          variant="contained"
          onClick={handlePrevPageButtonClick}
        >
          Prev
        </Button>
        {pageList.map((page) => (
          <Button
            key={page}
            variant={curPage === page ? "contained" : "outlined"}
            onClick={handlePageButtonClick(page)}
          >
            {page}
          </Button>
        ))}
        <Button
          disabled={isLastPage}
          variant="contained"
          onClick={handleNextPageButtonClick}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default PaginatorButton;
