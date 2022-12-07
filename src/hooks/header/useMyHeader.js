import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useSessionStorage from "../common/useSessionStorage";

const useMyHeader = () => {
  const { item } = useSessionStorage();
  const menuItems = useMemo(
    () => (item ? afterLoginMenuItems : beforeLoginMenuItems),
    [item]
  );

  const navigate = useNavigate();

  const handleLogoItemButtonClick = () => {
    navigate("/");
  };

  const handleMenuItemButtonClick = (path) => () => {
    navigate(path);
  };

  return {
    menuItems,
    handleLogoItemButtonClick,
    handleMenuItemButtonClick,
  };
};

const afterLoginMenuItems = [
  {
    title: "Community",
    path: "/community",
  },
  {
    title: "My page",
    path: "/mypage",
  },
  {
    title: "Sign out",
    path: "/",
  },
];

const beforeLoginMenuItems = [
  {
    title: "Community",
    path: "/community",
  },
  {
    title: "My page",
    path: "/mypage",
  },
  {
    title: "Sign in",
    path: "/login",
  },
  {
    title: "Sign up",
    path: "/register",
  },
];

export default useMyHeader;
