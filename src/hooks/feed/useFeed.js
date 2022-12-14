import { useState, useEffect, useMemo, useCallback } from "react";
import { useLocation } from "react-router-dom";
import useSessionStorage from "../common/useSessionStorage";
import useModal from "../common/useModal";
import { feedItemListRequest } from "../../apis/feedService";

const useFeed = () => {
  const [selectedFeedItem, setSelectedFeedItem] = useState(null);
  const [curPage, setCurPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [feeds, setFeeds] = useState([]);

  const { state } = useLocation();

  const { id, name, introduction, communityImage } = useMemo(
    () => state,
    [state]
  );

  const { item } = useSessionStorage();
  const { isModalOpen, handleIsModalOpenStateChange } = useModal();

  useEffect(() => {
    (async () => {
      const res = await feedItemListRequest(id, curPage, item);
      const { totalFeedPage, foundPosts } = res.result;
      setFeeds(foundPosts);
      setTotalPage(totalFeedPage);
    })();
  }, [id, curPage, item]);

  const handleFeedImageButtonClick = useCallback(
    (selectedItem) => () => {
      setSelectedFeedItem(selectedItem);
    },
    [setSelectedFeedItem]
  );

  return {
    id,
    name,
    introduction,
    communityImage,
    curPage,
    totalPage,
    feeds,
    selectedFeedItem,
    isModalOpen,
    setCurPage,
    handleFeedImageButtonClick,
    handleIsModalOpenStateChange,
  };
};

export default useFeed;
