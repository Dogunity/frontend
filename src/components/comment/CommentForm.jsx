import { Box, TextField, Button } from "@mui/material";

const CommentForm = ({
  formValue,
  onFormValueChangeEvent,
  onFormValueSubmitEvent,
}) => {
  return (
    <Box component="form" sx={{ mt: 5 }} onSubmit={onFormValueSubmitEvent}>
      <Box sx={{ mt: 2 }}>
        <TextField
          label="Comment"
          variant="standard"
          name="comment"
          sx={{ width: 180 }}
          value={formValue.comment}
          onChange={onFormValueChangeEvent}
        />
        <Button type="submit" variant="contained" sx={{ ml: 1 }}>
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default CommentForm;
