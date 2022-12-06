import AuthContainer from "../../components/containers/AuthContainer";

const AuthSignUpPage = () => {
  return <AuthContainer isSignIn={false} register={register} errors={errors} />;
};

export default AuthSignUpPage;
