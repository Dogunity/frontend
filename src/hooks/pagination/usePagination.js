import { useMemo, useCallback } from "react";

const usePagination = (curPage, setCurPage, totalPage, divider) => {
  const isFirstPage = useMemo(() => curPage === 1, [curPage]);
  const isLastPage = useMemo(() => curPage === totalPage, [curPage, totalPage]);
  const initialPageNum = (Math.ceil(curPage / divider) - 1) * divider + 1;
  const pageListIndex = Array.from({ length: divider })
    .fill(0)
    .map((_, index) =>
      initialPageNum + index <= totalPage ? initialPageNum + index : null
    );
  const pageList = pageListIndex.filter((page) => Number.isInteger(page));

  const handlePrevPageButtonClick = useCallback(() => {
    setCurPage(curPage - 1);
  }, [curPage, setCurPage]);

  const handlePageButtonClick = useCallback(
    (page) => () => {
      setCurPage(page);
    },
    [setCurPage]
  );

  const handleNextPageButtonClick = useCallback(() => {
    setCurPage(curPage + 1);
  }, [curPage, setCurPage]);

  return {
    isFirstPage,
    isLastPage,
    pageList,
    handlePrevPageButtonClick,
    handlePageButtonClick,
    handleNextPageButtonClick,
  };
};

export default usePagination;
