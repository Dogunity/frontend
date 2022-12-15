export const afterLoginMenuItems = [
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

export const beforeLoginMenuItems = [
  {
    title: "Community",
    path: "/community",
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

export const tabItems = [
  {
    label: "My Communities",
  },
  {
    label: "Liked Communities",
  },
  {
    label: "Feeds",
  },
  {
    label: "Accounts",
  },
];

export const columns = [
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

export const feedColumns = [
  { field: "id", headerName: "ID", width: 310 },
  {
    field: "createdAt",
    headerName: "CreatedAt",
    width: 150,
    editable: true,
  },
  {
    field: "userId",
    headerName: "UserID",
    width: 90,
    editable: true,
  },
  {
    field: "likeCnt",
    headerName: "LikeCount",
    width: 90,
    editable: true,
  },
  {
    field: "description",
    headerName: "Description",
    width: 320,
    editable: true,
  },
];
