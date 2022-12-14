import { useState, useEffect, useMemo, useCallback } from "react";
import { useLocation } from "react-router-dom";
import useSessionStorage from "../common/useSessionStorage";
import useModal from "../common/useModal";
import {
  feedItemListRequest,
  feedDeleteRequest,
  feedLikeRequest,
  feedUnLikeRequest,
} from "../../apis/feedService";

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
      handleIsModalOpenStateChange();
    },
    [setSelectedFeedItem, handleIsModalOpenStateChange]
  );

  const handleFeedDeleteButtonClick = useCallback(
    (feed) => async () => {
      const res = await feedDeleteRequest(feed.communityId, feed.id, item);
      const { data } = res;
      if (data.success) window.location.replace("/community");
    },
    [item]
  );

  const handleFeedLikeButtonClick = async (_, feedId) => {
    const { data } = await feedLikeRequest(feedId, item);
    if (data.status >= 400) await feedUnLikeRequest(feedId, item);
    window.location.reload();
  };

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
    handleFeedDeleteButtonClick,
    handleFeedLikeButtonClick,
  };
};

export default useFeed;
