import useSignUp from "../../hooks/auth/useSignUp";
import AuthContainer from "../../components/containers/AuthContainer";

const AuthSignUpPage = () => {
  const { register, errors, handleSubmit, handleRegisterSubmit } = useSignUp();

  return (
    <AuthContainer
      isSignIn={false}
      register={register}
      errors={errors}
      onRegisterRequestEvent={handleSubmit(handleRegisterSubmit)}
    />
  );
};

export default AuthSignUpPage;
