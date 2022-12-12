import { useState, useEffect } from "react";
import { communityListRequest } from "../../apis/communityService";

const useCommunity = () => {
  const [communities, setCommunities] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const divider = 9;

  useEffect(() => {
    (async () => {
      const res = await communityListRequest(curPage);
      setCommunities(res.result.selectedCommunities);
      setTotalPage(res.result.totalCommunityPage);
    })();
  }, [curPage]);

  return {
    communities,
    totalPage,
    divider,
    curPage,
    setCurPage,
  };
};

export default useCommunity;
