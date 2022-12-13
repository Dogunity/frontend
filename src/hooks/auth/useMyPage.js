import { useState, useCallback } from "react";

const useMyPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabItems = [
    {
      label: "Accounts",
    },
    {
      label: "My Communities",
    },
  ];

  const handleTabIndexChange = useCallback(
    (_, newValue) => {
      setTabIndex(newValue);
    },
    [setTabIndex]
  );

  return {
    tabIndex,
    tabItems,
    handleTabIndexChange,
  };
};

export default useMyPage;
