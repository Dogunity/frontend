import { useState, useEffect } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import useSessionStorage from "../../hooks/common/useSessionStorage";
import { commentListRequest } from "../../apis/commentService";

const CommentList = ({ feedId }) => {
  const [comments, setComments] = useState([]);

  const { item } = useSessionStorage();

  useEffect(() => {
    (async () => {
      const res = await commentListRequest(feedId, item);
      const { result } = res;
      console.log(result);
      setComments(result);
    })();
  }, [item, feedId]);

  return (
    <Box>
      {comments.map((com) => (
        <Box key={com.id} sx={{ mt: 1, cursor: "pointer" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              alt="profile image"
              src={com.User.profileImg}
              sx={{ display: "inline-block", width: 50, height: 50, mr: 2 }}
            />
            <Typography component="label">{com.User.email}</Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" sx={{ display: "inline" }}>
              Comment:{" "}
            </Typography>
            <Typography sx={{ display: "inline" }} variant="p">
              {com.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CommentList;
