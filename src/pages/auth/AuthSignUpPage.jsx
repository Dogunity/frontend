import React from "react";
import { Typography } from "@mui/material";
import useSignUp from "../../hooks/auth/useSignUp";
import AuthContainer from "../../components/containers/AuthContainer";
import MyCustomModal from "../../components/modal/MyCustomModal";

const AuthSignUpPage = () => {
  const {
    register,
    errors,
    isModalOpen,
    handleSubmit,
    handleRegisterSubmit,
    handleIsModalOpenStateChange,
  } = useSignUp();

  return (
    <React.Fragment>
      <AuthContainer
        isSignIn={false}
        register={register}
        errors={errors}
        onRegisterRequestEvent={handleSubmit(handleRegisterSubmit)}
      />
      <MyCustomModal
        isModalOpen={isModalOpen}
        title="WARNING"
        onIsModalOpenStateChangeEvent={handleIsModalOpenStateChange}
      >
        <Typography variant="h6" color="text.secondary">
          Eamil or nickname are already in use
        </Typography>
      </MyCustomModal>
    </React.Fragment>
  );
};

export default AuthSignUpPage;
