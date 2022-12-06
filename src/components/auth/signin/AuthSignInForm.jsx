import { Button, TextField, Link, Box, Grid } from "@mui/material";

const AuthSignInForm = ({ register, errors, onUserLoginRequestEvent }) => {
  return (
    <Box component="form" sx={{ mt: 1 }} onSubmit={onUserLoginRequestEvent}>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Email Address"
        type="email"
        name="email"
        autoFocus
        error={errors?.email?.message ? true : false}
        helperText={errors?.email?.message}
        {...register("email")}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        error={errors?.password?.message ? true : false}
        helperText={errors?.password?.message}
        {...register("password")}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Grid container>
        <Grid item>
          <Link href="/register" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthSignInForm;
