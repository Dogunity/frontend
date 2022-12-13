import { useState, useMemo, useCallback } from "react";
import { useLocation } from "react-router-dom";

const useFeed = () => {
  const [selectedFeedItem, setSelectedFeedItem] = useState(null);

  const { state } = useLocation();
  const { name, introduction, communityImage } = useMemo(() => state, [state]);

  const handleFeedImageButtonClick = useCallback(
    (_, selectedItem) => {
      setSelectedFeedItem(selectedItem);
      console.log(selectedFeedItem);
    },
    [setSelectedFeedItem]
  );

  return {
    name,
    introduction,
    communityImage,
    handleFeedImageButtonClick,
  };
};

export default useFeed;
