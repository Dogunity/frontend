import { Paper, Box, Grid } from "@mui/material";
import AuthCommonSide from "../auth/common/AuthCommonSide";
import AuthCommonHeader from "../auth/common/AuthCommonHeader";
import AuthSignInForm from "../auth/signin/AuthSignInForm";
import AuthSignUpForm from "../auth/signin/AuthSignUpForm";

const AuthContainer = ({
  isSignIn,
  register,
  errors,
  onUserLoginRequestEvent,
}) => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <AuthCommonSide />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AuthCommonHeader title={isSignIn ? "Sign In" : "Sign Up"} />
          {isSignIn ? (
            <AuthSignInForm
              register={register}
              errors={errors}
              onUserLoginRequestEvent={onUserLoginRequestEvent}
            />
          ) : (
            <AuthSignUpForm
              register={register}
              errors={errors}
              onUserLoginRequestEvent={onUserLoginRequestEvent}
            />
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthContainer;
