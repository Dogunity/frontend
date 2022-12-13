import { useState, useCallback, useEffect } from "react";
import useSessionStorage from "../common/useSessionStorage";
import AuthCommunityGrid from "../../components/auth/community/AuthCommunityGrid";
import { authMyPageCommuityRequest } from "../../apis/authService";

const useMyPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [communities, setCommunities] = useState([]);

  const { item } = useSessionStorage();

  const tabItems = [
    {
      label: "My Communities",
    },
    {
      label: "Accounts",
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      editable: true,
    },
    {
      field: "introduction",
      headerName: "Introduction",
      width: 300,
      editable: true,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      width: 150,
      editable: true,
    },
    {
      field: "likeCnt",
      headerName: "Like",
      width: 120,
      editable: true,
    },
  ];

  useEffect(() => {
    (async () => {
      const res = await authMyPageCommuityRequest(1, item);
      const { myCommunities } = res;
      if (!myCommunities.length) return;
      const data = myCommunities.map((com) => {
        return {
          id: com.id,
          name: com.name,
          introduction: com.introduction,
          createdAt: com.createdAt.split("T")[0],
          likeCnt: com.likeCnt,
        };
      });
      setCommunities(data);
    })();
  }, [tabIndex]);

  const handleTabIndexChange = useCallback(
    (_, newValue) => {
      setTabIndex(newValue);
    },
    [setTabIndex]
  );

  const getComponentByTabIndex = () => {
    switch (tabIndex) {
      case 0:
        return <AuthCommunityGrid columns={columns} rows={communities} />;

      case 1:
        return <div>Tab 2</div>;

      default:
        break;
    }
  };

  return {
    tabIndex,
    tabItems,
    handleTabIndexChange,
    getComponentByTabIndex,
  };
};

export default useMyPage;
