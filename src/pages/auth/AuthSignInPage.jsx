import AuthContainer from "../../components/containers/AuthContainer";

const AuthSignInPage = () => {
  return <AuthContainer isSignIn={true} register={register} errors={errors} />;
};

export default AuthSignInPage;
