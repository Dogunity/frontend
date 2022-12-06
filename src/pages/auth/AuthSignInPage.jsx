import useSignIn from "../../hooks/auth/useSignIn";
import AuthContainer from "../../components/containers/AuthContainer";

const AuthSignInPage = () => {
  const { register, errors, handleSubmit, handleLoginSubmit } = useSignIn();

  return (
    <AuthContainer
      isSignIn={true}
      register={register}
      errors={errors}
      onUserLoginRequestEvent={handleSubmit(handleLoginSubmit)}
    />
  );
};

export default AuthSignInPage;
