import { Button, TextField, Link, Box, Grid } from "@mui/material";

const AuthSignUpForm = ({ register, errors, onRegisterRequestEvent }) => {
  return (
    <Box component="form" sx={{ mt: 1 }} onSubmit={onRegisterRequestEvent}>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Email Address"
        type="email"
        name="email"
        autoFocus
        error={errors.email ? true : false}
        helperText={errors?.email?.message}
        {...register("email")}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Nickname"
        type="text"
        name="nickname"
        autoFocus
        error={errors.nickname ? true : false}
        helperText={errors?.nickname?.message}
        {...register("nickname")}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        error={errors.password ? true : false}
        helperText={errors?.password?.message}
        {...register("password")}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button>
      <Grid container>
        <Grid item>
          <Link href="/login" variant="body2">
            {"Do you want to login? Sign In"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthSignUpForm;
