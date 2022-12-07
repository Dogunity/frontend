import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useSessionStorage from "../common/useSessionStorage";
import { authLoginRequest } from "../../apis/authService";

const userSignInSchema = yup.object().shape({
  email: yup.string().email("Please check your email information"),
  password: yup
    .string()
    .min(8, "Please check your password information")
    .max(15, "Please check your password information")
    .matches(/(?=.*\d)(?=.*[a-z]).{8,15}/),
});

const useSignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(userSignInSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { setSessionStorageItem } = useSessionStorage();

  const handleLoginSubmit = async (formData) => {
    const { email, password } = formData;
    const { data } = await authLoginRequest(email, password);
    if (data.success) {
      window.location.replace("/");
      console.log(data);
    }
  };

  return {
    register,
    errors,
    handleSubmit,
    handleLoginSubmit,
  };
};

export default useSignIn;
