import React from "react";
import { Typography } from "@mui/material";
import useSignIn from "../../hooks/auth/useSignIn";
import AuthContainer from "../../components/containers/AuthContainer";
import MyCustomModal from "../../components/modal/MyCustomModal";

const AuthSignInPage = () => {
  const {
    register,
    errors,
    isModalOpen,
    handleSubmit,
    handleLoginSubmit,
    handleIsModalOpenStateChange,
  } = useSignIn();

  return (
    <React.Fragment>
      <AuthContainer
        isSignIn={true}
        register={register}
        errors={errors}
        onUserLoginRequestEvent={handleSubmit(handleLoginSubmit)}
      />
      <MyCustomModal
        isModalOpen={isModalOpen}
        title="WARNING"
        onIsModalOpenStateChangeEvent={handleIsModalOpenStateChange}
      >
        <Typography variant="h6" color="text.secondary">
          Please check your information
        </Typography>
      </MyCustomModal>
    </React.Fragment>
  );
};

export default AuthSignInPage;
